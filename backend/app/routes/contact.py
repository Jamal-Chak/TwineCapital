from flask import Blueprint, request, jsonify
from app.models.contact_model import Contact
from app import mongo

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    contact = {
        "name": data["name"],
        "email": data["email"],
        "message": data["message"]
    }
    mongo.db.contacts.insert_one(contact)
    return jsonify({"success": True, "message": "Message received!"})
