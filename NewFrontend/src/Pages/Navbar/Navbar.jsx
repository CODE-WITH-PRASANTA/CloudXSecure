import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa"; // ✅ CALL ICON
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/cloud-Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const [navbarDevelopmentOpen, setNavbarDevelopmentOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavbarNavigate = (item) => {
    setNavbarMenuOpen(false);
    setNavbarDevelopmentOpen(false);
    navigate(item.path);
  };

  const isActiveLink = (path) => location.pathname === path;

  const isDevelopmentActive = developmentLinks.some(
    (item) => item.path === location.pathname
  );

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">

        {/* LOGO */}
        <div
          className="navbar__logoWrapper"
          onClick={() => handleNavbarNavigate({ path: "/" })}
        >
          <img src={logo} alt="CloudXsecure Logo" className="navbar__logo" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="navbar__desktop">
          <ul className="navbar__desktopList">
            {navbarLinks.slice(0, 3).map((item) => (
              <li key={item.path}>
                <button
                  className={`navbar__desktopLink ${
                    isActiveLink(item.path)
                      ? "navbar__desktopLink--active"
                      : ""
                  }`}
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}

            {/* DROPDOWN */}
            <li className="navbar__desktopItem--dropdown">
              <button
                className={`navbar__desktopLink ${
                  isDevelopmentActive ? "navbar__desktopLink--active" : ""
                }`}
                onClick={() =>
                  setNavbarDevelopmentOpen(!navbarDevelopmentOpen)
                }
              >
                Development <FiChevronDown />
              </button>

              {navbarDevelopmentOpen && (
                <div className="navbar__desktopDropdown">
                  {developmentLinks.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavbarNavigate(item)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </li>

            {navbarLinks.slice(3).map((item) => (
              <li key={item.path}>
                <button
                  className={`navbar__desktopLink ${
                    isActiveLink(item.path)
                      ? "navbar__desktopLink--active"
                      : ""
                  }`}
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTION BUTTON */}
        <div className="navbar__actions">

          {/* ✅ CALL BUTTON */}
          <a
            href="tel:7666488777"
            className="navbar__contactButton"
          >
            <FaPhoneAlt className="call-icon" />
            Get In Touch
          </a>

          <button
            className="navbar__menuButton"
            onClick={() => setNavbarMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile ${navbarMenuOpen ? "navbar__mobile--show" : ""}`}>
        
        <div className="navbar__mobileHeader">
          <img src={logo} alt="Logo" />
          <button onClick={() => setNavbarMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="navbar__mobileBody">
          {navbarLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavbarNavigate(item)}
            >
              {item.title}
            </button>
          ))}

          {/* ✅ MOBILE CALL BUTTON */}
          <a href="tel:7666488777" className="navbar__mobileButton">
            <FaPhoneAlt className="call-icon" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;