from flask import Blueprint, request, jsonify
import os, json, datetime, unicodedata, re

blog_bp = Blueprint("blog", __name__)

DATA_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/posts.json"))
os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

# Create file if missing
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

# Simple admin key check (dev). Set ADMIN_KEY in your environment.
ADMIN_KEY = os.getenv("ADMIN_KEY", "dev-admin-key")

def _is_admin(req):
    return req.headers.get("X-ADMIN-KEY") == ADMIN_KEY

def _slugify(text):
    s = unicodedata.normalize("NFKD", text)
    s = re.sub(r"[^\w\s-]", "", s).strip().lower()
    s = re.sub(r"[-\s]+", "-", s)
    return s

def _read_posts():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def _write_posts(posts):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

@blog_bp.route("/posts", methods=["GET"])
def get_posts():
    posts = _read_posts()
    return jsonify(posts), 200

@blog_bp.route("/posts/<slug>", methods=["GET"])
def get_post(slug):
    posts = _read_posts()
    p = next((x for x in posts if x.get("slug") == slug), None)
    if not p:
        return jsonify({"error": "Not found"}), 404
    return jsonify(p), 200

@blog_bp.route("/posts", methods=["POST"])
def create_post():
    if not _is_admin(request):
        return jsonify({"error": "Unauthorized"}), 401

    body = request.get_json() or {}
    title = body.get("title")
    if not title:
        return jsonify({"error": "Title required"}), 400

    posts = _read_posts()
    base_slug = _slugify(title)
    slug = base_slug
    i = 1
    while any(p.get("slug") == slug for p in posts):
        slug = f"{base_slug}-{i}"
        i += 1

    new_post = {
        "id": int(datetime.datetime.utcnow().timestamp() * 1000),
        "slug": slug,
        "title": title,
        "excerpt": body.get("excerpt", ""),
        "content": body.get("content", []),
        "author": body.get("author", {"name": body.get("author_name", "")}),
        "date": body.get("date", datetime.datetime.utcnow().strftime("%b %d, %Y")),
        "category": body.get("category", "General"),
        "image": body.get("image", ""),
        "published": bool(body.get("published", True))
    }
    posts.insert(0, new_post)
    _write_posts(posts)
    return jsonify(new_post), 201

@blog_bp.route("/posts/<slug>", methods=["PUT"])
def update_post(slug):
    if not _is_admin(request):
        return jsonify({"error": "Unauthorized"}), 401

    body = request.get_json() or {}
    posts = _read_posts()
    found = False
    for i, p in enumerate(posts):
        if p.get("slug") == slug:
            p["title"] = body.get("title", p.get("title"))
            p["excerpt"] = body.get("excerpt", p.get("excerpt"))
            p["content"] = body.get("content", p.get("content"))
            p["author"] = body.get("author", p.get("author"))
            p["date"] = body.get("date", p.get("date"))
            p["category"] = body.get("category", p.get("category"))
            p["image"] = body.get("image", p.get("image"))
            p["published"] = bool(body.get("published", p.get("published", True)))
            posts[i] = p
            found = True
            break
    if not found:
        return jsonify({"error": "Not found"}), 404
    _write_posts(posts)
    return jsonify(p), 200

@blog_bp.route("/posts/<slug>", methods=["DELETE"])
def delete_post(slug):
    if not _is_admin(request):
        return jsonify({"error": "Unauthorized"}), 401

    posts = _read_posts()
    new_posts = [p for p in posts if p.get("slug") != slug]
    if len(new_posts) == len(posts):
        return jsonify({"error": "Not found"}), 404
    _write_posts(new_posts)
    return jsonify({"message": "Deleted"}), 200
