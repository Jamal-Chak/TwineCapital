"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch("/api/testimonials", {
                    cache: "no-store",
                });
                const payload = await response.json();

                if (!response.ok) {
                    throw new Error(payload.error || "Could not load testimonials.");
                }

                setTestimonials(payload.testimonials || []);
            } catch (err) {
                console.error("Failed to fetch testimonials", err);
                setError("Could not load testimonials.");
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    if (loading) return null;
    if (error) return null;
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
                            <div className="flex gap-1 text-yellow-400 mb-4" aria-label={`${t.rating || 5} out of 5 stars`}>
                                {Array.from({ length: t.rating || 5 }).map((_, starIndex) => (
                                    <FaStar key={starIndex} className="h-4 w-4" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6 text-lg">&quot;{t.feedback}&quot;</p>
                            <div>
                                <h4 className="font-bold text-primary text-lg">- {t.name}</h4>
                                {(t.role || t.company) && (
                                    <p className="text-sm text-gray-400">
                                        {[t.role, t.company].filter(Boolean).join(", ")}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialList;
