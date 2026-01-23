import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import "./HeroSection1.css";
import heroImg from "../../assets/marketimage.png";

const HeroSection1 = () => {
  return (
    <section className="hero-section1">
      <div className="hero-container1">
        {/* Left Content */}
        <div className="hero-content1">
          <span className="hero-badge1">INSURANCE AGENCY</span>

          <h1>
            Enjoy Life With <br />
            <span>Safety Insurance</span>
          </h1>

          <p>
            Agilos helps you convert your data into a strategic asset and get
            top-notch business insights with complete peace of mind.
          </p>

          <button className="hero-btn1">
            Discover More <FaArrowRight />
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-image1">
          <div className="hero-bg-shape1"></div>
          <img src={heroImg} alt="Happy Family" />
        </div>
      </div>

      {/* Bottom Feature Boxes */}
      <div className="hero-features1">
        <div className="feature-box1">
          <FaShieldAlt className="feature-icon1" />
          <h4>More Coverage</h4>
          <p>Comprehensive plans that protect you in every situation.</p>
        </div>

        <div className="feature-box1">
          <FaHandshake className="feature-icon1" />
          <h4>Less Hassle</h4>
          <p>Easy documentation and quick claim settlement process.</p>
        </div>

        <div className="feature-box1">
          <FaBolt className="feature-icon1" />
          <h4>Faster Benefits</h4>
          <p>Instant approvals with faster insurance benefits.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
