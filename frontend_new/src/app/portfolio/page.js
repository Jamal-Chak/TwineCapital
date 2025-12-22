"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

export default function Portfolio() {
    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/portfolio-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-900/70 z-0"></div>

            <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-cyan-400 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">Our Work</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Featured Projects</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        A showcase of our most impactful solutions across finance and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(portfolioData).map(([slug, item]) => (
                        <Link
                            href={`/portfolio/${slug}`}
                            key={slug}
                            className="group relative bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer block"
                        >
                            {/* Image Container with Zoom Effect */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-cyan-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                                    {item.shortDescription}
                                </p>

                                <div className="flex items-center text-cyan-500 font-semibold group-hover:translate-x-2 transition-transform">
                                    <span>View Case Study</span>
                                    <FaArrowRight className="ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/contact"
                        className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wider"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
