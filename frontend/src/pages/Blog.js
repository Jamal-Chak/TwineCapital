import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import logo from "../assets/twineverse-logo.png"; // Adjust path if needed

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogData.filter((post) => {
    const contentText = Array.isArray(post.content) ? post.content.join(" ") : "";
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      contentText.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || (post.category && post.category === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Blog header */}
      <div className="flex items-center mb-6">
        {logo && <img src={logo} alt="TwineVerse Logo" className="h-12 w-12 mr-4" />}
        <div>
          <h1 className="text-3xl font-bold">TwineVerse Blog</h1>
          <p className="text-sm text-gray-500">Insights on tech, finance and accounting</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 md:mb-0 md:mr-4 px-4 py-2 border rounded w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option value="Finance">Finance</option>
          <option value="Technology">Technology</option>
          <option value="Accounting">Accounting</option>
        </select>
      </div>

      {/* Blog posts grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white dark:bg-gray-700 rounded shadow hover:scale-105 transition overflow-hidden"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                By {post.author?.name ?? "TwineCapital"} • {post.date ?? "Unknown date"}
                {post.readTime ? ` • ${post.readTime}` : ""}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.excerpt ?? post.description ?? (post.content && post.content[0]?.slice(0, 140) + "...")}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* No results */}
      {filteredPosts.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          No posts found. Try a different search or category.
        </div>
      )}
    </div>
  );
}

export default Blog;
