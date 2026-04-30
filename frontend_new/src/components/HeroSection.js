"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileVideo from "./MobileVideo";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <MobileVideo
                src="/assets/videos/IntroVideo.mp4"
                eager
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                {/* Fallback */}
                <div className="absolute inset-0 bg-slate-900 z-0"></div>
            </MobileVideo>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

            {/* Hero Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
                        Technology-Driven <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Financial Solutions
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
                >
                    We help businesses grow through consulting, software, and AI-powered financial tools.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                        Book Consultation
                    </Link>
                    <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-full text-lg transition-all">
                        Explore Platform
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
