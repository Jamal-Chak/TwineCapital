"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DataSection() {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/Data.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Data-Driven Growth</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Unlock the power of your business data with advanced analytics, automated intelligence, and decision-making dashboards.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                <h4 className="text-cyan-400 font-bold text-2xl mb-2">Automation</h4>
                                <p className="text-gray-500 text-sm">Streamline repetitive workflows with AI.</p>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                                <h4 className="text-blue-400 font-bold text-2xl mb-2">Intelligence</h4>
                                <p className="text-gray-500 text-sm">Actionable insights from complex data sets.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-square lg:aspect-video"
                    >
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/DataMining.mp4" type="video/mp4" />
                        </video>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
