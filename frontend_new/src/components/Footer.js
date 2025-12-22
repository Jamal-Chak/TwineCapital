import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-blue-800 dark:bg-gray-800 text-white text-center text-sm p-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 mb-4">
                <div className="text-left md:text-center">
                    <h3 className="font-bold mb-2 text-lg">TwineCapital</h3>
                    <p className="text-gray-200">Empowering Financial & Tech Solutions</p>
                </div>
                <div>
                    <h3 className="font-bold mb-2 text-lg">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transform hover:scale-110 transition">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-blue-700/50 mt-4 pt-4">
                <p>&copy; {new Date().getFullYear()} TwineCapital. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
