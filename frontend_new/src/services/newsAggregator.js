const CACHE_DURATION_MS = 30 * 60 * 1000;
const BROWSER_CACHE_KEY = "twinecapital_news_cache_v2";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80";

const RELEVANT_KEYWORDS = [
  "accounting",
  "ai",
  "artificial intelligence",
  "automation",
  "banking",
  "business",
  "cloud",
  "data",
  "digital transformation",
  "economy",
  "entrepreneur",
  "finance",
  "financial",
  "fintech",
  "growth",
  "innovation",
  "investment",
  "market",
  "payments",
  "revenue",
  "saas",
  "software",
  "startup",
  "tax",
  "technology",
  "venture",
  "africa",
  "african",
];

const EXCLUDED_KEYWORDS = [
  "celebrity",
  "dating",
  "entertainment",
  "fashion",
  "football",
  "gossip",
  "movie",
  "music",
  "nba",
  "nfl",
  "premier league",
  "sports",
];

const CATEGORY_RULES = {
  Accounting: ["accounting", "audit", "bookkeeping", "cfo", "compliance", "tax"],
  Finance: ["banking", "capital", "economy", "finance", "financial", "fintech", "funding", "investment", "markets", "payments"],
  "AI + Technology": ["ai", "artificial intelligence", "automation", "cloud", "data", "machine learning", "saas", "software", "technology"],
  Startups: ["founder", "funding", "startup", "venture"],
  "Business Growth": ["business", "digital transformation", "entrepreneur", "growth", "innovation", "strategy"],
  "African Business": ["africa", "african", "kenya", "nigeria", "south africa", "egypt", "ghana", "rwanda"],
};

const NEWS_PROVIDERS = [
  {
    name: "TechCrunch",
    type: "wordpress",
    url: "https://techcrunch.com/wp-json/wp/v2/posts?per_page=12&_fields=title,link,date,excerpt,yoast_head_json,author",
  },
  {
    name: "VentureBeat",
    type: "wordpress",
    url: "https://venturebeat.com/wp-json/wp/v2/posts?per_page=12&_fields=title,link,date,excerpt,yoast_head_json,author",
  },
  {
    name: "Google News",
    type: "rss",
    url: "https://news.google.com/rss/search?q=(finance%20OR%20accounting%20OR%20AI%20OR%20startup%20OR%20technology%20OR%20SaaS%20OR%20%22digital%20transformation%22%20OR%20%22African%20business%22)&hl=en-US&gl=US&ceid=US:en",
  },
  {
    name: "Finextra",
    type: "rss",
    url: "https://www.finextra.com/rss/headlines.aspx",
  },
];

let serverCache = {
  timestamp: 0,
  articles: [],
};

