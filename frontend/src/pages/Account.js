import React from "react";
import { useAuth } from "../context/AuthContext";

function Account() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Account Settings</h1>
      <div className="text-gray-700 dark:text-gray-300">
        <p><strong>Email:</strong> {currentUser?.email}</p>
        <p><strong>Name:</strong> {currentUser?.displayName || "Not set"}</p>
      </div>
    </div>
  );
}

export default Account;
