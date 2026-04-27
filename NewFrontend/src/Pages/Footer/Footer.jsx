import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail, FiGlobe } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import logo from "../../assets/cloud-Logo.png";
import API from "../../api/axios";
import { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [contact, setContact] = useState({
    phone: "",
    email: "",
    office: "",
    website: "",
  });

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const res = await API.get("/contact");

      setContact({
        phone: res.data.data?.phone || "",
        email: res.data.data?.email || "",
        office: res.data.data?.office || "",
        website: res.data.data?.website || "",
      });
    } catch (err) {
      console.error("Footer contact fetch error:", err);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top-pattern"></div>

      <div className="footer-container">
        {/* ================= BRAND ================= */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <div className="logo-container">
              <img
                src={logo}
                alt="CloudXSecure - Web Development and Cloud Solutions Company"
                className="logo-image"
              />
              <div className="logo-glow"></div>
            </div>
          </div>

          <p className="brand-description">
            CloudXSecure is a professional web development and cloud solutions
            company focused on building fast, secure, and scalable digital
            platforms.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <IoChevronForward /> <a href="/">Home</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/about">About Us</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/plan">Pricing</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/faq">FAQs</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/blogs">Blogs</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <IoChevronForward />{" "}
              <a href="/services/web-development">Web Development</a>
            </li>
            <li>
              <IoChevronForward />{" "}
              <a href="/services/security">Cyber Security</a>
            </li>
            <li>
              <IoChevronForward /> <a href="/services/hosting">Cloud Hosting</a>
            </li>
            <li>
              <IoChevronForward />{" "}
              <a href="/services/migration">Cloud Migration</a>
            </li>
            <li>
              <IoChevronForward />{" "}
              <a href="/services/devops">DevOps Solutions</a>
            </li>
            <li>
              <IoChevronForward />{" "}
              <a href="/services/backup">Backup & Recovery</a>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <div className="contact-info">
            <div className="contact-item">
              <FiPhone />
              <a href={`tel:${contact.phone}`}>
                {contact.phone || "Not Available"}
              </a>
            </div>

            <div className="contact-item">
              <FiMail />
              <a href={`mailto:${contact.email}`}>
                {contact.email || "Not Available"}
              </a>
            </div>

            <div className="contact-item">
              <FiMapPin />
              <span>{contact.office || "Not Available"}</span>
            </div>

            <div className="contact-item">
              <FiGlobe />
              <a href={contact.website || "#"} target="_blank" rel="noreferrer">
                {contact.website || "Not Available"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div>© {currentYear} CloudXSecure. All rights reserved.</div>

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
