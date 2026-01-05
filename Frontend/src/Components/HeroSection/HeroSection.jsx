import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import heroImg from "../../assets/hero-img6.png";

const HeroSection = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = "";

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  return (
    <section className="hero">
      <div className="particles" ref={particlesRef}></div>

      <div className="hero-container">
        {/* CONTENT FIRST */}
        <div className="hero-content">
          <span className="hero-badge">🚀 CREATE YOUR DREAM PROJECT WITH US</span>

          <h1 className="hero-title">
            Advanced IT Solutions For <span>Modern Businesses</span>
          </h1>

          <p className="hero-description">
            CloudXSecure is a trusted technology partner delivering end-to-end cloud solutions, modern web design, mobile app development, and enterprise cloud services. We help startups, SMEs, and enterprises build secure digital products, migrate to the cloud, and scale efficiently with future-ready technology.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">
              Explore Our Solutions <span>↗</span>
            </button>

            <button className="hero-btn secondary">
              <span className="play">▶</span> Play Video
            </button>
          </div>
        </div>

        {/* IMAGE SECOND */}
        <div className="hero-visual">
          <img src={heroImg} alt="Hero" className="hero-img" />

          <div className="floating-card users">
            <h4>Active Users</h4>
            <strong>1.2K+</strong>
            <span className="growth">↑ 21.09% Growth</span>
          </div>

          <div className="floating-card services">
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