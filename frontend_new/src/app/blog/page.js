import { fetchNews } from "@/services/newsAggregator";
import InsightsPage from "./insights/InsightsPage";

export const metadata = {
    title: "Insights & Market Intelligence | TwineCapital",
    description: "Fresh updates in finance, AI, accounting, and business innovation from curated external sources.",
};

export const revalidate = 1800;

export default async function Blog() {
    let articles = [];
    let error = null;

    try {
        articles = await fetchNews();
    } catch (e) {
        console.error("Failed to fetch news:", e);
        error = "Unable to load live news right now. Showing fallback insights where available.";
    }

    return <InsightsPage initialArticles={articles} error={error} />;
}
