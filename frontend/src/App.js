import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

// ✅ Protected route wrapper + protected pages
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SubmitTestimonial from "./pages/SubmitTestimonial"; // ✅ Testimonial form page

// Individual service detail pages
import AccountingTax from "./pages/services/AccountingTax";
import FinancialConsulting from "./pages/services/FinancialConsulting";
import AuditingAssurance from "./pages/services/AuditingAssurance";
import FinancialStatements from "./pages/services/FinancialStatements";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import DataAnalytics from "./pages/services/DataAnalytics";
import SoftwareConsulting from "./pages/services/SoftwareConsulting";
import UXUIDesign from "./pages/services/UXUIDesign";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="font-sans overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <Navbar />
            <HeroSection />

            <main className="max-w-7xl mx-auto px-4 py-8">
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/submit-testimonial" element={<SubmitTestimonial />} /> {/* ✅ Added */}

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />

                {/* Service Detail Pages */}
                <Route path="/services/accounting-tax" element={<AccountingTax />} />
                <Route path="/services/financial-consulting" element={<FinancialConsulting />} />
                <Route path="/services/auditing-assurance" element={<AuditingAssurance />} />
                <Route path="/services/financial-statements" element={<FinancialStatements />} />
                <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/software-consulting" element={<SoftwareConsulting />} />
                <Route path="/services/ux-ui-design" element={<UXUIDesign />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
