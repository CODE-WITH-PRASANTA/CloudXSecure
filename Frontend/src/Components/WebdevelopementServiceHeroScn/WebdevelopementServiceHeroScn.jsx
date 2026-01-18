import React, { useEffect } from "react";
import "./WebdevelopementServiceHeroScn.css";

import heroImg from "../../assets/banner-two-img.webp";
import shapeTop from "../../assets/banner-two-shape-4.webp";
import shapeBottom from "../../assets/banner-two-shape-3.webp";

import small1 from "../../assets/small-img-1.webp";
import small2 from "../../assets/small-img-2.webp";
import small3 from "../../assets/small-img-3.webp";

import trustpilot from "../../assets/banner-two-trustpilot-logo.webp";

const WebdevelopementServiceHeroScn = () => {
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
      { threshold: 0.25 }
    );

    items.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="wd-hero">
      {/* soft white bg layer */}
      <div className="hero-bg-layer" />

      {/* background shapes */}
      <img src={shapeTop} className="shape-top floating" alt="" />
      <img src={shapeBottom} className="shape-bottom rotate" alt="" />

      <div className="wd-container">
        {/* LEFT IMAGE */}
        <div className="wd-left reveal from-left">
          <img src={heroImg} className="hero-img floating" alt="hero" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="wd-right reveal from-right">
          <span className="tag">WEB DEVELOPMENT SERVICE</span>

          <h1>
            Boost <span>Your Business</span> With Our <br />
            Custom Web Development Solutions <br />
            For <span>Long-Term Success</span>
          </h1>

          <p>
            CloudXsecure delivers high-performance, secure, and scalable web 
            development services designed to strengthen your online presence. 
            Our expert team builds responsive, SEO-friendly websites that enhance 
            user experience, improve brand visibility, and accelerate digital 
            growth. 
          </p>

          {/* Trustpilot */}
          <div className="trustpilot reveal from-bottom">
            <div className="avatars">
              <img src={small1} alt="" />
              <img src={small2} alt="" />
              <img src={small3} alt="" />
            </div>

            <div className="trust-content">
              <img src={trustpilot} alt="trustpilot" /> <br />
              <span>5.0 Excellent</span>
              <small>Reviews 4,170</small>
            </div>

            {/* Button */}
            <div className="btn-wrap reveal from-bottom">
              <button className="hero-btn">Discover More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebdevelopementServiceHeroScn;
