import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import logo from "../assets/twineverse-logo.png"; // Adjust path if needed

function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <p className="text-gray-600 mb-6">We couldn’t find the blog post you’re looking for.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        {logo && <img src={logo} alt="TwineVerse Logo" className="h-10 w-10 mr-4" />}
        <div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500">
            By {post.author?.name ?? "TwineCapital"} • {post.date ?? "Unknown date"}
            {post.readTime ? ` • ${post.readTime}` : ""}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}

      {/* Content */}
      <div className="prose dark:prose-invert">
        {Array.isArray(post.content)
          ? post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          : <p>{post.content}</p>}
      </div>

      {/* Back Link */}
      <div className="mt-8">
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}

export default BlogPost;
