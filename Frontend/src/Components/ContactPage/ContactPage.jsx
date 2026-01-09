import React from "react";
import "./ContactPage.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";

const ContactPage = () => {
  return (
    <section className="contact-page">
      {/* ===== HEADER SECTION ===== */}
      <div className="contact-header">
        <div className="contact-header-left">
          <div className="contact-subtitle">
            <FaArrowLeft className="arrow" /> <span>CONTACT US</span>{" "}
            <FaArrowRight className="arrow" />
          </div>
          <h2 className="contact-title">Have Any Question About Us?</h2>
        </div>

        <div className="contact-header-right">
          <div className="rating-card">
            <span className="rating-title">
              <FaStar className="rating-star green" /> Trustpilot
            </span>
            <div className="rating-avatars">
              <img src={avatar1} alt="user1" />
              <img src={avatar2} alt="user2" />
            </div>
            <p>450+ reviews</p>
          </div>

          <div className="divider"></div>

          <div className="rating-card">
            <span className="rating-title">
              <FaStar className="rating-star yellow" /> Google
            </span>
            <div className="rating-avatars">
              <img src={avatar1} alt="user1" />
              <img src={avatar2} alt="user2" />
            </div>
            <p>450+ reviews</p>
          </div>
        </div>
      </div>

      {/* ===== CONTACT FORM SECTION ===== */}
      <div className="contact-body">
        {/* LEFT FORM SIDE */}
        <div className="contact-form fade-in-left">
          <h3>Get In Touch</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Your Message"></textarea>

            <div className="checkbox-row">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">
                Collaboratively formulate principle capital. Progressively
                evolve user
              </label>
            </div>

            <button type="submit" className="submit-btn">
              SUBMIT NOW →
            </button>
          </form>
        </div>

        {/* RIGHT INFO SIDE */}
        <div className="contact-info-wrapper fade-in-right">
          <div className="map-background">
            <iframe
              title="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.437!2d90.4125184!3d23.810332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b9b1f93d71%3A0x3a1b6a8d8c3bca57!2sDinajpur!5e0!3m2!1sen!2sbd!4v1694589000000!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-info">
            <h4>Contact Info</h4>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>Gregory Cartwright, 4059 Carling Avenue, Ugglebarnby</p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <p>+6108-666-0112</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>Infotech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
