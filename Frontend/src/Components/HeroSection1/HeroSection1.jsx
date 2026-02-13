import React from "react";
import {
  FaShieldAlt,
  FaHandshake,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import "./heroSection1.css";
import heroImg from "../../assets/marketimage.png";

const HeroSection1 = () => {
  return (
    <section className="hero-section1">
      <div className="hero-container1">
        
        {/* Left Content */}
        <div className="hero-content1">
          <span className="hero-badge1">Cloud Monitoring & Digital Solutions</span>

          <h1>
            Power Your Business with Secure Cloud &<br />
            <span>Smart Digital Solutions </span>
          </h1>

          <p>
            CloudXSecure delivers scalable cloud services, modern web design, custom app development, and end-to-end cloud solutions. We help businesses optimize performance, enhance security, and accelerate growth with reliable, future-ready technology.
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
          <h4>Secure Cloud Infrastructure</h4>
          <p>Scalable, secure cloud solutions built to boost performance and protect your business.</p>
        </div>

        <div className="feature-box1">
          <FaHandshake className="feature-icon1" />
          <h4>Seamless Digital Development</h4>
          <p>Professional web and app design that delivers engaging, high-impact digital experiences.</p>
        </div>

        <div className="feature-box1">
          <FaBolt className="feature-icon1" />
          <h4>Faster Deployment & Support</h4>
          <p>Rapid delivery with continuous monitoring and expert cloud support.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
