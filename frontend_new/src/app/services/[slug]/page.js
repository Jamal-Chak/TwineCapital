"use client";
import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.slug;
    const service = servicesData[slug];

    if (!service) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">Service not found.</div>;
    }

    const Icon = service.icon;

    return (
        <div className="relative min-h-screen bg-slate-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20" style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}></div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20 px-6 text-center border-b border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block p-5 rounded-full bg-cyan-500/10 mb-6 border border-cyan-500/30">
                            <Icon className="text-5xl text-cyan-400" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{service.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            {service.shortDescription}
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 px-6 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Detailed Overview & Features */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Overview</h2>
                            <p className="text-lg text-gray-300 leading-8 mb-10">
                                {service.fullDescription}
                            </p>

                            <h3 className="text-2xl font-bold mb-6 text-white">Key Features</h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start bg-slate-800/50 p-4 rounded-lg border border-slate-700 shadow-sm">
                                        <FaCheckCircle className="text-cyan-500 mt-1 mr-4 flex-shrink-0" />
                                        <span className="text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Benefits & CTA Card */}
                        <div className="space-y-8 sticky top-24">
                            <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-4">Why Choose Us?</h3>
                                <div className="space-y-6">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index}>
                                            <h4 className="text-lg font-bold text-cyan-300 mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-gray-400">{benefit.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-2xl shadow-2xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Ready to optimize your {service.title.toLowerCase()}?</h3>
                                <p className="mb-8 text-blue-100">Get in touch with our experts today for a free consultation.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-md"
                                >
                                    Get Started Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
