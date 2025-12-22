// src/components/Testimonials.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Testimonials = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchTestimonials = async () => {
      try {
        console.log("🔄 Fetching testimonials from backend...");
        const url = `${API_URL.replace(/\/$/, "")}/testimonials`;
        console.log("📡 API URL:", url);
        
        const res = await axios.get(url);
        console.log("✅ Backend response:", res.data);
        
        if (!cancelled) {
          if (Array.isArray(res.data)) {
            setItems(res.data);
            console.log(`📊 Loaded ${res.data.length} testimonials`);
          } else {
            console.log("❌ Expected array but got:", typeof res.data);
            setItems([]);
          }
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("❌ Failed to fetch testimonials:", err);
          setError("Failed to load testimonials. Please check if the backend server is running.");
          setLoading(false);
        }
      }
    };

    fetchTestimonials();
    return () => {
      cancelled = true;
    };
  }, []);

  const settings = {
    dots: true,
    infinite: items.length > 1,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: items.length > 1,
    autoplaySpeed: 5000,
  };

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="text-gray-600 dark:text-gray-400 text-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          Loading testimonials...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded max-w-md mx-auto">
          <strong>Error:</strong> {error}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="py-12 text-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            No Testimonials Yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Be the first to share your experience with TwineCapital!
          </p>
          <a
            href="/submit-testimonial"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Your Testimonial
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {items.map((t) => (
            <div key={t.id} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mx-4">
              <div className="text-center">
                {t.rating && (
                  <div className="text-yellow-400 text-2xl mb-4">
                    {"★".repeat(t.rating)}
                    <span className="text-gray-300 dark:text-gray-600">
                      {'★'.repeat(5 - t.rating)}
                    </span>
                  </div>
                )}
                
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{t.feedback}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    {t.email && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;