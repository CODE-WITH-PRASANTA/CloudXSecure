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

            <li className="nav-item dropdown-parent">
              <a href="/pages">Pages</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="/about">About Us</a></li>
                <li><a href="/team">Our Team</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/404">404</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              <a href="/services">Services</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="/services/cloud">Cloud Services</a></li>
                <li><a href="/services/security">Security</a></li>
                <li><a href="/services/devops">DevOps</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              <a href="/case-study">Case Study</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="/case-study">Case Study</a></li>
                <li><a href="/case-study/details">Case Details</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              <a href="/blogs">Blogs</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="/blogs">Our Blogs</a></li>
                <li><a href="/blogs/sidebar">Blog Sidebar</a></li>
                <li><a href="/blogs/details">Blog Details</a></li>
              </ul>
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

          <li onClick={() => toggleDropdown("pages")}>
            Pages <FiChevronRight />
          </li>
          {activeDropdown === "pages" && (
            <div className="mobile-sub">
              <a href="/about">About Us</a>
              <a href="/team">Our Team</a>
              <a href="/testimonials">Testimonials</a>
              <a href="/contact">Contact Us</a>
              <a href="/faq">FAQ</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("services")}>
            Services <FiChevronRight />
          </li>
          {activeDropdown === "services" && (
            <div className="mobile-sub">
              <a href="/services/cloud">Cloud Services</a>
              <a href="/services/security">Security</a>
              <a href="/services/devops">DevOps</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("case")}>
            Case Study <FiChevronRight />
          </li>
          {activeDropdown === "case" && (
            <div className="mobile-sub">
              <a href="/case-study">Case Study</a>
              <a href="/case-study/details">Case Details</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("blog")}>
            Blogs <FiChevronRight />
          </li>
          {activeDropdown === "blog" && (
            <div className="mobile-sub">
              <a href="/blogs">Our Blogs</a>
              <a href="/blogs/sidebar">Blog Sidebar</a>
              <a href="/blogs/details">Blog Details</a>
            </div>
          )}

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
