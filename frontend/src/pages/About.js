import React from "react";
import "./About.css";

// ✅ Import Testimonials component
import Testimonials from "../components/Testimonials"; // Adjust path if in another folder

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
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <h1>About TwineCapital</h1>
        <p>
          We are a strategic partnership between accounting and software
          professionals, delivering top-tier solutions for business growth.
        </p>
      </section>

      {/* Mission/Overview */}
      <section className="about-content">
        <h2>We make sure your idea & creation are delivered properly</h2>
        <div className="about-columns">
          <p>
            We help businesses scale efficiently with a perfect balance of tech
            and financial strategy. Our team ensures smooth delivery, from idea
            to execution.
          </p>
          <p>
            From strategy and design to implementation and support, we work as
            your trusted partner every step of the way.
          </p>
        </div>
      </section>

      {/* ✅ Service Highlights with Images */}
      <section className="about-features">
        <h2>Our Core Services</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={accountingImg} alt="Accounting and Tax" className="feature-icon" />
            <h3>Accounting & Tax</h3>
            <p>
              Reliable bookkeeping and tax solutions tailored to your business.
            </p>
          </div>
          <div className="feature-card">
            <img src={seoImg} alt="SEO Optimization" className="feature-icon" />
            <h3>SEO Optimization</h3>
            <p>
              Improve your search ranking and reach your ideal clients online.
            </p>
          </div>
          <div className="feature-card">
            <img src={softwareImg} alt="Software Development" className="feature-icon" />
            <h3>Software Development</h3>
            <p>
              Custom-built software to streamline and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Meet the Team */}
      <section className="about-features">
        <h2>Meet the Team Behind TwineCapital</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={founder} alt="Founder" className="team-photo" />
            <h3>Jonathan Chakombera</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="feature-card">
            <img src={teammate1} alt="Keith Ndlovu" className="team-photo" />
            <h3>Keith Ndlovu</h3>
            <p>Finance Lead</p>
          </div>
          <div className="feature-card">
            <img src={teammate2} alt="Tessla Chakombera" className="team-photo" />
            <h3>Tessla Chakombera</h3>
            <p>Junior Developer</p>
          </div>
        </div>
      </section>

      {/* ✅ Insert Testimonials Section Here */}
      <Testimonials />
    </div>
  );
}

export default About;
