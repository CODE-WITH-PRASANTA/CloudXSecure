import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail, FiGlobe } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import logo from "../../assets/cloud.png";
import API from "../../api/axios";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [contact, setContact] = useState({
    phone: "",
    email: "",
    office: "",
    website: "",
  });

  /* ================= FETCH CONTACT ================= */
  const fetchContact = async () => {
    try {
      const res = await API.get("/contact");
      if (res.data.data) {
        setContact(res.data.data);
      }
    } catch (err) {
      console.error("FETCH CONTACT ERROR:", err);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top-pattern"></div>

      <div className="footer-container">
        {/* ================= BRAND ================= */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <div className="logo-container">
              <img src={logo} alt="CloudXSecure Web Development & Cloud Solutions Company Logo" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
          </div>

          {/* ✅ SEO CONTENT */}
          <p className="brand-description">
            CloudXSecure is a trusted web development and cloud solutions company
            delivering secure, scalable, and high-performance digital services.
            We specialize in website development, cloud infrastructure, cybersecurity,
            and business automation to help startups and enterprises grow faster,
            improve online visibility, and achieve long-term digital success.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-links">
          <div className="section-header">
            <h4>Quick Links</h4>
            <div className="underline"></div>
          </div>
          <ul>
            <li><IoChevronForward /> <a href="/">Home</a></li>
            <li><IoChevronForward /> <a href="/about">About CloudXSecure</a></li>
            <li><IoChevronForward /> <a href="/plan">Pricing Plans</a></li>
            <li><IoChevronForward /> <a href="/faq">FAQs</a></li>
            <li><IoChevronForward /> <a href="/blogs">Tech Blogs & Insights</a></li>
            <li><IoChevronForward /> <a href="/contact">Contact CloudXSecure</a></li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="footer-links">
          <div className="section-header">
            <h4>Our Services</h4>
            <div className="underline"></div>
          </div>
          <ul>
            <li><IoChevronForward /> <a href="/services/web-development">Website Development Services</a></li>
            <li><IoChevronForward /> <a href="/services/security">Cyber Security Solutions</a></li>
            <li><IoChevronForward /> <a href="/services/hosting">Cloud Hosting Services</a></li>
            <li><IoChevronForward /> <a href="/services/migration">Cloud Migration</a></li>
            <li><IoChevronForward /> <a href="/services/devops">DevOps & Automation</a></li>
            <li><IoChevronForward /> <a href="/services/monitoring">Performance Monitoring</a></li>
            <li><IoChevronForward /> <a href="/services/backup">Backup & Disaster Recovery</a></li>
            <li><IoChevronForward /> <a href="/services/consulting">IT & Cloud Consulting</a></li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="footer-contact">
          <div className="section-header">
            <h4>Contact CloudXSecure</h4>
            <div className="underline"></div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FiPhone /></div>
              <div className="contact-details">
                <span className="contact-label">Call Us</span>
                <span className="contact-value">
                  {contact.phone || "Loading..."}
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiMail /></div>
              <div className="contact-details">
                <span className="contact-label">Email Address</span>
                <span className="contact-value">
                  {contact.email || "Loading..."}
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiMapPin /></div>
              <div className="contact-details">
                <span className="contact-label">Office Location</span>
                <span className="contact-value">
                  {contact.office || "Loading..."}
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiGlobe /></div>
              <div className="contact-details">
                <span className="contact-label">Official Website</span>
                <span className="contact-value">
                  {contact.website || "Loading..."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} CloudXSecure Web Development & Cloud Solutions. All Rights Reserved.
          </div>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;