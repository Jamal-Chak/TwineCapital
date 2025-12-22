"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

export default function SubmitTestimonial() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: 5,
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
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/testimonials`, {
                name: formData.name,
                email: formData.email,
                rating: formData.rating,
                feedback: formData.feedback,
            });

            setSubmitted(true);
            setFormData({ name: "", email: "", rating: 5, feedback: "" });
            setError("");
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/testimonial-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="min-h-screen bg-slate-900/50 py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-white text-center">
                        Submit Your Testimonial
                    </h1>

                    {submitted ? (
                        <div className="text-green-400 font-semibold text-center bg-slate-800/80 p-8 rounded-lg border border-green-500/30 shadow-lg backdrop-blur-sm">
                            ✅ Thank you! Your testimonial has been submitted.
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 bg-slate-800/80 p-8 rounded-lg shadow-xl border border-slate-600 backdrop-blur-sm"
                        >
                            {error && (
                                <p className="text-red-400 font-semibold text-center">{error}</p>
                            )}

                            <div>
                                <label className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Email (Optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <FaStar
                                                className={`text-2xl ${star <= formData.rating ? "text-yellow-400" : "text-gray-600"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Feedback</label>
                                <textarea
                                    name="feedback"
                                    placeholder="Your Testimonial"
                                    required
                                    rows="5"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition-colors duration-300 mt-4 shadow-lg"
                            >
                                Submit Testimonial
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
