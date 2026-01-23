import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import heroImg from "../../assets/hero-img6.png";

const HeroSection = () => {
  const cxParticlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (!cxParticlesRef.current) return;
      cxParticlesRef.current.innerHTML = "";

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "cx-hero-particle";
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        cxParticlesRef.current.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  return (
    <section className="cx-hero-section">
      <div className="cx-hero-particles" ref={cxParticlesRef}></div>

      <div className="cx-hero-container">
        {/* CONTENT */}
        <div className="cx-hero-content">
          <span className="cx-hero-badge">
            🚀 CREATE YOUR DREAM PROJECT WITH US
          </span>

          <h1 className="cx-hero-title">
            Advanced IT Solutions For <span>Modern Businesses</span>
          </h1>

          <p className="cx-hero-description">
            CloudXSecure is a trusted technology partner delivering end-to-end
            cloud solutions, modern web design, mobile app development, and
            enterprise cloud services.
          </p>

          <div className="cx-hero-actions">
            <button className="cx-hero-btn cx-hero-btn-primary">
              Explore Our Solutions <span>↗</span>
            </button>

            <button className="cx-hero-btn cx-hero-btn-secondary">
              <span className="cx-hero-play">▶</span> Play Video
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="cx-hero-visual">
          <img src={heroImg} alt="Hero" className="cx-hero-image" />

          <div className="cx-hero-float-card cx-users-card">
            <h4>Active Users</h4>
            <strong>1.2K+</strong>
            <span className="cx-hero-growth">↑ 21.09% Growth</span>
          </div>

          <div className="cx-hero-float-card cx-services-card">
            <h4>Premium Services</h4>
            <p>Enterprise IT Solutions</p>
            <p>Advanced Cyber Security</p>
            <p>Cloud Infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
