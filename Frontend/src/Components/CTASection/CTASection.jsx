import React, { useEffect, useRef, useState } from "react";
import "./CTASection.css";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";
import girl from "../../assets/cta-img1.webp";

const CTASection = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`cta-wrapper ${show ? "cta-show" : ""}`}
    >
      <div className="cta-container">
        {/* LEFT CONTENT */}
        <div className="cta-content">
          <h1 className="cta-title delay-1">
            Transform Your IT Today–
            <br />
            Speak with Our Experts!
          </h1>

          <p className="cta-text delay-2">
            Ready to take your business to the next level with cutting-edge IT
            solutions? Our team is here to help you transform. Get personalized
            consultation and accelerate your digital transformation journey.
          </p>

          <div className="cta-form delay-3">
            <input
              type="email"
              placeholder="Enter your business email"
              className="cta-input"
            />
            <button className="cta-btn">
              Get Free Consultation <HiArrowUpRight />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING TAGS */}
        <div className="cta-visual delay-4">
          <img src={girl} alt="IT Expert" className="cta-girl" />

          <div className="cta-badges">
            <span className="badge badge-1">
              <FiCheckCircle /> IT Solution Services
            </span>
            <span className="badge badge-2">
              <FiCheckCircle /> Cyber Security Services
            </span>
            <span className="badge badge-3">
              <FiCheckCircle /> Software Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
