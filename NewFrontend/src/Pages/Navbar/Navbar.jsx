import React, { useState } from "react";
import "./Navbar.css";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/cloud-Logo.png";

const Navbar = () => {
  const [navbarMenuOpen, setNavbarMenuOpen] = useState(false);
  const [navbarDevelopmentOpen, setNavbarDevelopmentOpen] = useState(false);

  // ✅ SIMPLE MENU STRUCTURE (title + path)
  const navbarLinks = [
    { title: "Home", path: "/home" },
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

  // ✅ NAVIGATION FUNCTION
  const handleNavbarNavigate = (item) => {
    console.log("Title:", item.title);
    console.log("Path:", item.path);

    setNavbarMenuOpen(false);
    setNavbarDevelopmentOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* LOGO */}
        <div
          className="navbar__logoWrapper"
          onClick={() => handleNavbarNavigate({ title: "Home", path: "home" })}
        >
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>

        {/* DESKTOP MENU */}
        <nav className="navbar__desktop">
          <ul className="navbar__desktopList">
            {navbarLinks.slice(0, 3).map((item) => (
              <li key={item.path} className="navbar__desktopItem">
                <button
                  className="navbar__desktopLink"
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}

            {/* DEVELOPMENT DROPDOWN */}
            <li className="navbar__desktopItem navbar__desktopItem--dropdown">
              <button
                className="navbar__desktopLink navbar__desktopDropdownToggle"
                onClick={() =>
                  setNavbarDevelopmentOpen(!navbarDevelopmentOpen)
                }
              >
                Development
                <FiChevronDown
                  className={`navbar__desktopChevron ${
                    navbarDevelopmentOpen
                      ? "navbar__desktopChevron--rotate"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`navbar__desktopDropdown ${
                  navbarDevelopmentOpen
                    ? "navbar__desktopDropdown--show"
                    : ""
                }`}
              >
                {developmentLinks.map((item) => (
                  <button
                    key={item.path}
                    className="navbar__desktopDropdownLink"
                    onClick={() => handleNavbarNavigate(item)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </li>

            {navbarLinks.slice(3).map((item) => (
              <li key={item.path} className="navbar__desktopItem">
                <button
                  className="navbar__desktopLink"
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT BUTTON */}
        <div className="navbar__actions">
          <button
            className="navbar__contactButton"
            onClick={() =>
              handleNavbarNavigate({
                title: "Get In Touch",
                path: "contact",
              })
            }
          >
            Get In Touch
          </button>

          <button
            className="navbar__menuButton"
            onClick={() => setNavbarMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`navbar__overlay ${
          navbarMenuOpen ? "navbar__overlay--show" : ""
        }`}
        onClick={() => setNavbarMenuOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div
        className={`navbar__mobile ${
          navbarMenuOpen ? "navbar__mobile--show" : ""
        }`}
      >
        <div className="navbar__mobileHeader">
          <img src={logo} alt="Logo" className="navbar__mobileLogo" />

          <button
            className="navbar__closeButton"
            onClick={() => setNavbarMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <div className="navbar__mobileBody">
          {navbarLinks.slice(0, 3).map((item) => (
            <button
              key={item.path}
              className="navbar__mobileLink"
              onClick={() => handleNavbarNavigate(item)}
            >
              {item.title}
            </button>
          ))}

          {/* MOBILE DROPDOWN */}
          <div className="navbar__mobileDropdown">
            <button
              className="navbar__mobileLink navbar__mobileDropdownToggle"
              onClick={() =>
                setNavbarDevelopmentOpen(!navbarDevelopmentOpen)
              }
            >
              <span>Development</span>
              <FiChevronDown
                className={`navbar__mobileChevron ${
                  navbarDevelopmentOpen ? "navbar__mobileChevron--rotate" : ""
                }`}
              />
            </button>

            <div
              className={`navbar__mobileDropdownMenu ${
                navbarDevelopmentOpen
                  ? "navbar__mobileDropdownMenu--show"
                  : ""
              }`}
            >
              {developmentLinks.map((item) => (
                <button
                  key={item.path}
                  className="navbar__mobileDropdownLink"
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {navbarLinks.slice(3).map((item) => (
            <button
              key={item.path}
              className="navbar__mobileLink"
              onClick={() => handleNavbarNavigate(item)}
            >
              {item.title}
            </button>
          ))}

          <button
            className="navbar__mobileButton"
            onClick={() =>
              handleNavbarNavigate({
                title: "Get In Touch",
                path: "contact",
              })
            }
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;