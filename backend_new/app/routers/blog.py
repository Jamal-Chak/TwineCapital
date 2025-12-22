from fastapi import APIRouter, HTTPException
import feedparser
import requests
from datetime import datetime

router = APIRouter(
    prefix="/posts",
    tags=["posts"]
)

RSS_FEED_URL = "https://techcrunch.com/category/fintech/feed/"

def parse_date(date_str):
    try:
        # TechCrunch date fmt: "Sat, 21 Dec 2024 14:00:00 +0000"
        dt = datetime.strptime(date_str, "%a, %d %b %Y %H:%M:%S %z")
        return dt.strftime("%B %d, %Y")
    except Exception:
        return date_str

def extract_image(entry):
    # Try to find an image in media_content, links, or parsing summary
    if 'media_content' in entry:
        return entry.media_content[0]['url']
    if 'media_thumbnail' in entry:
        return entry.media_thumbnail[0]['url']
    if 'links' in entry:
        for link in entry.links:
            if 'image' in link.type:
                return link.href
    # Fallback to a default or parsed from content (simplified for now)
    return "/assets/blog-placeholder.jpg" 

@router.get("")
def get_posts(q: str = None):
    try:
        url = RSS_FEED_URL
        source_name = "TechCrunch"
        
        if q:
            # properly encode the query
            import urllib.parse
            encoded_query = urllib.parse.quote(q)
            url = f"https://news.google.com/rss/search?q={encoded_query}&hl=en-US&gl=US&ceid=US:en"
            source_name = "Google News"

        # Add User-Agent to avoid 403 Forbidden from some RSS feeds
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        feed = feedparser.parse(url, request_headers=headers)
        
        posts = []
        for entry in feed.entries[:12]:
            image = extract_image(entry)
            if image == "/assets/blog-placeholder.jpg" and 'summary' in entry:
                # Try to extract from HTML summary
                import re
                img_match = re.search(r'<img[^>]+src="([^">]+)"', entry.summary)
                if img_match:
                    image = img_match.group(1)

            description = entry.summary if 'summary' in entry else ""
            
            # Google News dates are usually like "Fri, 20 Dec 2024 10:00:00 GMT" - parse_date handles this format roughly
            
            posts.append({
                "id": entry.link,
                "title": entry.title,
                "slug": entry.link, 
                "date": parse_date(entry.published) if 'published' in entry else "",
                "image": image,
                "description": description,
                "link": entry.link,
                "source": source_name
            })
            
        return posts
        
    except Exception as e:
        print(f"Error fetching feed: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog posts")
