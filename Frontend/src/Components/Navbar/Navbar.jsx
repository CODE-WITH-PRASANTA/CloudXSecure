import React, { useState } from "react";
import "./Navbar.css";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import logo from "../../assets/cloud.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="nav-wrapper">
        <nav className="navbar">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/">
              <img src={logo} alt="CloudXSecure Logo" />
            </a>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="nav-menu desktop-menu">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>

            <li className="nav-item">
              <a href="/about">About Us</a>
            </li>

            {/* SERVICES */}
            <li className="nav-item dropdown-parent">
              <a href="/services">Services</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="/services/managed-cloud">Managed Cloud Services</a></li>
                <li><a href="/services/security">Cloud Security</a></li>
                <li><a href="/services/hosting">Cloud Hosting</a></li>
                <li><a href="/services/migration">Cloud Migration</a></li>
                <li><a href="/services/devops">DevOps & Automation</a></li>
                <li><a href="/services/monitoring">Monitoring & Cost Optimization</a></li>
                <li><a href="/services/backup">Backup & Disaster Recovery</a></li>
                <li><a href="/services/consulting">Cloud Consulting</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="/plan">Plan & Pricing</a>
            </li>

            <li className="nav-item">
              <a href="/faq">Faq</a>
            </li>

            <li className="nav-item">
              <a href="/blogs">Blogs</a>
            </li>

            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* ================= CTA ================= */}
          <button className="nav-cta">
            Get In Touch <HiArrowUpRight />
          </button>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="mobile-toggle" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="logo" />
          <FiX onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="mobile-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>

          {/* SERVICES */}
          <li onClick={() => toggleDropdown("services")}>
            Services <FiChevronRight />
          </li>
          {activeDropdown === "services" && (
            <div className="mobile-sub">
              <a href="/services/managed-cloud">Managed Cloud Services</a>
              <a href="/services/security">Cloud Security</a>
              <a href="/services/hosting">Cloud Hosting</a>
              <a href="/services/migration">Cloud Migration</a>
              <a href="/services/devops">DevOps & Automation</a>
              <a href="/services/monitoring">Monitoring & Cost Optimization</a>
              <a href="/services/backup">Backup & Disaster Recovery</a>
              <a href="/services/consulting">Cloud Consulting</a>
            </div>
          )}

          <li><a href="/plan">Plan & Pricing</a></li>
          <li><a href="/faq">Faq</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <button className="mobile-cta">
          Get In Touch <HiArrowUpRight />
        </button>
      </div>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
