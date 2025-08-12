from flask import Blueprint, request, jsonify
import os
import json

testimonial_bp = Blueprint("testimonial", __name__)
DATA_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data/testimonials.json"))

# Ensure data directory exists
os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

# Ensure file exists
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

# ✅ GET all testimonials
@testimonial_bp.route("/testimonials", methods=["GET"])
def get_testimonials():
    try:
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ POST a new testimonial
@testimonial_bp.route("/testimonials", methods=["POST"])
def submit_testimonial():
    try:
        testimonial = request.get_json()
        if not testimonial.get("name") or not testimonial.get("feedback"):
            return jsonify({"error": "Name and feedback are required"}), 400

        with open(DATA_FILE, "r+", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError:
                data = []
            data.append(testimonial)
            f.seek(0)
            json.dump(data, f, indent=2)
            f.truncate()
        return jsonify({"message": "Testimonial added"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

