import React, { useEffect } from "react";
import "./ContactThree.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";

const ContactThree = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".ct-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="webdev-ct3-section">
      
      {/* BACKGROUND TEXT */}
      <div className="webdev-ct3-bg-text top">
        CONTACT CLOUDXSECURE • GET IN TOUCH • CONTACT CLOUDXSECURE •
      </div>

      <div className="webdev-ct3-container">
        
        {/* LEFT CONTENT */}
        <div className="webdev-ct3-left">
          <span className="webdev-ct3-tag ct-reveal">
            GET IN TOUCH
          </span>

          <h2 className="webdev-ct3-title">
            <span className="ct-reveal">Let’s Build Something Great –</span>
            <span className="webdev-ct3-highlight ct-reveal">
              {" "}Contact CloudXSecure
            </span>
          </h2>

          <p className="webdev-ct3-desc ct-reveal">
            Looking for reliable web development, cloud solutions, or cybersecurity services? 
            At CloudXSecure, we help businesses grow with secure, scalable, and high-performance digital solutions. 
            Reach out to our team for project discussions, technical support, or business inquiries — we’re here to help you move forward with confidence.
          </p>

          <div className="webdev-ct3-info ct-reveal">
            
            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaEnvelope />
              </span>
              <div>
                <small>Email Us</small>
                <p>cloudxsecure@gmail.com</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <small>Call / WhatsApp</small>
                <p>+91 7666488777</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <small>Office Location</small>
                <p>
                  Room 407, C Wing, Building No.18, Aqsa Apartment, 
                  Amrut Nagar, Near Ajit Glass, Jogeshwari West, Mumbai – 400102
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="webdev-ct3-form-wrap ct-reveal">
          <div className="webdev-ct3-form">

            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Full Name</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Enter your full name" />
                  <FaUser />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Email Address</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Enter your email address" />
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Phone Number</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Enter your phone number" />
                  <FaPhoneAlt />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Subject</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Project or inquiry subject" />
                  <FaPen />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-field">
              <label>Your Message</label>
              <textarea placeholder="Tell us about your project or requirement..."></textarea>
            </div>

            <button className="webdev-ct3-btn">
              Send Message →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactThree;