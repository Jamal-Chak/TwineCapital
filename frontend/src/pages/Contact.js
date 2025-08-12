import React from "react";
import cityImage from "../assets/city.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div>
      {/* Hero Image */}
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${cityImage})` }}
      >
        <h1>CONTACT US</h1>
        <p>
          Need an expert? You are more than welcome to leave your contact info and we will be in touch shortly.
        </p>
        
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        {/* Google Maps Link */}
        <div className="info-box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>VISIT US</h3>
          <a
            href="https://www.google.com/maps?q=57+Railway+Ave,+Kleinfontein+67-lr,+Benoni,+1500"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            57 Railway Ave, Kleinfontein 67-lr, Benoni, 1500
          </a>
        </div>

        {/* Call Us */}
        <div className="info-box">
          <i className="fas fa-phone"></i>
          <h3>CALL US</h3>
          <a
            href="tel:+27816131222"
            className="hover:text-blue-600 transition duration-300 font-medium"
          >
            +27 81 613 1222
          </a>
        </div>

        {/* Email Us */}
        <div className="info-box">
          <i className="fas fa-envelope"></i>
          <h3>CONTACT US</h3>
          <a
            href="mailto:twineenginehub@yahoo.com"
            className="text-blue-600 hover:underline"
          >
            twineenginehub@yahoo.com
          </a>
        </div>
      </div>

      {/* Contact Form via FormSubmit */}
      <div className="contact-form">
        <form
          action="https://formsubmit.co/twineenginehub@yahoo.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>

          {/* FormSubmit hidden options */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
