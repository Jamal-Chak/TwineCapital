// src/pages/SubmitTestimonial.js
import React, { useState } from "react";
import axios from "axios"; // ✅ Import Axios

function SubmitTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/testimonials", {
        name: formData.name,
        email: formData.email,
        feedback: formData.feedback,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", feedback: "" });
      setError("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
        Submit Your Testimonial
      </h1>

      {submitted ? (
        <div className="text-green-600 font-semibold text-center">
          ✅ Thank you! Your testimonial has been submitted.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow"
        >
          {error && (
            <p className="text-red-600 font-semibold text-center">{error}</p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          <textarea
            name="feedback"
            placeholder="Your Testimonial"
            required
            rows="5"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Testimonial
          </button>
        </form>
      )}
    </div>
  );
}

export default SubmitTestimonial;
