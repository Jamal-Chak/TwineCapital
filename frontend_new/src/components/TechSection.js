"use client";
import React from "react";
import { motion } from "framer-motion";
import MobileVideo from "./MobileVideo";

export default function TechSection() {
    return (
        <section className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Technology That Moves Business Forward</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We build custom software and digital experiences that define the next generation of business.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden relative group aspect-video shadow-2xl"
                    >
                        <MobileVideo
                            src="/assets/videos/CodeVideo.mp4"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                            <h3 className="text-2xl font-bold">Software Engineering</h3>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden relative group aspect-video shadow-2xl"
                    >
                        <MobileVideo
                            src="/assets/videos/DigitalTransformation.mp4"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                            <h3 className="text-2xl font-bold">Digital Transformation</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
