"use client";
import React from "react";
import Link from "next/link";
import { FaLightbulb, FaCogs, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import TestimonialList from "@/components/TestimonialList";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center" style={{
        backgroundImage: 'url(/assets/portfolio-background.jpg)', // Fallback image since generation failed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-slate-900/60"></div> {/* Overlay */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-cyan-400 font-bold tracking-widest mb-4 uppercase text-sm md:text-base">Comprehensive Software Solutions</p>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            ACCELERATE YOUR <br /> DIGITAL TRANSFORMATION
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Custom Software Development - Enterprise System Integration - Scalable Cloud Solutions - Innovative Tech Strategies
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded text-lg uppercase tracking-wide transition-colors">
              Live Demo
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded text-lg uppercase tracking-wide transition-colors">
              Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* CORE FEATURES SECTION (Matches "Welcome to X2Engine" style) */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-slate-700 font-light mb-12 md:mb-16">Welcome to TwineCapital</h2>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-cyan-500 transition-colors">
                <FaLightbulb className="text-5xl text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">Simple</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Intuitive user experiences designed for rapid adoption and immediate business impact.
              </p>
              <Link href="/services" className="bg-cyan-500 text-white px-6 py-2 rounded text-sm hover:bg-cyan-600 transition">
                Read More
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-cyan-500 transition-colors">
                <FaCogs className="text-5xl text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">Integrated</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Seamlessly connects with your existing software ecosystem and third-party APIs.
              </p>
              <Link href="/services" className="bg-cyan-500 text-white px-6 py-2 rounded text-sm hover:bg-cyan-600 transition">
                Read More
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-cyan-500 transition-colors">
                <FaNetworkWired className="text-5xl text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">Connected</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Real-time data synchronization across all your business units and stakeholders.
              </p>
              <Link href="/services" className="bg-cyan-500 text-white px-6 py-2 rounded text-sm hover:bg-cyan-600 transition">
                Read More
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-cyan-500 transition-colors">
                <FaShieldAlt className="text-5xl text-slate-600 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-3">Secure</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Enterprise-grade security protocols to protect your sensitive business data and IP.
              </p>
              <Link href="/services" className="bg-cyan-500 text-white px-6 py-2 rounded text-sm hover:bg-cyan-600 transition">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEEPING TESTIMONIALS AS THEY ARE VALUABLE SOCIAL PROOF */}
      <TestimonialList />

    </>
  );
}
