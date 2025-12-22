"use client";
import React from "react";
import Link from "next/link";
import {
    FaCalculator,
    FaChartLine,
    FaClipboardCheck,
    FaFileInvoiceDollar,
    FaLaptopCode,
    FaDatabase,
    FaLightbulb,
    FaPaintBrush
} from "react-icons/fa";

const services = [
    {
        name: "Accounting & Tax Advisory",
        route: "accounting-tax",
        icon: FaCalculator,
        description: "Comprehensive financial compliance, bookkeeping, and strategic tax planning tailored for modern enterprises."
    },
    {
        name: "Financial Consulting",
        route: "financial-consulting",
        icon: FaChartLine,
        description: "Data-driven financial strategies to optimize cash flow, capital allocation, and long-term business growth."
    },
    {
        name: "Auditing & Assurance",
        route: "auditing-assurance",
        icon: FaClipboardCheck,
        description: "Rigorous independent verifications ensuring financial accuracy, risk management, and stakeholder trust."
    },
    {
        name: "Financial Statement Preparation",
        route: "financial-statements",
        icon: FaFileInvoiceDollar,
        description: "Automated, regulation-compliant financial reporting systems designed for transparency and speed."
    },
    {
        name: "Software Product Development",
        route: "software-development",
        icon: FaLaptopCode,
        description: "End-to-end engineering of scalable SaaS platforms, mobile applications, and mission-critical software systems."
    },
    {
        name: "Data Analytics",
        route: "data-analytics",
        icon: FaDatabase,
        description: "Transforming raw data into actionable business intelligence using advanced AI and machine learning insights."
    },
    {
        name: "Software Consulting",
        route: "software-consulting",
        icon: FaLightbulb,
        description: "Expert guidance on digital transformation, cloud architecture, and tech stack modernization strategies."
    },
    {
        name: "UX/UI Design",
        route: "ux-ui-design",
        icon: FaPaintBrush,
        description: "Creating intuitive, user-centric interfaces that drive engagement and deliver exceptional digital experiences."
    },
];

export default function Services() {
    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/services-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Dark overlay for better text readability across the whole page */}
            <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

            <section className="relative z-10 py-12 md:py-16 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Our Expertise</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Delivering integrated financial and technical solutions to power your business forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                href={`/services/${service.route}`}
                                key={index}
                                className="group block bg-slate-800/80 backdrop-blur-md p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                            >
                                <div className="mb-6 inline-block p-4 rounded-full bg-slate-700/50 group-hover:bg-cyan-500/20 transition-colors">
                                    <Icon className="text-4xl text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                                <div className="mt-6 flex items-center text-cyan-500 font-semibold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Learn more <span className="ml-2">→</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
