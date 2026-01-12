import React, { useEffect } from "react";
import "./Devopshero.css";

import bgImg from "../../assets/devops-hero-bg7.webp";
import heroImg from "../../assets/devops-hero7-image.webp";

import shape1 from "../../assets/devops-hero7-shape1.webp";
import shape2 from "../../assets/devops-hero7-shape2.webp";
import shape3 from "../../assets/devops-hero7-shape3.webp";
import shape7 from "../../assets/devops-hero7-shape7.webp";

const DevopsHero = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="devops-hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="devops-container">
        {/* LEFT CONTENT */}
        <div className="devops-content">
          <span className="hero-tag reveal">Our Integrated IT Solutions</span>

          <h1 className="hero-title reveal">
            Harness Technology <br />
            Drive Growth with <br />
            Our IT Solutions
          </h1>

          <p className="hero-desc reveal">
            Welcome to Your Company Teching where innovative IT
            solutions meet your business needs head-on.
          </p>

          <div className="hero-btns reveal">
            <a href="#" className="btn primary">
              Free Consultation <span>↗</span>
            </a>
            <a href="#" className="btn secondary">
              Discover More <span>↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="devops-image">
          <img src={heroImg} alt="Hero" className="hero-main" />

          {/* FLOATING ITEMS */}
          <img src={shape7} className="float-item item-1" alt="" />
          <img src={shape2} className="float-item item-2" alt="" />
          <img src={shape3} className="float-item item-3" alt="" />

          {/* ROTATED BOTTOM SHAPE */}
          <img src={shape1} className="rotate-shape" alt="" />
        </div>
      </div>
    </section>
  );
};

export default DevopsHero;
