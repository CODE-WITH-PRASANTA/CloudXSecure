import React from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Decorative Top */}
      <div className="footer-top-pattern"></div>

      <div className="footer-container">
        {/* ================= BRAND ================= */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <div className="logo-container">
              <img src={logo} alt="CloudXSecure Logo" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
          </div>

          <p className="brand-description">
            CloudXSecure provides secure, scalable, and high-performance cloud
            solutions to help businesses grow, innovate, and stay protected in
            the digital era.
          </p>

          {/* Social Media */}
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
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
            <li><IoChevronForward /> <a href="/about">About Us</a></li>
            <li><IoChevronForward /> <a href="/plan">Plan & Pricing</a></li>
            <li><IoChevronForward /> <a href="/faq">FAQ</a></li>
            <li><IoChevronForward /> <a href="/blogs">Blogs</a></li>
            <li><IoChevronForward /> <a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="footer-links">
          <div className="section-header">
            <h4>Our Services</h4>
            <div className="underline"></div>
          </div>
          <ul>
            <li><IoChevronForward /> <a href="/services/managed-cloud">Managed Cloud Services</a></li>
            <li><IoChevronForward /> <a href="/services/security">Cloud Security</a></li>
            <li><IoChevronForward /> <a href="/services/hosting">Cloud Hosting</a></li>
            <li><IoChevronForward /> <a href="/services/migration">Cloud Migration</a></li>
            <li><IoChevronForward /> <a href="/services/devops">DevOps & Automation</a></li>
            <li><IoChevronForward /> <a href="/services/monitoring">Monitoring & Cost Optimization</a></li>
            <li><IoChevronForward /> <a href="/services/backup">Backup & Disaster Recovery</a></li>
            <li><IoChevronForward /> <a href="/services/consulting">Cloud Consulting</a></li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="footer-contact">
          <div className="section-header">
            <h4>Contact Info</h4>
            <div className="underline"></div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FiPhone /></div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 (123) 456-7890</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiMail /></div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">support@cloudxsecure.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiMapPin /></div>
              <div className="contact-details">
                <span className="contact-label">Office</span>
                <span className="contact-value">New York, United States</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><FiGlobe /></div>
              <div className="contact-details">
                <span className="contact-label">Website</span>
                <span className="contact-value">www.cloudxsecure.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} CloudXSecure. All Rights Reserved.
          </div>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
