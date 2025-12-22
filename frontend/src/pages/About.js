import React from "react";
import Testimonials from "../components/Testimonials";
import EmailCapture from "../components/EmailCapture";

// ✅ Team Members
import founder from "../assets/team/founder.jpg";
import teammate1 from "../assets/team/teammate1.jpg";
import teammate2 from "../assets/team/teammate2.jpg";

// ✅ Feature Card Images (Services)
import accountingImg from "../assets/cards/accounting.png";
import seoImg from "../assets/cards/seo.png";
import softwareImg from "../assets/cards/software.png";

function About() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About TwineCapital</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We are a strategic partnership between accounting and software
            professionals, delivering top-tier solutions for business growth.
          </p>
        </div>
      </section>

      {/* Mission/Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            We make sure your idea & creation are delivered properly
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We help businesses scale efficiently with a perfect balance of tech
                and financial strategy. Our team ensures smooth delivery, from idea
                to execution.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                From strategy and design to implementation and support, we work as
                your trusted partner every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Accounting Service */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={accountingImg} alt="Accounting and Tax" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                Accounting & Tax
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Reliable bookkeeping and tax solutions tailored to your business.
              </p>
            </div>

            {/* SEO Service */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={seoImg} alt="SEO Optimization" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                SEO Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Improve your search ranking and reach your ideal clients online.
              </p>
            </div>

            {/* Software Development Service */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={softwareImg} alt="Software Development" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Custom-built software to streamline and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Meet the Team Behind TwineCapital
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="text-center group">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={founder} 
                  alt="Jonathan Chakombera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Jonathan Chakombera
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Leading the vision and strategy for TwineCapital's growth and innovation.
              </p>
            </div>

            {/* Finance Lead */}
            <div className="text-center group">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={teammate1} 
                  alt="Keith Ndlovu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Keith Ndlovu
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Finance Lead</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Managing financial operations and ensuring sustainable business growth.
              </p>
            </div>

            {/* Junior Developer */}
            <div className="text-center group">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={teammate2} 
                  alt="Tessia Chakombera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Tessia Chakombera
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Junior Developer</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                Building innovative software solutions and contributing to technical development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Company
          </h2>
          <div className="bg-white dark:bg-gray-700 p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              TwineCapital
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-semibold">
              International Financial & Tech Solutions
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We provide innovative financial technology solutions to help businesses 
              and individuals achieve their financial goals through cutting-edge technology 
              and expert financial guidance. Our integrated approach combines financial 
              expertise with technological innovation to deliver comprehensive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Discover why businesses trust TwineCapital for their financial technology needs
          </p>
          <Testimonials />
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Join hundreds of businesses that trust TwineCapital for their financial 
                and technological needs.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Get personalized financial insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Access exclusive content and tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Connect with our expert team
                </li>
              </ul>
            </div>
            <EmailCapture />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;