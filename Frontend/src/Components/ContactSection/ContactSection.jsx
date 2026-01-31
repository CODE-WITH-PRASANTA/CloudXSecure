import React from "react";
import "./ContactSection.css";
import teamImg from "../../assets/others-img2.webp";

const ContactSection = () => {
  return (
    <section className="cx-contact">

      {/* ================= HEADER ================= */}
      <header className="cx-contact__header">
        <span className="cx-contact__badge">
          🚀 CLOUDXSECURE SUPPORT
        </span>

        <h2 className="cx-contact__title">
          Talk to Our Technology Experts
        </h2>

        <p className="cx-contact__subtitle">
          CloudXSecure provides secure cloud infrastructure, IT consulting,
          and scalable digital solutions designed to protect and grow
          modern businesses worldwide.
        </p>
      </header>

      {/* ================= INFO CARDS ================= */}
      <div className="cx-contact__info">
        <div className="cx-contact__info-card">
          <div className="cx-contact__icon">✉️</div>
          <div className="cx-contact__info-text">
            <h4>Email Support</h4>
            <p> cloudxsecure@gmail.com</p>
          </div>
        </div>

        <div className="cx-contact__info-card">
          <div className="cx-contact__icon">📞</div>
          <div className="cx-contact__info-text">
            <h4>Call Us</h4>
            <p>7666488777</p>
          </div>
        </div>

        <div className="cx-contact__info-card">
          <div className="cx-contact__icon">⏱️</div>
          <div className="cx-contact__info-text">
            <h4>Business Hours</h4>
            <p>Mon – Sat • 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="cx-contact__content">

        {/* IMAGE */}
        <div className="cx-contact__image">
          <img src={teamImg} alt="CloudXSecure Team" />
        </div>

        {/* FORM */}
        <form className="cx-contact__form">
          <h3 className="cx-contact__form-title">
            Request a Free Consultation
          </h3>

          <div className="cx-contact__form-grid">
            <input type="text" placeholder="Full Name*" />
            <input type="email" placeholder="Business Email*" />
            <input type="tel" placeholder="Phone Number*" />
            <input type="text" placeholder="Company Name*" />
          </div>

          <select className="cx-contact__select">
            <option value="">Select Service*</option>
            <option>Cloud Security</option>
            <option>IT Infrastructure</option>
            <option>Web & App Development</option>
            <option>Enterprise Consulting</option>
          </select>

          <textarea
            className="cx-contact__textarea"
            rows="4"
            placeholder="Briefly describe your requirements"
          />

          <button className="cx-contact__btn" type="submit">
            Schedule Consultation →
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
