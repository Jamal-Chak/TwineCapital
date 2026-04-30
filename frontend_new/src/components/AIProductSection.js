"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIProductSection() {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="z-10 relative"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
                        AI Product Preview
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Accounting Platform</h2>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        We are building an intelligent platform that automates reporting, insights, and financial management.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
                        Join Waitlist
                    </Link>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 grid grid-cols-1 gap-4"
                >
                    <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-slate-900 border-2 border-slate-700 aspect-video relative group">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/TwinePulse.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-xs font-bold text-cyan-400 uppercase tracking-widest">Twine Pulse AI</div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-slate-900 border-2 border-slate-700 aspect-video relative group ml-8 -mt-12 hidden md:block">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/DataAnalytics.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-xs font-bold text-blue-400 uppercase tracking-widest">Real-time Analytics</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
