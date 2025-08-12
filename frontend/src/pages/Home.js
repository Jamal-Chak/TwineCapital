import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg'; // Ensure this path is correct

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to TwineCapital
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Your trusted partner in consulting and tech innovation.
        </p>
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
}

export default Home;
