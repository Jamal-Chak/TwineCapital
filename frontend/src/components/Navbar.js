import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const navLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdown(!dropdown);

  const getPath = (item) =>
    item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

  const handleLogout = async () => {
    await logout();
    setDropdown(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          TwineCapital
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => {
            const path = getPath(item);
            const isActive = location.pathname === path;
            return (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  to={path}
                  className={`font-medium transition text-gray-800 dark:text-gray-100 ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  {item}
                </Link>
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                    isActive ? "scale-x-100" : ""
                  } w-full`}
                />
              </motion.div>
            );
          })}

          {/* ✅ Testimonials Link */}
          <Link
            to="/submit-testimonial"
            className={`font-medium transition text-gray-800 dark:text-gray-100 ${
              location.pathname === "/submit-testimonial"
                ? "text-blue-600 dark:text-blue-400"
                : "hover:text-blue-600"
            }`}
          >
            Testimonials
          </Link>

          {/* Auth Section */}
          {currentUser ? (
            <div className="relative ml-4">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-sm font-medium text-gray-800 dark:text-white focus:outline-none"
              >
                <img
                  src={currentUser.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover border"
                />
                <span>{currentUser.displayName || "User"}</span>
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 rounded shadow-lg w-40 py-2 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => setDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white dark:bg-gray-800">
          {navLinks.map((item) => {
            const path = getPath(item);
            const isActive = location.pathname === path;
            return (
              <Link
                key={item}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block font-medium ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-white hover:text-blue-600"
                }`}
              >
                {item}
              </Link>
            );
          })}

          {/* ✅ Mobile Testimonials Link */}
          <Link
            to="/submit-testimonial"
            onClick={() => setIsOpen(false)}
            className={`block font-medium ${
              location.pathname === "/submit-testimonial"
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-800 dark:text-white hover:text-blue-600"
            }`}
          >
            Testimonials
          </Link>

          {/* Auth in Mobile */}
          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block w-full text-left text-red-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-blue-600 font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
