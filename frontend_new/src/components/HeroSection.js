"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-dark-navy overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <Image
                    src="/assets/wireframe-bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-10 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* Main Heading with Outline Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight mb-6">
                        <span className="block text-white">Driving</span>
                        <span className="block text-outline-primary md:text-7xl lg:text-8xl">Innovation,</span>
                        <span className="block text-white mt-2">Powering Solutions</span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-light"
                >
                    Your trusted partner for consulting and software excellence.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/contact" className="btn-primary">
                        Book a Consultation
                    </Link>
                    <Link href="/register" className="btn-secondary">
                        Get Started
                    </Link>
                </motion.div>
            </div>

            {/* Client/Tech Logos at Bottom */}
            <div className="absolute bottom-0 w-full border-t border-white/5 bg-slate-900/50 backdrop-blur-sm py-6 z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-xs text-gray-500 uppercase tracking-[0.2em] mb-4">Trusted By</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - using text for now, should replace with SVGs */}
                        <span className="text-xl font-bold text-white">SAMSUNG</span>
                        <span className="text-xl font-bold text-white">ORACLE</span>
                        <span className="text-xl font-bold text-white">SAP</span>
                        <span className="text-xl font-bold text-white">MICROSOFT</span>
                        <span className="text-xl font-bold text-white">XERO</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
