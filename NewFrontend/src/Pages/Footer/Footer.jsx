import React from "react";
import "./Footer.css";
import logo from "../../assets/cloud-Logo.png";
import footerBg from "../../assets/footer-bg.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FiPhoneCall, FiSend } from "react-icons/fi";

// ✅ FIXED ICON
import { HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  const footerUsefulLinks = [
    "About Company",
    "Meet Our Team",
    "Latest Blog",
    "Contact Us",
    "Testimonials",
  ];

  const footerServices = [
    "IT Management",
    "Digital Marketing",
    "Web Development",
    "App Development",
    "Digital Marketing",
  ];

  const footerSocialLinks = [
    { id: 1, icon: <FaFacebookF />, link: "#" },
    { id: 2, icon: <FaTwitter />, link: "#" },
    { id: 3, icon: <FaLinkedinIn />, link: "#" },
    { id: 4, icon: <FaInstagram />, link: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer__wrapper">

        {/* TOP CTA */}
        <div className="footer__cta">
          <div className="footer__ctaLeft">
            <div className="footer__ctaIconWrap">
              {/* ✅ FIXED ICON */}
              <HiOutlinePhone className="footer__ctaIcon" />
            </div>

            <h2 className="footer__ctaTitle">
              Elevating Customer Experience.
            </h2>
          </div>

          <div className="footer__ctaRight">
            <div className="footer__callIconWrap">
              <FiPhoneCall className="footer__callIcon" />
            </div>

            <a href="tel:+44920090505" className="footer__callButton">
              +91 76664 88777            </a>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div
          className="footer__main"
          style={{ backgroundImage: `url(${footerBg})` }}
        >
          <div className="footer__overlay"></div>

          <div className="footer__content">
            <div className="footer__grid">

              {/* BRAND */}
              <div className="footer__column footer__column--brand">
                <a href="/" className="footer__logoWrap">
                  <img src={logo} alt="Logo" className="footer__logo" />
                </a>

                <p className="footer__description">
                  Globally monetize plug-and-play data it solu monotonecatlly
                  disseminate oriented busine multifunctional mind design.
                </p>

                <div className="footer__socials">
                  {footerSocialLinks.map((item) => (
                    <a key={item.id} href={item.link} className="footer__socialLink">
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div className="footer__column">
                <h3 className="footer__heading">Useful Links</h3>
                <ul className="footer__list">
                  {footerUsefulLinks.map((item, index) => (
                    <li key={index} className="footer__listItem">
                      <a href="/" className="footer__listLink">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}
              <div className="footer__column">
                <h3 className="footer__heading">Services.</h3>
                <ul className="footer__list">
                  {footerServices.map((item, index) => (
                    <li key={index} className="footer__listItem">
                      <a href="/" className="footer__listLink">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NEWSLETTER */}
              <div className="footer__column footer__column--newsletter">
                <h3 className="footer__heading">Newsletter</h3>

                <p className="footer__description footer__description--newsletter">
                  Globally monetize plug-and-play data it solu monotonecatlly
                  disseminate oriented busine multifunctional mind design.
                </p>

                <form className="footer__newsletterForm">
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    className="footer__newsletterInput"
                  />
                  <button className="footer__newsletterButton">
                    <FiSend />
                  </button>
                </form>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="footer__bottom">
              <p className="footer__copyright">
                ©  2025 CloudXsecure Trust. Crafted with ❤️ by PR Webstock
              </p>

              <div className="footer__bottomLinks">
                <a href="/" className="footer__bottomLink">Privacy Policy</a>
                <a href="/" className="footer__bottomLink">Supports</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;