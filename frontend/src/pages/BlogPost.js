// src/pages/BlogPost.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";

function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Post not found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Title and Meta */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm">{post.date}</p>
      </div>

      {/* Featured Image */}
      <div className="w-full mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {post.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </article>

      {/* Back Button */}
      <div className="mt-12">
        <Link
          to="/blog"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </section>
  );
}

export default BlogPost;
