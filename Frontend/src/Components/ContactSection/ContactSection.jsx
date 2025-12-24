import React from "react";
import "./ContactSection.css";
import teamImg from "../../assets/others-img2.webp";

const ContactSection = () => {
  return (
    <section className="contact-wrapper">
      {/* TOP INFO */}
      <div className="contact-top">
        <span className="contact-badge">
          👍 HAVE QUESTIONS? REACH OUT!
        </span>

        <h2>Let's Discuss Your IT Needs</h2>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon-circle">✉️</div>
            <div>
              <h4>Our Email</h4>
              <p>eitechsolut@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-circle">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+1 123 456 7890</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="icon-circle">⏰</div>
            <div>
              <h4>Schedule</h4>
              <p>Sunday–Fri: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="contact-bottom">
        {/* IMAGE */}
        <div className="contact-image">
          <img src={teamImg} alt="team" />
        </div>

        {/* FORM */}
        <div className="contact-form">
          <h3>Get In Touch Now</h3>

          <div className="form-grid">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
            <input type="text" placeholder="Phone Number*" />
            <input type="email" placeholder="Email Address*" />
          </div>

          <input type="text" placeholder="Service Type*" />
          <textarea placeholder="Your Message" rows="4" />

          <button className="submit-btn">
            Get Started Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
