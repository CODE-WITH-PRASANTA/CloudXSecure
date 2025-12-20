import React from "react";
import "./Navbar.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import logo from "../../assets/cloud.png";

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="CloudXSecure Logo" />
        </div>

        {/* Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            Home <FiChevronDown />
          </li>

          <li className="nav-item">
            Pages <FiChevronDown />
          </li>

          <li className="nav-item">
            Services <FiChevronDown />
          </li>

          {/* Case Study */}
          <li className="nav-item dropdown-parent">
            Case Study <FiChevronDown />
            <ul className="dropdown">
              <li>Case Study</li>
              <li className="arrow-item">
                Case Details <FiChevronRight />
              </li>
            </ul>
          </li>

          {/* Blogs */}
          <li className="nav-item dropdown-parent">
            Blogs <FiChevronDown />
            <ul className="dropdown">
              <li className="arrow-item">
                Our Blogs <FiChevronRight />
              </li>
              <li className="arrow-item">
                Blog Sidebar <FiChevronRight />
              </li>
              <li className="arrow-item">
                Blog Details <FiChevronRight />
              </li>
            </ul>
          </li>

          <li className="nav-item">Contact</li>
        </ul>

        {/* CTA */}
        <button className="nav-cta">
          Get In Touch
          <span className="cta-icon">
            <HiArrowUpRight />
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
