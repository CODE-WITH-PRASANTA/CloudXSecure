import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div
          className="navbar__logoWrapper"
          onClick={() => handleNavbarNavigate({ path: "/" })}
        >
          <img src={logo} alt="Logo" className="navbar__logo" />
        </div>

        <nav className="navbar__desktop">
          <ul className="navbar__desktopList">
            {navbarLinks.slice(0, 3).map((item) => (
              <li key={item.path} className="navbar__desktopItem">
                <button
                  className={`navbar__desktopLink ${
                    isActiveLink(item.path) ? "navbar__desktopLink--active" : ""
                  }`}
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}

            <li className="navbar__desktopItem navbar__desktopItem--dropdown">
              <button
                className={`navbar__desktopLink navbar__desktopDropdownToggle ${
                  isDevelopmentActive ? "navbar__desktopLink--active" : ""
                }`}
                onClick={() =>
                  setNavbarDevelopmentOpen(!navbarDevelopmentOpen)
                }
                type="button"
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
                    className={`navbar__desktopDropdownLink ${
                      isActiveLink(item.path)
                        ? "navbar__desktopDropdownLink--active"
                        : ""
                    }`}
                    onClick={() => handleNavbarNavigate(item)}
                    type="button"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </li>

            {navbarLinks.slice(3).map((item) => (
              <li key={item.path} className="navbar__desktopItem">
                <button
                  className={`navbar__desktopLink ${
                    isActiveLink(item.path) ? "navbar__desktopLink--active" : ""
                  }`}
                  onClick={() => handleNavbarNavigate(item)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__contactButton"
            onClick={() =>
              handleNavbarNavigate({
                title: "Get In Touch",
                path: "/contact",
              })
            }
            type="button"
          >
            Get In Touch
          </button>

          <button
            className="navbar__menuButton"
            onClick={() => setNavbarMenuOpen(true)}
            type="button"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <div
        className={`navbar__overlay ${
          navbarMenuOpen ? "navbar__overlay--show" : ""
        }`}
        onClick={() => setNavbarMenuOpen(false)}
      ></div>

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
            type="button"
          >
            <FiX />
          </button>
        </div>

        <div className="navbar__mobileBody">
          {navbarLinks.slice(0, 3).map((item) => (
            <button
              key={item.path}
              className={`navbar__mobileLink ${
                isActiveLink(item.path) ? "navbar__mobileLink--active" : ""
              }`}
              onClick={() => handleNavbarNavigate(item)}
              type="button"
            >
              {item.title}
            </button>
          ))}

          <div className="navbar__mobileDropdown">
            <button
              className={`navbar__mobileLink navbar__mobileDropdownToggle ${
                isDevelopmentActive ? "navbar__mobileLink--active" : ""
              }`}
              onClick={() =>
                setNavbarDevelopmentOpen(!navbarDevelopmentOpen)
              }
              type="button"
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
                  className={`navbar__mobileDropdownLink ${
                    isActiveLink(item.path)
                      ? "navbar__mobileDropdownLink--active"
                      : ""
                  }`}
                  onClick={() => handleNavbarNavigate(item)}
                  type="button"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {navbarLinks.slice(3).map((item) => (
            <button
              key={item.path}
              className={`navbar__mobileLink ${
                isActiveLink(item.path) ? "navbar__mobileLink--active" : ""
              }`}
              onClick={() => handleNavbarNavigate(item)}
              type="button"
            >
              {item.title}
            </button>
          ))}

          <button
            className="navbar__mobileButton"
            onClick={() =>
              handleNavbarNavigate({
                title: "Get In Touch",
                path: "/contact",
              })
            }
            type="button"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;