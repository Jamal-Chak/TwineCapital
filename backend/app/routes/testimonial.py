# backend/app/routes/testimonial.py
from flask import Blueprint, request, jsonify
import os
import json
import uuid
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

testimonial_bp = Blueprint("testimonial", __name__)

DATA_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data", "testimonials.json"))

# ensure data dir exists
os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

# ensure file exists and is valid JSON
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

def read_data():
    """Read JSON file and return list"""
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f) or []
    except (json.JSONDecodeError, FileNotFoundError):
        return []

def write_data(data):
    """Write list to JSON file"""
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def send_email_notification(testimonial):
    """Send email notification when new testimonial is submitted"""
    try:
        # Email configuration - USING YOUR YAHOO EMAIL
        smtp_server = "smtp.mail.yahoo.com"
        smtp_port = 587
        sender_email = "twineenginehub@yahoo.com"
        sender_password = "ozvtluqeufprxqjh"
        receiver_email = "twineenginehub@yahoo.com"
        
        print(f"📧 Attempting to send email notification...")
        print(f"From: {sender_email}")
        print(f"To: {receiver_email}")
        
        # Create message
        message = MIMEMultipart()
        message["From"] = f"TwineCapital <{sender_email}>"
        message["To"] = receiver_email
        message["Subject"] = "📢 New Testimonial Submitted - TwineCapital"
        
        # Email body
        body = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9fafb; padding: 20px; border-radius: 0 0 10px 10px; }}
                .testimonial {{ background: white; padding: 20px; border-left: 4px solid #2563eb; margin: 15px 0; border-radius: 5px; }}
                .rating {{ color: #f59e0b; font-size: 18px; }}
                .info {{ background: #e0f2fe; padding: 10px; border-radius: 5px; margin: 10px 0; }}
                .status-pending {{ background: #fef3c7; color: #92400e; padding: 5px 10px; border-radius: 15px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 New Testimonial Received!</h1>
                    <p>TwineCapital Client Feedback</p>
                </div>
                <div class="content">
                    <h2>Great news! Someone just submitted a testimonial for your business.</h2>
                    
                    <div class="testimonial">
                        <h3>👤 Client Information:</h3>
                        <div class="info">
                            <p><strong>Name:</strong> {testimonial['name']}</p>
                            <p><strong>Email:</strong> {testimonial.get('email', 'Not provided')}</p>
                            <p><strong>Rating:</strong> <span class="rating">{'★' * testimonial.get('rating', 5)}</span> ({testimonial.get('rating', 5)}/5 stars)</p>
                        </div>
                        
                        <h3>💬 Their Feedback:</h3>
                        <p style="font-style: italic; background: #f8f9fa; padding: 15px; border-radius: 5px;">
                            "{testimonial['feedback']}"
                        </p>
                        
                        <div class="info">
                            <p><strong>📅 Submitted:</strong> {testimonial['created_at']}</p>
                            <p><strong>🆔 Testimonial ID:</strong> {testimonial['id']}</p>
                            <p><strong>📊 Status:</strong> <span class="status-pending">⏳ Pending Approval</span></p>
                        </div>
                    </div>
                    
                    <h3>🎯 Action Required:</h3>
                    <ul>
                        <li>📝 Review the testimonial content</li>
                        <li>✅ Approve it to show on your website (currently set to pending)</li>
                        <li>💌 Consider following up with the client to thank them</li>
                    </ul>
                    
                    <div style="background: #d1fae5; padding: 15px; border-radius: 5px; margin-top: 20px;">
                        <p><strong>💡 Tip:</strong> To approve this testimonial, you'll need to:</p>
                        <ol>
                            <li>Open your testimonials data file</li>
                            <li>Find the testimonial with ID: {testimonial['id']}</li>
                            <li>Change "approved": false to "approved": true</li>
                        </ol>
                    </div>
                    
                    <p style="text-align: center; margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 5px;">
                        <strong>Keep providing excellent service! 💙</strong>
                    </p>
                </div>
            </div>
        </body>
        </html>
        """
        
        message.attach(MIMEText(body, "html"))
        
        # Send email
        print(f"🔗 Connecting to Yahoo SMTP server...")
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            print("🔐 Starting TLS encryption...")
            server.login(sender_email, sender_password)
            print("✅ Logged in to Yahoo email successfully")
            server.send_message(message)
            print("✅ Email notification sent successfully!")
            
        return True
        
    except Exception as e:
        print(f"❌ Failed to send email notification: {str(e)}")
        return False

# GET /testimonials
# By default returns only approved testimonials.
# Use ?all=true to return every testimonial (for admin).
@testimonial_bp.route("/testimonials", methods=["GET"])
def get_testimonials():
    try:
        data = read_data()
        show_all = request.args.get("all", "false").lower() == "true"
        if not show_all:
            data = [t for t in data if t.get("approved") is True]
        print(f"📊 Returning {len(data)} testimonials")
        return jsonify(data), 200
    except Exception as e:
        print(f"❌ Error fetching testimonials: {e}")
        return jsonify({"error": str(e)}), 500

# POST /testimonials
# Accepts JSON: { name, feedback, email?, image?, rating? }
# Adds id, created_at, approved=False (admin must approve)
@testimonial_bp.route("/testimonials", methods=["POST"])
def submit_testimonial():
    try:
        testimonial = request.get_json(force=True)
        print("📝 Received testimonial submission:", testimonial)
        
        # basic validation
        if not testimonial or not str(testimonial.get("name", "")).strip() or not str(testimonial.get("feedback", "")).strip():
            return jsonify({"error": "Name and feedback are required"}), 400

        entry = {
            "id": str(uuid.uuid4()),
            "name": testimonial.get("name").strip(),
            "feedback": testimonial.get("feedback").strip(),
            "email": testimonial.get("email", "").strip() or None,
            "image": testimonial.get("image") or None,
            "rating": testimonial.get("rating", 5),  # Default to 5 if not provided
            "created_at": datetime.utcnow().isoformat() + "Z",
            "approved": True  # Set to True to show immediately, change to False if you want manual approval
        }

        data = read_data()
        data.append(entry)
        write_data(data)

        print(f"✅ Testimonial saved with ID: {entry['id']}")
        
        # Send email notification
        print("📧 Sending email notification...")
        email_sent = send_email_notification(entry)
        
        response_data = {
            "message": "Testimonial submitted successfully!", 
            "id": entry["id"],
            "email_sent": email_sent
        }
        
        if email_sent:
            response_data["email_message"] = "Notification sent to your email"
        else:
            response_data["email_message"] = "Email notification failed, but testimonial was saved"
            
        return jsonify(response_data), 201
        
    except Exception as e:
        print(f"❌ Error submitting testimonial: {e}")
        return jsonify({"error": str(e)}), 500