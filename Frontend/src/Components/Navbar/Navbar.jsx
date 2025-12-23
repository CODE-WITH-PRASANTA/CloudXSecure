import React, { useState } from "react";
import "./Navbar.css";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX
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
      <header className="nav-wrapper">
        <nav className="navbar">
          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="CloudXSecure Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li className="nav-item">Home <FiChevronDown /></li>
            <li className="nav-item dropdown-parent"><a href="/pages">Pages</a> <FiChevronDown />

             <ul className="dropdown">
                <li className="arrow-item">About Us </li>
                <li className="arrow-item">Our Team </li>
                <li className="arrow-item">Testimonials</li>
                <li className="arrow-item">Contact Us</li>
                <li className="arrow-item"><a href="/faq">FAQ</a></li>
                <li className="arrow-item">404</li>
                
              </ul>
            </li>

            <li className="nav-item">Services <FiChevronDown /></li>

            <li className="nav-item dropdown-parent">
              Case Study <FiChevronDown />
              <ul className="dropdown">
                <li>Case Study</li>
                <li className="arrow-item">
                  Case Details <FiChevronRight />
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              Blogs <FiChevronDown />
              <ul className="dropdown">
                <li className="arrow-item">Our Blogs <FiChevronRight /></li>
                <li className="arrow-item">Blog Sidebar <FiChevronRight /></li>
                <li className="arrow-item">Blog Details <FiChevronRight /></li>
              </ul>
            </li>

            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>

          {/* CTA */}
          <button className="nav-cta">
            Get In Touch
            <span className="cta-icon">
              <HiArrowUpRight />
            </span>
          </button>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="logo" />
          <FiX onClick={() => setMenuOpen(false)} />
        </div>

        <ul>
          <li onClick={() => toggleDropdown("home")}>
            Home <FiChevronRight />
          </li>
          <li onClick={() => toggleDropdown("pages")}>
            Pages <FiChevronRight />
          </li>
          <li onClick={() => toggleDropdown("services")}>
            Services <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("case")}>
            Case Study <FiChevronRight />
          </li>
          {activeDropdown === "case" && (
            <div className="mobile-sub">
              <span>Case Study</span>
              <span>Case Details</span>
            </div>
          )}

          <li onClick={() => toggleDropdown("blog")}>
            Blogs <FiChevronRight />
          </li>
          {activeDropdown === "blog" && (
            <div className="mobile-sub">
              <span>Our Blogs</span>
              <span>Blog Sidebar</span>
              <span>Blog Details</span>
            </div>
          )}

          <li>Contact</li>
        </ul>

        <button className="mobile-cta">
          Get In Touch <HiArrowUpRight />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
