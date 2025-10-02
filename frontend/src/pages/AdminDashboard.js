import React, { useState, useEffect } from "react";

// ⬇ Place env vars here, not App.js
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
const ADMIN_EMAILS = process.env.REACT_APP_ADMIN_EMAILS?.split(",") || [];

function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Replace with real auth user logic
  const currentUser = { email: "test@example.com" };

  // ✅ Check if user is allowed
  const isAdmin = ADMIN_EMAILS.includes(currentUser.email);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isAdmin) return;

      try {
        const res = await fetch(`${API_URL}/posts`, {
          headers: {
            "X-ADMIN-KEY": ADMIN_KEY
          }
        });
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <p className="text-red-500">
        ❌ You don’t have permission to access this page.
      </p>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className="mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AdminDashboard;
