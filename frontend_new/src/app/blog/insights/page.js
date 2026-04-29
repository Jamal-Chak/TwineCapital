import { fetchNews } from '@/services/newsAggregator';
import InsightsPage from './InsightsPage';

export const revalidate = 1800;

export const metadata = {
    title: 'Insights & Market Intelligence | TwineCapital',
    description: 'Fresh updates in finance, AI, accounting, and business innovation. Stay informed with the latest market intelligence.',
    keywords: ['finance', 'AI', 'accounting', 'business', 'news', 'insights', 'market intelligence'],
};

export default async function Insights() {
    let articles = [];
    let error = null;
    
    try {
        articles = await fetchNews();
    } catch (e) {
        console.error('Failed to fetch news:', e);
        error = 'Unable to load live news right now. Showing fallback insights where available.';
    }
    
    return <InsightsPage initialArticles={articles} error={error} />;
}
