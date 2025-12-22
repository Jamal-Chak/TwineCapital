"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="relative min-h-screen" style={{
            backgroundImage: 'url(/assets/contact-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="min-h-screen bg-slate-900/50">
                {/* Hero Content */}
                <div className="relative py-16 md:py-24 px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Need an expert? You are more than welcome to leave your contact info and we will be in touch shortly.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="py-12 md:py-16 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8">
                        {/* Google Maps Link */}
                        <div className="flex-1 text-center hover:-translate-y-2 transition-transform bg-slate-800/60 p-4 rounded-xl border border-slate-600 hover:border-cyan-400 group overflow-hidden">
                            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border border-slate-600/50">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://maps.google.com/maps?q=57%20Railway%20Ave%2C%20Kleinfontein%2067-lr%2C%20Benoni%2C%201500&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    title="Google Map"
                                ></iframe>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">VISIT US</h3>
                            <a
                                href="https://www.google.com/maps?q=57+Railway+Ave,+Kleinfontein+67-lr,+Benoni,+1500"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:underline text-sm"
                            >
                                57 Railway Ave, Kleinfontein 67-lr, Benoni, 1500
                            </a>
                        </div>

                        {/* Call & WhatsApp */}
                        <div className="flex-1 text-center hover:-translate-y-2 transition-transform bg-slate-800/60 p-8 rounded-xl border border-slate-600 hover:border-cyan-400 group">
                            <div className="flex justify-center gap-4 mb-4">
                                <FaPhone className="text-4xl text-cyan-400" />
                                <FaWhatsapp className="text-4xl text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">GET IN TOUCH</h3>

                            <div className="mb-4">
                                <p className="text-sm text-gray-400 mb-1">CALL US</p>
                                <a href="tel:0601870071" className="text-lg font-medium text-white hover:text-cyan-400 transition block">
                                    060 187 0071
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400 mb-1">WHATSAPP</p>
                                <a href="https://wa.me/27816131222" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-400 transition block">
                                    +27 81 613 1222
                                </a>
                            </div>
                        </div>

                        {/* Email Us */}
                        <div className="flex-1 text-center hover:-translate-y-2 transition-transform bg-slate-800/60 p-8 rounded-xl border border-slate-600 hover:border-cyan-400 group">
                            <FaEnvelope className="text-4xl text-cyan-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-white">CONTACT US</h3>
                            <a
                                href="mailto:twineenginehub@yahoo.com"
                                className="text-cyan-400 hover:underline block"
                            >
                                twineenginehub@yahoo.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form via FormSubmit */}
                <div className="py-16 px-6 max-w-2xl mx-auto">
                    <div className="bg-slate-800/80 p-8 rounded-xl shadow-lg border border-slate-600">
                        <h2 className="text-2xl font-bold text-center mb-8 text-white">Send us a Message</h2>
                        <form
                            action="https://formsubmit.co/twineenginehub@yahoo.com"
                            method="POST"
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="p-3 border border-slate-600 rounded-lg bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="p-3 border border-slate-600 rounded-lg bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-400"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                rows="5"
                                className="p-3 border border-slate-600 rounded-lg bg-slate-700/50 text-white focus:outline-none focus:border-cyan-400 placeholder-gray-400"
                            ></textarea>

                            {/* FormSubmit hidden options */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="box" />
                            <input
                                type="hidden"
                                name="_next"
                                value="https://yourdomain.com/thank-you"
                            />

                            <button
                                type="submit"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
