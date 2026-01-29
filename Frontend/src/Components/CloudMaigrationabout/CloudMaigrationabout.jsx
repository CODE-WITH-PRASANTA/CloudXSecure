import React from "react";
import "./CloudMaigrationabout.css";
import { FaPlay, FaPhoneAlt } from "react-icons/fa";

import heroImg from "../../assets/a4.webp"; // HERO IMAGE

export default function HeroAbout() {
  return (
    <section className="prg-hero-section">
      <div className="prg-hero-container">
        <div className="prg-hero-grid">

          {/* LEFT : HERO IMAGE */}
          <div className="prg-hero-media">
            {/* animated blob bg */}
            <div className="prg-blob-bg"></div>

            {/* shape mask */}
            <div className="prg-mask-wrap">
              <img src={heroImg} alt="Hero" className="prg-hero-img" />

              {/* YouTube button */}
              <a
                href="https://www.youtube.com/watch?v=VIDEO_ID"
                target="_blank"
                rel="noreferrer"
                className="prg-video-btn"
              >
                <FaPlay />
              </a>
            </div>
          </div>

          {/* RIGHT : CONTENT */}
          <div className="prg-hero-content">
            <span className="prg-tag">ABOUT CLOUDXSECURE</span>

            <h2 className="prg-title">
              Smart Cloud Solutions for Modern Businesses
            </h2>

            <p className="prg-desc">
             CloudXSecure delivers secure cloud services, custom web design, mobile app development, and complete cloud solutions to help businesses migrate, scale, and grow with confidence. Our expert team builds reliable digital platforms focused on performance, security, and long-term success.
            </p>

            <ul className="prg-list">
              <li>Secure Cloud Migration & Management</li>
              <li>Professional Web & App Development</li>
              <li>Scalable Infrastructure & IT Solutions</li>
            </ul>

            <div className="prg-actions">
              <button className="prg-btn-main">Explore Our Solutions</button>

              <div className="prg-call-box">
                <span className="prg-call-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="prg-call-text">Call Us Now</p>
                  <p className="prg-call-num">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
