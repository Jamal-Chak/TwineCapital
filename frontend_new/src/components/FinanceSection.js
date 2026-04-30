"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileVideo from "./MobileVideo";

export default function FinanceSection() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
            {/* Background Video */}
            <MobileVideo
                src="/assets/videos/Finance.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-950/80 z-10"></div>

            <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold text-white mb-8"
                >
                    Smarter Financial Systems Start Here
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <Link href="/contact" className="bg-white text-slate-950 hover:bg-gray-200 font-bold py-4 px-12 rounded-xl text-xl transition-all">
                        Get Started
                    </Link>
                    <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-950 font-bold py-4 px-12 rounded-xl text-xl transition-all">
                        View Services
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
