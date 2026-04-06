import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/cloud-Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);

  const navbarLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "FAQ", path: "/faq" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const developmentLinks = [
    { title: "Web Development", path: "/web-development" },
    { title: "App Development", path: "/app-development" },
  ];

  const goTo = (path) => {
    setOpen(false);
    setDevOpen(false);
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          {/* LOGO */}
          <div className="logo" onClick={() => goTo("/")}>
            <img src={logo} alt="logo" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="nav-links">
            {navbarLinks.slice(0, 3).map((item) => (
              <li
                key={item.path}
                className={isActive(item.path) ? "active" : ""}
                onClick={() => goTo(item.path)}
              >
                {item.title}
              </li>
            ))}

            {/* DROPDOWN */}
            <li className="dropdown">
              <span onClick={() => setDevOpen(!devOpen)}>
                Development <FiChevronDown />
              </span>

              <div className={`dropdown-menu ${devOpen ? "show" : ""}`}>
                {developmentLinks.map((item) => (
                  <div
                    key={item.path}
                    onClick={() => goTo(item.path)}
                    className={isActive(item.path) ? "active" : ""}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </li>

            {navbarLinks.slice(3).map((item) => (
              <li
                key={item.path}
                className={isActive(item.path) ? "active" : ""}
                onClick={() => goTo(item.path)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="actions">
            <button onClick={() => goTo("/contact")}>
              Get In Touch
            </button>

            <FiMenu className="menu-icon" onClick={() => setOpen(true)} />
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="logo" />
          <FiX className="close" onClick={() => setOpen(false)} />
        </div>

        <div className="mobile-body">
          {navbarLinks.slice(0, 3).map((item) => (
            <div key={item.path} onClick={() => goTo(item.path)}>
              {item.title}
            </div>
          ))}

          <div className="mobile-dropdown">
            <div onClick={() => setDevOpen(!devOpen)}>
              Development <FiChevronDown />
            </div>

            <div className={`mobile-sub ${devOpen ? "show" : ""}`}>
              {developmentLinks.map((item) => (
                <div key={item.path} onClick={() => goTo(item.path)}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {navbarLinks.slice(3).map((item) => (
            <div key={item.path} onClick={() => goTo(item.path)}>
              {item.title}
            </div>
          ))}

          <button className="mobile-btn" onClick={() => goTo("/contact")}>
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;