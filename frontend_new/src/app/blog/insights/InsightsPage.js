"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiRefreshCw, FiExternalLink, FiFilter, FiTrendingUp } from 'react-icons/fi';
import { fetchNews, refreshNews, filterByCategory, searchArticles, getCategories, clearNewsCache } from '@/services/newsAggregator';

export default function InsightsPage({ initialArticles, error: initialError }) {
    const [articles, setArticles] = useState(initialArticles);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(initialError);
    const [lastUpdated, setLastUpdated] = useState(null);

    // Get categories from current articles
    const categories = useMemo(() => getCategories(articles), [articles]);

    // Filter and search articles
    const filteredArticles = useMemo(() => {
        let result = filterByCategory(articles, activeCategory);
        result = searchArticles(result, searchQuery);
        return result;
    }, [articles, activeCategory, searchQuery]);

    // Featured article (first one)
    const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
    const regularArticles = filteredArticles.filter(a => a !== featuredArticle);

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'Recently';
        const date = new Date(dateString);
        const now = new Date();
        const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffHours < 1) return 'Just now';
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffHours < 48) return 'Yesterday';
        
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    };

    // Handle refresh
    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            const fresh = await refreshNews();
            setArticles(fresh);
            setLastUpdated(new Date());
            setError(null);
        } catch (e) {
            setError('Failed to refresh news. Please try again.');
        } finally {
            setIsRefreshing(false);
        }
    };

    // Set last updated time on mount
    useEffect(() => {
        setLastUpdated(new Date());
    }, []);

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
                        >
                            <FiTrendingUp className="w-4 h-4" />
                            Live Market Intelligence
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Insights &{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Market Intelligence
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Fresh updates in finance, AI, accounting, and business innovation. 
                            Stay ahead with curated intelligence from trusted sources.
                        </p>

                        {/* Last Updated & Refresh */}
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                            {lastUpdated && (
                                <span>Last updated: {formatDate(lastUpdated)}</span>
                            )}
                            <button
                                onClick={handleRefresh}
                                disabled={isRefreshing}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors disabled:opacity-50"
                            >
                                <FiRefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                                {isRefreshing ? 'Refreshing...' : 'Refresh'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Search Section */}
            <section className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 py-4 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Category Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                            <FiFilter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                        activeCategory === category
                                            ? 'bg-cyan-500 text-white'
                                            : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Error State */}
            {error && (
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
                        <p className="text-red-400 mb-4">{error}</p>
                        <button
                            onClick={handleRefresh}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                        >
                            <FiRefreshCw className="w-4 h-4" />
                            Try Again
                        </button>
                    </div>
                </div>
            )}

            {/* Featured Article */}
            {featuredArticle && !searchQuery && activeCategory === 'All' && (
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
                                <FiTrendingUp className="w-4 h-4" />
                                Featured Story
                            </div>

                            <Link 
                                href={featuredArticle.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        {/* Image Side */}
                                        <div className="relative h-64 lg:h-auto bg-slate-800">
                                            {featuredArticle.image ? (
                                                <Image
                                                    src={featuredArticle.image}
                                                    alt={featuredArticle.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                                    <span className="text-8xl font-bold text-slate-700">
                                                        {featuredArticle.category?.[0] || 'N'}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 lg:to-slate-900" />
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                                                    {featuredArticle.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-sm text-gray-500">
                                                    <FiCalendar className="w-4 h-4" />
                                                    {formatDate(featuredArticle.publishDate)}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                                                {featuredArticle.title}
                                            </h2>

                                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                                {featuredArticle.summary}
                                            </p>

                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-gray-500">
                                                    Source: {featuredArticle.source}
                                                </span>
                                                <span className="inline-flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                                    Read full story
                                                    <FiExternalLink className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Article Grid */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">
                            {searchQuery ? 'Search Results' : 'Latest Articles'}
                        </h2>
                        <span className="text-gray-500 text-sm">
                            {regularArticles.length} articles
                        </span>
                    </div>

                    {regularArticles.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📰</div>
                            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                            <p className="text-gray-400">
                                {searchQuery 
                                    ? 'Try adjusting your search terms' 
                                    : 'Check back soon for new content'}
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularArticles.map((article, index) => (
                                <motion.article
                                    key={article.slug + index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block h-full"
                                    >
                                        <div className="h-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300">
                                            {/* Image */}
                                            <div className="relative h-48 bg-slate-800 overflow-hidden">
                                                {article.image ? (
                                                    <Image
                                                        src={article.image}
                                                        alt={article.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                                        <span className="text-4xl font-bold text-slate-700">
                                                            {article.category?.[0] || 'N'}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-2 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-cyan-400 text-xs font-medium">
                                                        {article.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                    <span>{article.source}</span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <FiCalendar className="w-3 h-3" />
                                                        {formatDate(article.publishDate)}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                    {article.title}
                                                </h3>

                                                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                                    {article.summary}
                                                </p>

                                                <span className="inline-flex items-center gap-2 text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                                    Read article
                                                    <FiExternalLink className="w-3 h-3" />
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

            {/* Footer CTA */}
            <section className="py-16 px-6 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Want more insights delivered to you?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Stay updated with the latest in finance, AI, and business growth.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all"
                    >
                        Subscribe for Updates
                    </Link>
                </div>
            </section>
        </div>
    );
}
