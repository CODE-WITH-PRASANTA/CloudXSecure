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
            <a href="#">
              <img src={logo} alt="CloudXSecure Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#">Home</a> <FiChevronDown />
            </li>

            <li className="nav-item">
              <a href="#">Pages</a> <FiChevronDown />
            </li>

            <li className="nav-item">
              <a href="#">Services</a> <FiChevronDown />
            </li>

            <li className="nav-item dropdown-parent">
              <a href="#">Case Study</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="#">Case Study</a></li>
                <li>
                  <a href="#">Case Details</a>
                  <FiChevronRight />
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              <a href="#">Blogs</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="#">Our Blogs</a></li>
                <li><a href="#">Blog Sidebar</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* CTA */}
          <button className="nav-cta">
            <a href="#">Get In Touch</a>
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
            <a href="#">Home</a> <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("pages")}>
            <a href="#">Pages</a> <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("services")}>
            <a href="#">Services</a> <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("case")}>
            <a href="#">Case Study</a> <FiChevronRight />
          </li>

          {activeDropdown === "case" && (
            <div className="mobile-sub">
              <a href="#">Case Study</a>
              <a href="#">Case Details</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("blog")}>
            <a href="#">Blogs</a> <FiChevronRight />
          </li>

          {activeDropdown === "blog" && (
            <div className="mobile-sub">
              <a href="#">Our Blogs</a>
              <a href="#">Blog Sidebar</a>
              <a href="#">Blog Details</a>
            </div>
          )}

          <li><a href="#">Contact</a></li>
        </ul>

        <button className="mobile-cta">
          <a href="#">Get In Touch</a>
          <HiArrowUpRight />
        </button>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
