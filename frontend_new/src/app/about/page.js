"use client";
import React from "react";
import Image from "next/image";
import TestimonialList from "@/components/TestimonialList";

export default function About() {
    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/about-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Hero */}
            <section className="text-center py-16 px-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About TwineCapital</h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-800 dark:text-gray-100">
                    We are a strategic partnership between accounting and software
                    professionals, delivering top-tier solutions for business growth.
                </p>
            </section>

            {/* Mission/Overview */}
            <section className="py-16 px-6 text-center max-w-4xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-slate-gray dark:text-white">We make sure your idea & creation are delivered properly</h2>
                <div className="flex flex-wrap justify-center gap-12 text-left">
                    <p className="flex-1 min-w-[300px] text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        We help businesses scale efficiently with a perfect balance of tech
                        and financial strategy. Our team ensures smooth delivery, from idea
                        to execution.
                    </p>
                    <p className="flex-1 min-w-[300px] text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        From strategy and design to implementation and support, we work as
                        your trusted partner every step of the way.
                    </p>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="py-16 px-6 text-center bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
                <h2 className="text-3xl font-bold mb-12 text-slate-gray dark:text-white">Our Core Services</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Card 1 */}
                    <div className="card w-64">
                        <div className="h-20 w-20 mx-auto relative mb-4">
                            {/* Fallback/Placeholder if image missing */}
                            <img src="/assets/cards/accounting.png" alt="Accounting" className="object-contain h-full w-full" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Accounting & Tax</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Reliable bookkeeping and tax solutions tailored to your business.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="card w-64">
                        <div className="h-20 w-20 mx-auto relative mb-4">
                            <img src="/assets/cards/seo.png" alt="SEO" className="object-contain h-full w-full" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">SEO Optimization</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Improve your search ranking and reach your ideal clients online.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="card w-64">
                        <div className="h-20 w-20 mx-auto relative mb-4">
                            <img src="/assets/cards/software.png" alt="Software" className="object-contain h-full w-full" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">Software Development</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Custom-built software to streamline and grow your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-6 text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-12 text-slate-gray dark:text-white">Meet the Team Behind TwineCapital</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Member 1 */}
                    <div className="card w-60">
                        <img src="/assets/team/founder.jpg" alt="Jonathan Chakombera" className="w-24 h-24 rounded-full border-4 border-primary mx-auto mb-4 object-cover" />
                        <h3 className="text-lg font-bold dark:text-white">Jonathan Chakombera</h3>
                        <p className="text-primary font-medium">Founder & CEO</p>
                    </div>
                    {/* Member 2 */}
                    <div className="card w-60">
                        <img src="/assets/team/teammate1.jpg" alt="Keith Ndlovu" className="w-24 h-24 rounded-full border-4 border-primary mx-auto mb-4 object-cover" />
                        <h3 className="text-lg font-bold dark:text-white">Keith Ndlovu</h3>
                        <p className="text-primary font-medium">Finance Lead</p>
                    </div>
                    {/* Member 3 */}
                    <div className="card w-60">
                        <img src="/assets/team/teammate2.jpg" alt="Tessla Chakombera" className="w-24 h-24 rounded-full border-4 border-primary mx-auto mb-4 object-cover" />
                        <h3 className="text-lg font-bold dark:text-white">Tessla Chakombera</h3>
                        <p className="text-primary font-medium">Junior Developer</p>
                    </div>
                    {/* Member 4 */}
                    <div className="card w-60">
                        <img src="/assets/team/consultant.jpg" alt="Matthew Munava" className="w-24 h-24 rounded-full border-4 border-primary mx-auto mb-4 object-cover" />
                        <h3 className="text-lg font-bold dark:text-white">Matthew Munava</h3>
                        <p className="text-primary font-medium">Consultant</p>
                    </div>
                </div>
            </section>

            <TestimonialList />
        </div>
    );
}
