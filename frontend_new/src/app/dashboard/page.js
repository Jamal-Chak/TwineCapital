"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FiCheck, FiRefreshCw, FiShield, FiTrash2, FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
    const { user, session, loading: authLoading } = useAuth();
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [adminKey, setAdminKey] = useState("");
    const [busyId, setBusyId] = useState("");
    const requiresLogin = process.env.NODE_ENV === "production";

    const pending = useMemo(
        () => testimonials.filter((testimonial) => !testimonial.is_approved),
        [testimonials],
    );
    const approved = useMemo(
        () => testimonials.filter((testimonial) => testimonial.is_approved),
        [testimonials],
    );

    const getAuthHeaders = () => {
        const headers = {};

        if (adminKey) {
            headers["x-admin-key"] = adminKey;
        }

        if (session?.access_token) {
            headers.Authorization = `Bearer ${session.access_token}`;
        }

        return headers;
    };

    const loadTestimonials = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/testimonials?admin=1", {
                headers: getAuthHeaders(),
                cache: "no-store",
            });
            const payload = await response.json();

            if (!response.ok) {
                throw new Error(payload.error || "Unable to load testimonials.");
            }

            setTestimonials(payload.testimonials || []);
        } catch (err) {
            setError(err.message || "Unable to load testimonials.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authLoading) return;

        loadTestimonials();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authLoading, user, session]);

    const updateApproval = async (id, isApproved) => {
        setBusyId(id);
        setError("");

        try {
            const response = await fetch("/api/testimonials", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    ...getAuthHeaders(),
                },
                body: JSON.stringify({
                    id,
                    is_approved: isApproved,
                }),
            });
            const payload = await response.json();

            if (!response.ok) {
                throw new Error(payload.error || "Unable to update testimonial.");
            }

            setTestimonials((current) =>
                current.map((testimonial) =>
                    testimonial.id === id ? { ...testimonial, is_approved: isApproved } : testimonial,
                ),
            );
        } catch (err) {
            setError(err.message || "Unable to update testimonial.");
        } finally {
            setBusyId("");
        }
    };

    const deleteTestimonial = async (id) => {
        setBusyId(id);
        setError("");

        try {
            const response = await fetch(`/api/testimonials?id=${encodeURIComponent(id)}`, {
                method: "DELETE",
                headers: getAuthHeaders(),
            });
            const payload = await response.json();

            if (!response.ok) {
                throw new Error(payload.error || "Unable to delete testimonial.");
            }

            setTestimonials((current) => current.filter((testimonial) => testimonial.id !== id));
        } catch (err) {
            setError(err.message || "Unable to delete testimonial.");
        } finally {
            setBusyId("");
        }
    };

    const renderTestimonial = (testimonial) => (
        <article
            key={testimonial.id}
            className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-black/10"
        >
            <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-slate-400">
                        {[testimonial.role, testimonial.company].filter(Boolean).join(", ") || "Client testimonial"}
                    </p>
                </div>
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        testimonial.is_approved
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-amber-500/10 text-amber-300"
                    }`}
                >
                    {testimonial.is_approved ? "Approved" : "Pending"}
                </span>
            </div>

            <div className="mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating || 5 }).map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                ))}
            </div>

            <p className="mb-5 text-sm leading-6 text-slate-300">&quot;{testimonial.feedback}&quot;</p>

            <div className="flex flex-wrap gap-2">
                {!testimonial.is_approved ? (
                    <button
                        onClick={() => updateApproval(testimonial.id, true)}
                        disabled={busyId === testimonial.id}
                        className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
                    >
                        <FiCheck className="h-4 w-4" />
                        Approve
                    </button>
                ) : (
                    <button
                        onClick={() => updateApproval(testimonial.id, false)}
                        disabled={busyId === testimonial.id}
                        className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700 disabled:opacity-60"
                    >
                        <FiX className="h-4 w-4" />
                        Unpublish
                    </button>
                )}

                <button
                    onClick={() => deleteTestimonial(testimonial.id)}
                    disabled={busyId === testimonial.id}
                    className="inline-flex items-center gap-2 rounded-md border border-red-500/30 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 disabled:opacity-60"
                >
                    <FiTrash2 className="h-4 w-4" />
                    Delete
                </button>
            </div>
        </article>
    );

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                            <FiShield className="h-4 w-4" />
                            Admin Dashboard
                        </div>
                        <h1 className="text-3xl font-bold text-white md:text-5xl">Testimonial Moderation</h1>
                        <p className="mt-3 max-w-2xl text-slate-400">
                            Review client feedback before it appears publicly on the TwineCapital website.
                        </p>
                    </div>

                    <button
                        onClick={loadTestimonials}
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400 disabled:opacity-60"
                    >
                        <FiRefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                        Refresh
                    </button>
                </div>

                <div className="mb-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-400">Pending</p>
                        <p className="mt-2 text-3xl font-bold text-amber-300">{pending.length}</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-400">Approved</p>
                        <p className="mt-2 text-3xl font-bold text-emerald-300">{approved.length}</p>
                    </div>
                    <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-400">Total</p>
                        <p className="mt-2 text-3xl font-bold text-white">{testimonials.length}</p>
                    </div>
                </div>

                <div className="mb-8 rounded-lg border border-slate-800 bg-slate-900/70 p-5">
                    <label className="mb-2 block text-sm font-medium text-slate-300">Admin key</label>
                    {requiresLogin && !user && (
                        <p className="mb-3 text-sm text-amber-200">
                            Production moderation requires a signed-in admin account or a valid admin key.
                        </p>
                    )}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="password"
                            value={adminKey}
                            onChange={(event) => setAdminKey(event.target.value)}
                            placeholder="Only needed when TESTIMONIAL_ADMIN_KEY is set"
                            className="min-w-0 flex-1 rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400"
                        />
                        <button
                            onClick={loadTestimonials}
                            className="rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                        >
                            Apply Key
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="rounded-lg border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
                        Loading testimonials...
                    </div>
                ) : (
                    <div className="space-y-10">
                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-white">Pending Review</h2>
                            {pending.length ? (
                                <div className="grid gap-5 lg:grid-cols-2">{pending.map(renderTestimonial)}</div>
                            ) : (
                                <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 text-slate-400">
                                    No pending testimonials.
                                </div>
                            )}
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-white">Approved Testimonials</h2>
                            {approved.length ? (
                                <div className="grid gap-5 lg:grid-cols-2">{approved.map(renderTestimonial)}</div>
                            ) : (
                                <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 text-slate-400">
                                    No approved testimonials yet.
                                </div>
                            )}
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}
