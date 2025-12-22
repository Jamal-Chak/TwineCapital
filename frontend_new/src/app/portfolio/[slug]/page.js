"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { FaArrowLeft, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug;
    const project = portfolioData[slug];

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-slate-900">Project not found.</div>;
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            {/* Hero Image Section */}
            <div className="relative h-[50vh] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 z-0"></div>

                <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12">
                    <div className="max-w-7xl mx-auto">
                        <Link href="/portfolio" className="inline-flex items-center text-cyan-400 hover:text-white mb-6 transition-colors">
                            <FaArrowLeft className="mr-2" /> Back to Portfolio
                        </Link>
                        <span className="block text-cyan-500 font-bold tracking-widest uppercase mb-2 text-sm">{project.category}</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{project.title}</h1>
                        <p className="text-xl text-gray-300 max-w-2xl">{project.shortDescription}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Challenge */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-cyan-500 pl-4">The Challenge</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
                    </section>

                    {/* Solution */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">Our Solution</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
                    </section>

                    {/* Results */}
                    <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Key Results</h2>
                        <div className="grid gap-4">
                            {project.results.map((result, index) => (
                                <div key={index} className="flex items-start">
                                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-300 text-lg">{result}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Client Info */}
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-1">Client</h3>
                        <p className="text-xl font-semibold text-white">{project.client}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h3 className="flex items-center text-white font-bold text-lg mb-4">
                            <FaLayerGroup className="mr-2 text-cyan-400" /> Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="bg-slate-700 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-xl text-center shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Have a similar project?</h3>
                        <p className="text-blue-100 mb-6 text-sm">Let’s discuss how we can help you achieve similar results.</p>
                        <Link href="/contact" className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-full w-full hover:bg-gray-100 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
