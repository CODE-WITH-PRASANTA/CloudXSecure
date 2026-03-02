import React, { useState } from "react";
import "./ContactSection.css";
import teamImg from "../../assets/others-img2.webp";
import API from "../../api/axios";

const ContactSection = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.company ||
      !form.service
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/leads", form);

      alert("Consultation request submitted successfully!");

      // Reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error("LEAD SUBMIT ERROR:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="cx-contact__form" onSubmit={handleSubmit}>
          <h3 className="cx-contact__form-title">
            Request a Free Consultation
          </h3>

          <div className="cx-contact__form-grid">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={form.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Business Email*"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name*"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <select
            className="cx-contact__select"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select Service*</option>
            <option>Cloud Security</option>
            <option>IT Infrastructure</option>
            <option>Web & App Development</option>
            <option>Enterprise Consulting</option>
          </select>

          <textarea
            className="cx-contact__textarea"
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Briefly describe your requirements"
          />

          <button
            className="cx-contact__btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Schedule Consultation →"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;