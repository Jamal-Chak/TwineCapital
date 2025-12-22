"use client";
import React from "react";
import { FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";

const features = [
    {
        title: "Accounting & Tax Advisory",
        description: "Expert guidance on tax compliance and accounting standards.",
        icon: "fa-calculator"
    },
    {
        title: "Financial Consulting",
        description: "Strategic financial planning and advisory for growth.",
        icon: "fa-briefcase"
    },
    {
        title: "Auditing & Assurance",
        description: "Independent audits providing transparency and trust.",
        icon: "fa-file-invoice-dollar"
    },
    {
        title: "Financial Statement Preparation",
        description: "Accurate preparation of financial statements for stakeholders.",
        icon: "fa-file-invoice"
    },
    {
        title: "Software Product Development",
        description: "Custom software solutions tailored to your business needs.",
        icon: "fa-code"
    },
    {
        title: "Data Analytics",
        description: "Turn data into actionable insights for better decision making.",
        icon: "fa-chart-bar"
    },
    {
        title: "Software Consulting",
        description: "Technical advisory to optimize your software infrastructure.",
        icon: "fa-laptop-code"
    },
    {
        title: "UX/UI Design",
        description: "Creating intuitive and engaging user experiences.",
        icon: "fa-paint-brush"
    }
];

export default function FeatureSection() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wide">
                        Our <span className="text-outline-primary">Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Comprehensive financial and technical solutions designed for modern businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card group hover:bg-slate-800/80">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {/* Using a generic icon for now, or could import specific ones */}
                                <div className="w-6 h-6 bg-primary rounded-sm opacity-70"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {feature.description}
                            </p>
                            {/* Optional link to service detail */}
                            <span className="text-primary text-xs font-bold uppercase tracking-widest group-hover:underline">Learn More &rarr;</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


