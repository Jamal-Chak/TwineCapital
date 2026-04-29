import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const DATA_FILE = path.join(process.cwd(), "data", "testimonials.json");

function canUseLocalFallback() {
  return process.env.NODE_ENV !== "production" || process.env.ALLOW_LOCAL_TESTIMONIAL_FALLBACK === "1";
}

function getSupabaseConfig({ admin = false } = {}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = admin
    ? process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

  if (!url || !key || url.includes("placeholder") || key.includes("placeholder")) {
    return null;
  }

  return { url, key };
}

function getSupabaseClient(options) {
  const config = getSupabaseConfig(options);
  return config ? createClient(config.url, config.key) : null;
}

function getBearerToken(request) {
  const authHeader = request.headers.get("authorization") || "";
  return authHeader.toLowerCase().startsWith("bearer ") ? authHeader.slice(7) : "";
}

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || process.env.SUPABASE_ADMIN_EMAILS || process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

async function isAdminRequest(request) {
  const configuredKey = process.env.TESTIMONIAL_ADMIN_KEY || process.env.ADMIN_KEY;

  if (configuredKey && request.headers.get("x-admin-key") === configuredKey) {
    return true;
  }

  const adminEmails = getAdminEmails();
  const token = getBearerToken(request);
  const authClient = getSupabaseClient();

  if (token && authClient && adminEmails.length) {
    const { data, error } = await authClient.auth.getUser(token);
    const email = data?.user?.email?.toLowerCase();

    if (!error && email && adminEmails.includes(email)) {
      return true;
    }
  }

  return !configuredKey && !adminEmails.length && process.env.NODE_ENV !== "production";
}

async function readLocalTestimonials() {
  try {
    const content = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeLocalTestimonials(testimonials) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(testimonials, null, 2));
}

function normalizePayload(payload) {
  const rating = Number(payload.rating || 5);

  return {
    name: String(payload.name || "").trim(),
    email: String(payload.email || "").trim() || null,
    feedback: String(payload.feedback || "").trim(),
    rating: Number.isFinite(rating) ? Math.min(Math.max(Math.round(rating), 1), 5) : 5,
  };
}

function validateTestimonial(testimonial) {
  if (!testimonial.name || testimonial.name.length < 2) return "Please provide your name.";
  if (!testimonial.feedback || testimonial.feedback.length < 10) return "Please share a testimonial with at least 10 characters.";
  if (testimonial.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testimonial.email)) return "Please provide a valid email address.";
  return null;
}

