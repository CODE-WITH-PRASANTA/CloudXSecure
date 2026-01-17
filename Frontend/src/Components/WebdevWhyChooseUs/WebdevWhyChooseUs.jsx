import React, { useEffect, useRef } from "react";
import "./WebdevWhyChooseUs.css";

import personImg from "../../assets/why-choose-three-img-1.webp";
import { FaCheck } from "react-icons/fa";

const WhyChooseUsThree = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".wc3-reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wc3-section" ref={sectionRef}>
      <div className="wc3-container">
        {/* LEFT CONTENT */}
        <div className="wc3-left">
          <span className="wc3-subtitle wc3-reveal">WHY CHOOSE US</span>

          <h2 className="wc3-title wc3-reveal">
            Why Businesses Trust <br />
            CloudXSecure <span>Web Development?</span>
          </h2>

          <p className="wc3-desc wc3-reveal">
            CloudXSecure delivers secure, scalable, and high-performance web
            solutions designed to support growth and long-term success. We blend
            innovation with reliability to create digital experiences that truly
            make an impact.
          </p>

          {/* FEATURES */}
          <div className="wc3-features">
            {[
              "Reliability and Consistency",
              "Quality Workmanship",
              "Commitment to Safety",
              "Expertise and Experience",
            ].map((text, i) => (
              <div className="wc3-feature wc3-reveal" key={i}>
                <span className="wc3-check">
                  <FaCheck />
                </span>
                {text}
              </div>
            ))}
          </div>

          {/* BULLET POINTS */}
          <ul className="wc3-points">
            {[
              "We build fully optimized, SEO-ready websites engineered for speed and growth.",
              "24/7 monitoring and maintenance to keep your website secure and performing smoothly.",
              "Modern UI/UX research and design practices to boost engagement and conversions.",
            ].map((item, i) => (
              <li className="wc3-reveal" key={i}>
                <FaCheck /> {item}
              </li>
            ))}
          </ul>

          <button className="wc3-btn wc3-reveal">
            Get Started <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="wc3-right wc3-reveal">
          <img src={personImg} alt="Why Choose Us" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsThree;
