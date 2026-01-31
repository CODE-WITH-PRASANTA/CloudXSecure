import React, { useEffect } from "react";
import "./WebdevContact.css";
import contactImg from "../../assets/contact-three-img-1.webp";

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
      {/* BACKGROUND MOVING TEXT (TOP FIXED) */}
      <div className="webdev-ct3-bg-text top">
        GET IN TOUCH * GET IN TOUCH * GET IN TOUCH *
      </div>

      <div className="webdev-ct3-container">
        {/* LEFT CONTENT */}
        <div className="webdev-ct3-left">
          <span className="webdev-ct3-tag ct-reveal">GET IN TOUCH</span>

          <h2 className="webdev-ct3-title">
            <span className="ct-reveal">Conversation –</span>
            <span className="webdev-ct3-highlight ct-reveal">
              {" "}
              Reach Out Anytime
            </span>
          </h2>

          <p className="webdev-ct3-desc ct-reveal">
            We're here to listen! Whether you have questions, feedback,
            or just want to say hello, feel free to reach out.
          </p>

          <div className="webdev-ct3-info ct-reveal">
            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaEnvelope />
              </span>
              <div>
                <small>Email Us</small>
                <p> cloudxsecure@gmail.com</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <small>Contact Us</small>
                <p>7666488777</p>
              </div>
            </div>

            <div className="webdev-ct3-info-box">
              <span className="webdev-ct3-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <small>Our Address</small>
                <p>Room 407 c wing building no 18 , Aqsa apt , amrut Nagar near Ajit glass jogeshwari west mumbai 400102</p>
              </div>
            </div>
          </div>

          {/* FIXED GIRL IMAGE */}
          <img
            src={contactImg}
            alt="Support"
            className="webdev-ct3-person-fixed"
          />
        </div>

        {/* FORM SECTION */}
        <div className="webdev-ct3-form-wrap ct-reveal">
          {/* BLUE TRIANGLE */}
          <span className="webdev-ct3-form-triangle"></span>

          <div className="webdev-ct3-form">
            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Full Name</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Thomas Alison" />
                  <FaUser />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Email Address</label>
                <div className="webdev-ct3-input">
                  <input placeholder="thomas@domain.com" />
                  <FaEnvelope />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-row">
              <div className="webdev-ct3-field">
                <label>Phone Number</label>
                <div className="webdev-ct3-input">
                  <input placeholder="12 (00) 123 4567 890" />
                  <FaPhoneAlt />
                </div>
              </div>

              <div className="webdev-ct3-field">
                <label>Subject</label>
                <div className="webdev-ct3-input">
                  <input placeholder="Subject" />
                  <FaPen />
                </div>
              </div>
            </div>

            <div className="webdev-ct3-field">
              <label>Inquiry about</label>
              <textarea placeholder="Write your message"></textarea>
            </div>

            <button className="webdev-ct3-btn">
              Submit Now <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
