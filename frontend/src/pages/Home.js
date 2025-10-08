import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';
import EmailCapture from '../components/EmailCapture';

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to TwineCapital
            </h1>
            <p className="text-lg md:text-2xl mb-8 leading-relaxed">
              Your trusted partner in consulting and tech innovation. 
              Transform your business with cutting-edge financial and technological solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </button>
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Email Capture Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <EmailCapture variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;