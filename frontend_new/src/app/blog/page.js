"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = useCallback(async (query = "") => {
        setLoading(true);
        try {
            const url = query
                ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/posts?q=${encodeURIComponent(query)}`
                : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/posts`;
            const response = await axios.get(url);
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            fetchPosts(searchTerm);
        }
    };

    // Helper to strip HTML tags for cleaner description display
    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/blog-background-subtle.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen bg-slate-900/50">
                <div className="flex items-center mb-6">
                    <img src="/assets/twineverse-logo.png" alt="TwineVerse Logo" className="h-12 w-12 mr-4" />
                    <h1 className="text-3xl font-bold text-white">TwineVerse Blog</h1>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="relative w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                        <input
                            type="text"
                            placeholder="Search any topic (e.g. tech, finance)... Press Enter"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                            className="w-full px-4 py-2 border rounded bg-slate-800/80 text-white border-slate-600 placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-white py-20 text-xl">Loading live content...</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-slate-800/60 p-4 rounded shadow hover:scale-105 transition border border-slate-600 hover:border-cyan-400 flex flex-col"
                            >
                                <img
                                    src={post.image && post.image.startsWith("http") ? post.image : "/assets/blog-background.jpg"}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded mb-4"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/assets/blog-background.jpg"; }}
                                />
                                <h2 className="text-xl font-semibold mb-2 text-white line-clamp-2">{post.title}</h2>
                                <p className="text-gray-400 text-sm mb-2">{post.date} • {post.source}</p>
                                <div className="text-gray-300 mb-4 line-clamp-3 text-sm flex-grow" dangerouslySetInnerHTML={{ __html: post.description.substring(0, 150) + "..." }} />

                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 mt-auto inline-block hover:underline font-medium"
                                >
                                    Read Full Article →
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
