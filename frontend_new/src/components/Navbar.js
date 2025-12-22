"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const navLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdown(!dropdown);

    const getPath = (item) =>
        item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

    const handleLogout = async () => {
        await logout();
        setDropdown(false);
        router.push("/login");
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/assets/logo.png"
                        alt="TwineCapital"
                        className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-screen"
                    />
                    <span className="text-2xl font-bold text-white tracking-widest uppercase">
                        <span className="text-primary">Twine</span>Capital
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((item) => {
                        const path = getPath(item);
                        const isActive = pathname === path;
                        return (
                            <Link
                                key={item}
                                href={path}
                                className={`text-sm font-medium tracking-wide uppercase transition-colors ${isActive ? "text-primary" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <Link
                        href="/submit-testimonial"
                        className={`text-sm font-medium tracking-wide uppercase transition-colors ${pathname === "/submit-testimonial" ? "text-primary" : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Testimonials
                    </Link>

                    {/* Auth Section */}
                    {user ? (
                        <div className="relative ml-4">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 text-sm font-medium text-white focus:outline-none"
                            >
                                <img
                                    src={user.photoURL || "/default-avatar.png"}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full object-cover border border-gray-600"
                                />
                            </button>
                            {dropdown && (
                                <div className="absolute right-0 mt-2 bg-slate-800 border border-gray-700 rounded shadow-xl w-48 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-700">
                                        <p className="text-sm text-white font-semibold">{user.displayName || "User"}</p>
                                    </div>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                                        onClick={() => setDropdown(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : null}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6 text-white" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-slate-900 border-t border-gray-800">
                    {navLinks.map((item) => {
                        const path = getPath(item);
                        const isActive = pathname === path;
                        return (
                            <Link
                                key={item}
                                href={path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-sm font-medium uppercase tracking-wide ${isActive ? "text-primary" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    <Link
                        href="/submit-testimonial"
                        onClick={() => setIsOpen(false)}
                        className={`block text-sm font-medium uppercase tracking-wide ${pathname === "/submit-testimonial" ? "text-primary" : "text-gray-300 hover:text-white"
                            }`}
                    >
                        Testimonials
                    </Link>

                    {user ? (
                        <button
                            onClick={() => {
                                handleLogout();
                                setIsOpen(false);
                            }}
                            className="block w-full text-left text-red-400 font-semibold mt-4"
                        >
                            Logout
                        </button>
                    ) : null}
                </div>
            )}
        </header>
    );
};

export default Navbar;
