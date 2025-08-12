from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys

# ✅ Ensure Python can resolve modules in this structure
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

# ✅ Correct import path because routes is inside app/
from app.routes.testimonial import testimonial_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'defaultkey')

# ✅ Enable CORS
CORS(app)

# ✅ Register the testimonial route
app.register_blueprint(testimonial_bp)

# ✅ Root route
@app.route('/')
def home():
    return jsonify({"message": "Welcome to TwineCapital Backend!"})

# ✅ Contact route
@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()  # ✅ Fixed: added parentheses
    print("Received contact:", data)
    return jsonify({"message": "Message received!"})

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)
