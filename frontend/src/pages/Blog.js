import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import logo from "../assets/twineverse-logo.png"; // Adjust the path as needed

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.join(" ").toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <img src={logo} alt="TwineVerse Logo" className="h-12 w-12 mr-4" />
        <h1 className="text-3xl font-bold">TwineVerse Blog</h1>
      </div>

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
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
