import React from "react";
import "./AppDevelopmentHero.css";
import heroImg from "../../assets/app-hero.png";

const AppDevelopmentHero = () => {
  return (
    <section className="app-development-hero">
      {/* Base background pattern */}
      <div className="app-development-bg-steps"></div>

      {/* Decorative gradient shapes */}
      <div className="app-development-bg-shape shape-1"></div>
      <div className="app-development-bg-shape shape-2"></div>

      {/* Floating dots */}
      <span className="app-development-shape circle"></span>
      <span className="app-development-shape circle small"></span>
      <span className="app-development-shape square"></span>

      {/* Main Content */}
      <div className="app-development-hero-container">
        <div className="app-development-hero-content">
          <span className="app-development-badge">
            BEST IT SOLUTION SERVICE
          </span>

          <h2 className="app-development-title">
            Modernize Your Business <br />
            With <span>Secure & Scalable IT Solutions.</span>
          </h2>

          <p className="app-development-description">
            CloudXSecure delivers reliable, secure, and scalable IT solutions designed to help businesses grow faster, operate smarter, and stay protected in a digital-first world. 
          </p>

          <div className="app-development-buttons">
            <button className="app-development-btn primary">
              Discover More
            </button>
            <button className="app-development-btn secondary">
              Let’s Talk
            </button>
          </div>
        </div>

        <div className="app-development-hero-image">
          <img src={heroImg} alt="App Development" />
          <button className="app-development-play-btn">▶</button>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentHero;
