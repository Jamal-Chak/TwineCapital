"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Experts Behind Your Growth
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400"
                    >
                        Consulting expertise powered by technology.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group rounded-3xl overflow-hidden aspect-[4/3]"
                    >
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        >
                            <source src="/assets/videos/Team.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold">Strategic Advisory</h3>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative group rounded-3xl overflow-hidden aspect-[4/3]"
                    >
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        >
                            <source src="/assets/videos/TeamVideo.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-2xl font-bold">Collaborative Success</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
