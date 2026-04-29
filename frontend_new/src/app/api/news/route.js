import { NextResponse } from "next/server";
import { aggregateNews } from "@/services/newsAggregator";

export const dynamic = "force-dynamic";
export const revalidate = 1800;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "1";
  const articles = await aggregateNews({ forceRefresh });

  return NextResponse.json(
    {
      articles,
      count: articles.length,
      refreshedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "s-maxage=1800, stale-while-revalidate=3600",
      },
    },
  );
}
