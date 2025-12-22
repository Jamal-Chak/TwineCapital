"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/testimonials`);
                setTestimonials(response.data);
            } catch (err) {
                console.error("Failed to fetch testimonials", err);
                setError("Could not load testimonials.");
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    if (loading) return null; // Or a spinner
    if (testimonials.length === 0) return null;

    return (
        <section className="py-16 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="card flex flex-col justify-between">
                            <p className="text-gray-300 italic mb-6 text-lg">&quot;{t.feedback}&quot;</p>
                            <div>
                                <h4 className="font-bold text-primary text-lg">- {t.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialList;