function decodeEntities(value = "") {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function cleanHtml(value = "") {
  return decodeEntities(value)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTagValue(item, tagName) {
  const match = item.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match ? decodeEntities(match[1]) : "";
}

function getMediaImage(item) {
  const mediaMatch = item.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  const enclosureMatch = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  const imageMatch = item.match(/<img[^>]+src=["']([^"']+)["']/i);
  return mediaMatch?.[1] || enclosureMatch?.[1] || imageMatch?.[1] || null;
}

function createSlug(title, source) {
  const base = `${title}-${source}`;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function createSummary(text, maxLength = 170) {
  const cleaned = cleanHtml(text);
  if (!cleaned) return "";
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength).replace(/\s+\S*$/, "")}...`;
}

function classifyCategory(article) {
  const text = `${article.title} ${article.summary}`.toLowerCase();
  const ranked = Object.entries(CATEGORY_RULES)
    .map(([category, keywords]) => ({
      category,
      score: keywords.reduce((count, keyword) => count + (text.includes(keyword) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.score > 0 ? ranked[0].category : "Business Growth";
}

function isRelevant(article) {
  const text = `${article.title} ${article.summary} ${article.source}`.toLowerCase();
  const hasRelevantSignal = RELEVANT_KEYWORDS.some((keyword) => text.includes(keyword));
  const hasExcludedSignal = EXCLUDED_KEYWORDS.some((keyword) => text.includes(keyword));
  return hasRelevantSignal && !hasExcludedSignal && Boolean(article.title && article.url);
}

function normalizeArticle(article) {
  const parsedDate = new Date(article.publishDate);

  const normalized = {
    title: cleanHtml(article.title) || "Untitled insight",
    slug: "",
    summary: createSummary(article.summary || article.title),
    image: article.image || FALLBACK_IMAGE,
    source: article.source || "External Source",
    publishDate: Number.isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString(),
    category: "",
    url: article.url,
    author: article.author || null,
    featured: false,
  };

  normalized.category = classifyCategory(normalized);
  normalized.slug = createSlug(normalized.title, normalized.source);
  return normalized;
}

function parseWordPressPosts(posts, source) {
  if (!Array.isArray(posts)) return [];

  return posts.map((post) => ({
    title: post.title?.rendered,
    summary: post.excerpt?.rendered,
    image: post.yoast_head_json?.og_image?.[0]?.url || post.yoast_head_json?.twitter_image || null,
    source: source.name,
    publishDate: post.date,
    url: post.link,
    author: null,
  }));
}

function parseRssFeed(xml, source) {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

  return items.map((item) => ({
    title: getTagValue(item, "title"),
    summary: getTagValue(item, "description") || getTagValue(item, "content:encoded"),
    image: getMediaImage(item),
    source: source.name,
    publishDate: getTagValue(item, "pubDate") || getTagValue(item, "dc:date"),
    url: getTagValue(item, "link") || getTagValue(item, "guid"),
    author: getTagValue(item, "dc:creator") || getTagValue(item, "author") || null,
  }));
}

async function fetchProvider(source) {
  try {
    const response = await fetch(source.url, {
      headers: {
        Accept: source.type === "rss" ? "application/rss+xml, application/xml, text/xml" : "application/json",
        "User-Agent": "TwineCapital-News-Aggregator/1.0",
      },
      next: { revalidate: CACHE_DURATION_MS / 1000 },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const rawArticles =
      source.type === "rss"
        ? parseRssFeed(await response.text(), source)
        : parseWordPressPosts(await response.json(), source);

    return rawArticles.map(normalizeArticle).filter(isRelevant);
  } catch (error) {
    console.warn(`News provider failed: ${source.name}`, error.message);
    return [];
  }
}

function dedupeAndSort(articles) {
  const seen = new Set();

  return articles
    .filter((article) => {
      const key = article.url || article.slug;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 36)
    .map((article, index) => ({
      ...article,
      featured: index === 0,
    }));
}

function fallbackArticles() {
  const now = new Date().toISOString();

  return [
    {
      title: "Finance teams are using automation to move from bookkeeping to advisory",
      summary: "A practical look at how modern finance operations combine clean data, faster reporting, and automation to support better business decisions.",
      image: FALLBACK_IMAGE,
      source: "TwineCapital Intelligence",
      publishDate: now,
      category: "Accounting",
      url: "/contact",
      author: "TwineCapital",
    },
    {
      title: "AI adoption keeps reshaping SaaS and service businesses",
      summary: "AI tools are becoming part of everyday operations, from customer support and analytics to financial planning and workflow optimization.",
      image: FALLBACK_IMAGE,
      source: "TwineCapital Intelligence",
      publishDate: now,
      category: "AI + Technology",
      url: "/contact",
      author: "TwineCapital",
    },
    {
      title: "African business growth is increasingly linked to digital finance infrastructure",
      summary: "Payments, cloud systems, and connected data platforms continue to open new operating models for ambitious companies across the continent.",
      image: FALLBACK_IMAGE,
      source: "TwineCapital Intelligence",
      publishDate: now,
      category: "African Business",
      url: "/contact",
      author: "TwineCapital",
    },
  ].map((article, index) => ({
    ...article,
    slug: createSlug(article.title, article.source),
    featured: index === 0,
  }));
}

function getBrowserCache() {
  if (typeof window === "undefined") return null;

  try {
    const cached = window.localStorage.getItem(BROWSER_CACHE_KEY);
    if (!cached) return null;

    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_DURATION_MS) return null;
    return parsed.articles;
  } catch {
    return null;
  }
}

function setBrowserCache(articles) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      BROWSER_CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        articles,
      }),
    );
  } catch {
    // Browsers can reject localStorage in private modes; the API cache still works.
  }
}

export async function aggregateNews({ forceRefresh = false } = {}) {
  const cacheFresh = Date.now() - serverCache.timestamp < CACHE_DURATION_MS;

  if (!forceRefresh && cacheFresh && serverCache.articles.length) {
    return serverCache.articles;
  }

  const providerResults = await Promise.all(NEWS_PROVIDERS.map(fetchProvider));
  const articles = dedupeAndSort(providerResults.flat());
  const finalArticles = articles.length ? articles : fallbackArticles();

  serverCache = {
    timestamp: Date.now(),
    articles: finalArticles,
  };

  return finalArticles;
}

export async function fetchNews(forceRefresh = false) {
  if (typeof window === "undefined") {
    return aggregateNews({ forceRefresh });
  }

  if (!forceRefresh) {
    const cached = getBrowserCache();
    if (cached?.length) return cached;
  }

  const response = await fetch(`/api/news${forceRefresh ? "?refresh=1" : ""}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load news");
  }

  const payload = await response.json();
  setBrowserCache(payload.articles || []);
  return payload.articles || [];
}

export function filterByCategory(articles, category) {
  if (category === "All") return articles;
  return articles.filter((article) => article.category === category);
}

export function searchArticles(articles, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return articles;

  return articles.filter((article) =>
    [article.title, article.summary, article.source, article.category, article.author]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(normalizedQuery)),
  );
}

export function getCategories(articles) {
  const preferredOrder = ["All", "Finance", "Accounting", "AI + Technology", "Business Growth", "Startups", "African Business"];
  const available = new Set(articles.map((article) => article.category).filter(Boolean));
  const ordered = preferredOrder.filter((category) => category === "All" || available.has(category));
  const remaining = [...available].filter((category) => !ordered.includes(category)).sort();
  return [...ordered, ...remaining];
}

export async function refreshNews() {
  return fetchNews(true);
}

export function clearNewsCache() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(BROWSER_CACHE_KEY);
  }
}
