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
            <span className="prg-tag">ABOUT EXTECH</span>

            <h2 className="prg-title">
              We Can Clients With The About Solution
            </h2>

            <p className="prg-desc">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </p>

            <ul className="prg-list">
              <li>Branding and design Identity</li>
              <li>Website Marketing Solutions</li>
              <li>Unlimited Download Data</li>
            </ul>

            <div className="prg-actions">
              <button className="prg-btn-main">Explore More</button>

              <div className="prg-call-box">
                <span className="prg-call-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="prg-call-text">Call Us Now</p>
                  <p className="prg-call-num">+208-555-0112</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
