from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys

# ✅ Ensure Python can resolve modules in this structure
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'defaultkey')

# ✅ Enable CORS with more specific configuration
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
        "methods": ["GET", "POST", "PUT", "DELETE"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# ✅ Import and register blueprints with error handling
try:
    from app.routes.testimonial import testimonial_bp
    app.register_blueprint(testimonial_bp)
    print("✅ Testimonial routes registered successfully")
except ImportError as e:
    print(f"❌ Failed to import testimonial routes: {e}")

try:
    from app.routes.blog import blog_bp
    app.register_blueprint(blog_bp)
    print("✅ Blog routes registered successfully")
except ImportError as e:
    print(f"⚠️  Blog routes not available: {e}")

# ✅ Root route
@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to TwineCapital Backend!",
        "version": "1.0.0",
        "endpoints": {
            "testimonials": "/testimonials",
            "contact": "/contact"
        }
    })

# ✅ Contact route with better validation
@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        print("Received contact form submission:", data)
        
        # Basic validation
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Here you would typically:
        # 1. Save to database
        # 2. Send email notification
        # 3. Log the contact request
        
        return jsonify({
            "message": "Message received successfully!",
            "status": "We'll get back to you soon."
        }), 200
        
    except Exception as e:
        print(f"Error processing contact form: {e}")
        return jsonify({"error": "Internal server error"}), 500

# ✅ Health check route
@app.route('/health')
def health_check():
    return jsonify({"status": "healthy", "service": "TwineCapital Backend"})

# ✅ Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

# ✅ Run the app
if __name__ == '__main__':
    print("🚀 Starting TwineCapital Backend Server...")
    print("📍 Available endpoints:")
    print("   - GET  /")
    print("   - GET  /health")
    print("   - GET  /testimonials")
    print("   - POST /testimonials")
    print("   - POST /contact")
    
    app.run(
        debug=True, 
        host='0.0.0.0',  # Allow external connections if needed
        port=5000
    )