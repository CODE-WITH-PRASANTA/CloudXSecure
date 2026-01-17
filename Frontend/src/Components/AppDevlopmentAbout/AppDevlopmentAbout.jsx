import React from "react";
import "./AppDevlopmentAbout.css";

import {
  FaTrophy,
  FaCheckCircle,
  FaPlay,
  FaUsers
} from "react-icons/fa";

import mainImg from "../../assets/about-main-img-2.jpg";
import smallImg from "../../assets/about-one-img-1.jpg";
import avatar from "../../assets/about-one-client-img-1-1.jpg";

const AppDevlopmentAbout = () => {
  return (
    <section className="app-about">

      {/* BACKGROUND SHAPES */}
      <span className="about-shape shape-1"></span>
      <span className="about-shape shape-2"></span>
      <span className="about-shape shape-3"></span>

      <div className="app-about-container">

        {/* LEFT CONTENT */}
        <div className="app-about-content">
          <span className="app-about-tag">ABOUT US</span>

          <h2 className="app-about-title">
            Boost Business with Our <br />
            Innovative <span>IT Solutions</span>
          </h2>

          <p className="app-about-desc">
            At CloudXSecure, we deliver secure, scalable, and business-focused IT solutions that help organizations grow with confidence. Our expertise in cloud services, cybersecurity, and IT infrastructure ensures reliable performance and strong data protection.
          </p>

          {/* FEATURE 1 */}
          <div className="app-about-feature">
            <div className="icon">
              <FaTrophy />
            </div>
            <div>
              <h4>Award-Winning Company</h4>
              <p>
                We provide trusted IT and cybersecurity services designed to improve efficiency, reduce risks, and support long-term business growth.
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="app-about-feature">
            <div className="icon">
              <FaCheckCircle />
            </div>
            <div>
              <h4>Certified Company</h4>
              <p>
                Our certified professionals follow industry standards to deliver compliant, secure, and high-performance IT solutions.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="app-about-footer">
            <button className="app-about-btn">
              Learn More →
            </button>

            <div className="app-about-author">
              <img src={avatar} alt="CEO" />
              <div>
                <strong>Adam Smith</strong>
                <span>CEO, Itzone</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="app-about-images">
          <div className="img-box large">
            <img src={mainImg} alt="About" />
            <button className="play-btn">
              <FaPlay />
            </button>
          </div>

          <div className="img-box small">
            <img src={smallImg} alt="Team" />
          </div>

          {/* EXPERIENCE */}
          <div className="experience-box">
            <h3>25</h3>
            <p>Years of Experience</p>
          </div>

          {/* CLIENTS */}
          <div className="clients-box">
            <FaUsers className="clients-icon" />
            <div className="avatars">
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
              <span>+</span>
            </div>
            <p>120K Satisfied Client</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppDevlopmentAbout;
