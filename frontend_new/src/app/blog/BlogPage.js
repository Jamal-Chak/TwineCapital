"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogPosts, { categories, getFeaturedPosts, searchPosts, getPostsByCategory } from "@/data/blogPosts";
import { FiSearch, FiCalendar, FiClock, FiArrowRight, FiUser, FiTrendingUp } from "react-icons/fi";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Get featured posts
    const featuredPosts = getFeaturedPosts();
    const mainFeatured = featuredPosts[0];
    const secondaryFeatured = featuredPosts.slice(1, 3);

    // Filter posts based on category and search
    const filteredPosts = (() => {
        let posts = getPostsByCategory(activeCategory);
        if (searchQuery.trim()) {
            posts = searchPosts(searchQuery);
            if (activeCategory !== "All") {
                posts = posts.filter(post => post.category === activeCategory);
            }
        }
        // Exclude featured posts from the grid (they're shown separately)
        const featuredIds = featuredPosts.map(p => p.id);
        return posts.filter(post => !featuredIds.includes(post.id));
    })();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

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
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
                            Knowledge Hub
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Resources</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            Business growth, accounting intelligence, AI innovation, and practical strategies 
                            to help your business thrive in the modern economy.
                        </p>

                        {/* Link to Insights */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/blog/insights"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                            >
                                <FiTrendingUp className="w-5 h-5" />
                                View Live Market Intelligence
                                <FiArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-6 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        activeCategory === category
                                            ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                                            : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={handleSearch}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Articles Section */}
            {!searchQuery && activeCategory === "All" && mainFeatured && (
                <section className="py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                        >
                            <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                            Featured Articles
                        </motion.h2>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Main Featured Post */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <Link href={`/blog/${mainFeatured.slug}`}>
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
                                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                            <span className="text-slate-600 text-6xl font-bold">{mainFeatured.category[0]}</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
                                                {mainFeatured.category}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {mainFeatured.title}
                                            </h3>
                                            <p className="text-gray-400 line-clamp-2 mb-4">
                                                {mainFeatured.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar className="w-4 h-4" />
                                                    {formatDate(mainFeatured.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FiClock className="w-4 h-4" />
                                                    {mainFeatured.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Secondary Featured Posts */}
                            <div className="flex flex-col gap-6">
                                {secondaryFeatured.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="flex gap-4">
                                            <div className="relative w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 flex items-center justify-center">
                                                <span className="text-slate-600 text-3xl font-bold">{post.category[0]}</span>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-cyan-400 text-xs font-semibold mb-1">
                                                    {post.category}
                                                </span>
                                                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                                    <span>{formatDate(post.date)}</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
                    >
                        <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                        {searchQuery ? `Search Results (${filteredPosts.length})` : 
                         activeCategory !== "All" ? `${activeCategory} Articles` : "All Articles"}
                    </motion.h2>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                            <p className="text-gray-400">Try adjusting your search or category filter</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.1 }}
                                    className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-800 flex items-center justify-center">
                                            <span className="text-slate-600 text-5xl font-bold group-hover:scale-110 transition-transform duration-500">
                                                {post.category[0]}
                                            </span>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-slate-950/80 text-cyan-400 text-xs font-semibold backdrop-blur-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <FiUser className="w-4 h-4" />
                                                    <span className="truncate max-w-[100px]">{post.author}</span>
                                                </div>
                                                <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                                                    Read More
                                                    <FiArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-950 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter for the latest insights on accounting, 
                            AI technology, and business growth strategies delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-all"
                            />
                            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-cyan-500/25">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
