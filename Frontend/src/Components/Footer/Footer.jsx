import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail, FiGlobe } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import logo from "../../assets/cloud.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Pattern */}
      <div className="footer-top-pattern"></div>
      
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <div className="logo-container">
              <img src={logo} alt="Eitech Logo" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
            
          </div>
          
          <p className="brand-description">
            We deliver cutting-edge technology solutions tailored to elevate your 
            business in the digital era. Experience innovation that drives results.
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

        {/* Quick Links */}
        <div className="footer-links">
          <div className="section-header">
            <h4>Quick Links</h4>
            <div className="underline"></div>
          </div>
          <ul>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>About Us</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>IT Solutions</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Our Blog</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Pricing Plan</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Career</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Contact Us</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <div className="section-header">
            <h4>Our Services</h4>
            <div className="underline"></div>
          </div>
          <ul>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Cyber Security Solution</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Scalable Cloud Solutions</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Data Protection Services</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Optimization Management</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>Software Development</span>
            </li>
            <li>
              <IoChevronForward className="link-arrow" />
              <span>AI Integration</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <div className="section-header">
            <h4>Contact Info</h4>
            <div className="underline"></div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone Number</span>
                <span className="contact-value">+1 (123) 456-7890</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <span className="contact-label">Office Address</span>
                <span className="contact-value">421 Allen St, New York 10002</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Address</span>
                <span className="contact-value">contact@eitech.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiGlobe />
              </div>
              <div className="contact-details">
                <span className="contact-label">Website</span>
                <span className="contact-value">www.eitechsolution.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} Eitech Solutions. All Rights Reserved
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;