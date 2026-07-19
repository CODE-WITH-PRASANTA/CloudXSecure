import React, { useEffect, useState } from "react";
import "./ContactThree.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPen,
} from "react-icons/fa";

const ContactThree = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Animation
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

  // Handle Change
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", formData);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <section className="webdev-ct3-section">

      <div className="webdev-ct3-bg-text top">
        CONTACT CLOUDXSECURE • GET IN TOUCH • CONTACT CLOUDXSECURE •
      </div>

      <div className="webdev-ct3-container">

        {/* LEFT */}
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
            Reach out to our team — we’re here to help you grow.
          </p>

          <div className="webdev-ct3-info ct-reveal">

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon"><FaEnvelope /></span>
              <div>
                <small>Email Us</small>
                <p>cloudxsecure@gmail.com</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon"><FaPhoneAlt /></span>
              <div>
                <small>Call / WhatsApp</small>
                <p>+91 7666488777</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon"><FaMapMarkerAlt /></span>
              <div>
                <small>Office Location</small>
                <p>Mumbai, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="webdev-ct3-form-wrap ct-reveal">
          <form className="webdev-ct3-form" onSubmit={handleSubmit}>

            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Full Name *</label>
                <div className="webdev-ct3-input">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  <FaUser />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Email *</label>
                <div className="webdev-ct3-input">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Phone</label>
                <div className="webdev-ct3-input">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                  <FaPhoneAlt />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Subject</label>
                <div className="webdev-ct3-input">
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                  />
                  <FaPen />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-field">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              className="webdev-ct3-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactThree;