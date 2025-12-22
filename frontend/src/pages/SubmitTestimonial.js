// src/pages/SubmitTestimonial.js
import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function SubmitTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 5
  });
  const [status, setStatus] = useState(""); // show success/error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.feedback.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    
    try {
      const url = `${API_URL.replace(/\/$/, "")}/testimonials`;
      await axios.post(url, {
        name: formData.name.trim(),
        email: formData.email.trim() || undefined,
        feedback: formData.feedback.trim(),
        rating: parseInt(formData.rating) || 5,
        date: new Date().toISOString(),
        status: "pending"
      });
      
      setStatus("submitted");
      setFormData({ name: "", email: "", feedback: "", rating: 5 });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
      
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 mt-16">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">
          Share Your Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          We value your feedback! Tell us about your experience with TwineCapital.
        </p>

        {status === "submitted" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
            ✅ Thank you! Your testimonial has been submitted successfully!
          </div>
        )}
        
        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            ❌ Please fill in all required fields and try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email (optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rating
            </label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★ Very Good</option>
              <option value="3">★★★ Good</option>
              <option value="2">★★ Fair</option>
              <option value="1">★ Poor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Testimonial *
            </label>
            <textarea
              name="feedback"
              placeholder="Tell us about your experience with our services..."
              required
              rows="6"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-vertical"
            />
          </div>

          {/* SEND BUTTON - Clear and prominent */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center space-x-2 shadow-lg"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Testimonial</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            * Required fields
          </p>
        </form>
      </div>
    </div>
  );
}

export default SubmitTestimonial;