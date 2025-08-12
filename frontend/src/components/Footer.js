import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-800 dark:bg-gray-800 text-center text-sm p-6 transition-colors duration-500">
      <div className="grid md:grid-cols-2 gap-6 mb-4">
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <p>TwineCapital</p>
          <p>Empowering Financial & Tech Solutions</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-125 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-125 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-125 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-125 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-125 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} TwineCapital. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


