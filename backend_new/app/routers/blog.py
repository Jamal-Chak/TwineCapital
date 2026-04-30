from fastapi import APIRouter, HTTPException
import requests
from datetime import datetime
import xml.etree.ElementTree as ET
import re
import urllib.parse

router = APIRouter(
    prefix="/posts",
    tags=["posts"]
)

RSS_FEED_URL = "https://techcrunch.com/category/fintech/feed/"

def parse_date(date_str):
    try:
        dt = datetime.strptime(date_str, "%a, %d %b %Y %H:%M:%S %z")
        return dt.strftime("%B %d, %Y")
    except Exception:
        return date_str

@router.get("")
def get_posts(q: str = None):
    try:
        url = RSS_FEED_URL
        source_name = "TechCrunch"
        
        if q:
            encoded_query = urllib.parse.quote(q)
            url = f"https://news.google.com/rss/search?q={encoded_query}&hl=en-US&gl=US&ceid=US:en"
            source_name = "Google News"

        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        
        root = ET.fromstring(resp.content)
        items = root.findall('.//item')
        
        posts = []
        for item in items[:12]:
            title = item.find('title')
            title = title.text if title is not None else ""
            
            link = item.find('link')
            link = link.text if link is not None else ""
            
            pubDate = item.find('pubDate')
            pubDate = pubDate.text if pubDate is not None else ""
            
            description = item.find('description')
            description = description.text if description is not None else ""
            
            # Simple image extraction
            image = "/assets/blog-placeholder.jpg"
            if description:
                img_match = re.search(r'<img[^>]+src="([^">]+)"', description)
                if img_match:
                    image = img_match.group(1)
            
            posts.append({
                "id": link,
                "title": title,
                "slug": link, 
                "date": parse_date(pubDate),
                "image": image,
                "description": description,
                "link": link,
                "source": source_name
            })
            
        return posts
        
    except Exception as e:
        print(f"Error fetching feed: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog posts")
