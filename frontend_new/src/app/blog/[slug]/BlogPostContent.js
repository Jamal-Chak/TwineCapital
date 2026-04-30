"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiShare2, FiBookmark } from "react-icons/fi";

export default function BlogPostContent({ post }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Navigation Bar */}
            <nav className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-4 px-6">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link 
                        href="/blog" 
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <FiArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back to Blog</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                            <FiShare2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-slate-800 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                            <FiBookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Article Header */}
            <header className="px-6 pt-12 pb-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Category Tag */}
                        <Link 
                            href={`/blog?category=${encodeURIComponent(post.category)}`}
                            className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6 hover:bg-cyan-500/20 transition-colors"
                        >
                            {post.category}
                        </Link>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* Author & Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-slate-800 pb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                                    {post.author.split(" ").map(n => n[0]).join("").substring(0, 2)}
                                </div>
                                <div>
                                    <p className="text-white font-medium">{post.author}</p>
                                    <p className="text-gray-500">Author</p>
                                </div>
                            </div>
                            <span className="hidden sm:block w-px h-8 bg-slate-700"></span>
                            <span className="flex items-center gap-2">
                                <FiCalendar className="w-4 h-4" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-2">
                                <FiClock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Featured Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-6 mb-12"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center">
                        <span className="text-slate-600 text-8xl font-bold">{post.category[0]}</span>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>
            </motion.div>

            {/* Article Content */}
            <article className="px-6 pb-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="prose prose-lg prose-invert prose-slate max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Article Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16 pt-8 border-t border-slate-800"
                    >
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-400 text-sm">
                                {post.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-400 text-sm">
                                Business
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-800 text-gray-400 text-sm">
                                Finance
                            </span>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Need Help With {post.category}?
                            </h3>
                            <p className="text-gray-400 mb-6">
                                TwineCapital provides expert consulting and solutions to help your business grow. 
                                Let&apos;s discuss how we can support your success.
                            </p>
                            <Link 
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                            >
                                Get in Touch
                                <FiArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Related Posts Section */}
            <section className="px-6 py-16 bg-slate-900 border-t border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">More Articles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Show 3 related posts from same category */}
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                                <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                                <h3 className="text-lg font-semibold text-white mt-2 mb-4 line-clamp-2">
                                    Related article title placeholder
                                </h3>
                                <Link 
                                    href="/blog"
                                    className="text-cyan-400 text-sm hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