function publicFields(testimonial) {
  return {
    id: testimonial.id,
    name: testimonial.name,
    feedback: testimonial.feedback,
    rating: testimonial.rating || 5,
    role: testimonial.role || null,
    company: testimonial.company || null,
    is_approved: Boolean(testimonial.is_approved),
    created_at: testimonial.created_at || testimonial.createdAt || null,
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const adminMode = searchParams.get("admin") === "1";

  if (adminMode && !(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseClient({ admin: adminMode });

  if (supabase) {
    let query = supabase
      .from("testimonials")
      .select("id,name,email,feedback,rating,role,company,is_approved,created_at")
      .order("created_at", { ascending: false });

    if (!adminMode) {
      query = query.eq("is_approved", true);
    }

    const { data, error } = await query;

    if (!error) {
      return NextResponse.json({ testimonials: data.map(publicFields) });
    }

    console.warn("Supabase testimonials read failed:", error.message);
    if (!canUseLocalFallback()) {
      return NextResponse.json({ error: "Unable to load testimonials." }, { status: 502 });
    }
  } else if (!canUseLocalFallback()) {
    return NextResponse.json({ error: "Testimonials storage is not configured." }, { status: 503 });
  }

  const testimonials = await readLocalTestimonials();
  return NextResponse.json({
    testimonials: testimonials
      .filter((testimonial) => adminMode || testimonial.is_approved !== false)
      .map(publicFields),
  });
}

export async function POST(request) {
  const testimonial = normalizePayload(await request.json());
  const validationError = validateTestimonial(testimonial);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const supabase = getSupabaseClient();

  if (supabase) {
    const insertPayload = {
      name: testimonial.name,
      email: testimonial.email,
      feedback: testimonial.feedback,
      rating: testimonial.rating,
      is_approved: false,
    };

    let result = await supabase.from("testimonials").insert(insertPayload).select("id").single();

    if (result.error && result.error.message.toLowerCase().includes("rating")) {
      const { rating, ...payloadWithoutRating } = insertPayload;
      result = await supabase.from("testimonials").insert(payloadWithoutRating).select("id").single();
    }

    if (!result.error) {
      return NextResponse.json(
        {
          message: "Thanks. Your testimonial has been submitted for review.",
          testimonial: { ...testimonial, id: result.data?.id },
        },
        { status: 201 },
      );
    }

    console.warn("Supabase testimonials write failed:", result.error.message);
    if (!canUseLocalFallback()) {
      return NextResponse.json({ error: "Unable to submit testimonial." }, { status: 502 });
    }
  } else if (!canUseLocalFallback()) {
    return NextResponse.json({ error: "Testimonials storage is not configured." }, { status: 503 });
  }

  const testimonials = await readLocalTestimonials();
  const newTestimonial = {
    ...testimonial,
    id: crypto.randomUUID(),
    is_approved: false,
    created_at: new Date().toISOString(),
  };

  await writeLocalTestimonials([newTestimonial, ...testimonials]);

  return NextResponse.json(
    {
      message: "Thanks. Your testimonial has been submitted.",
      testimonial: publicFields(newTestimonial),
    },
    { status: 201 },
  );
}

export async function PATCH(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, is_approved } = await request.json();

  if (!id || typeof is_approved !== "boolean") {
    return NextResponse.json({ error: "Provide an id and approval status." }, { status: 400 });
  }

  const supabase = getSupabaseClient({ admin: true });

  if (supabase) {
    const { data, error } = await supabase
      .from("testimonials")
      .update({ is_approved })
      .eq("id", id)
      .select("id,name,feedback,rating,role,company,is_approved,created_at")
      .single();

    if (!error) {
      return NextResponse.json({ testimonial: publicFields(data) });
    }

    console.warn("Supabase testimonials update failed:", error.message);
    if (!canUseLocalFallback()) {
      return NextResponse.json({ error: "Unable to update testimonial." }, { status: 502 });
    }
  } else if (!canUseLocalFallback()) {
    return NextResponse.json({ error: "Admin testimonial storage is not configured." }, { status: 503 });
  }

  const testimonials = await readLocalTestimonials();
  const updated = testimonials.map((testimonial) =>
    testimonial.id === id ? { ...testimonial, is_approved } : testimonial,
  );

  await writeLocalTestimonials(updated);

  const testimonial = updated.find((item) => item.id === id);

  if (!testimonial) {
    return NextResponse.json({ error: "Testimonial not found." }, { status: 404 });
  }

  return NextResponse.json({ testimonial: publicFields(testimonial) });
}

export async function DELETE(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Provide a testimonial id." }, { status: 400 });
  }

  const supabase = getSupabaseClient({ admin: true });

  if (supabase) {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);

    if (!error) {
      return NextResponse.json({ message: "Testimonial deleted." });
    }

    console.warn("Supabase testimonials delete failed:", error.message);
    if (!canUseLocalFallback()) {
      return NextResponse.json({ error: "Unable to delete testimonial." }, { status: 502 });
    }
  } else if (!canUseLocalFallback()) {
    return NextResponse.json({ error: "Admin testimonial storage is not configured." }, { status: 503 });
  }

  const testimonials = await readLocalTestimonials();
  const remaining = testimonials.filter((testimonial) => testimonial.id !== id);

  if (remaining.length === testimonials.length) {
    return NextResponse.json({ error: "Testimonial not found." }, { status: 404 });
  }

  await writeLocalTestimonials(remaining);
  return NextResponse.json({ message: "Testimonial deleted." });
}
