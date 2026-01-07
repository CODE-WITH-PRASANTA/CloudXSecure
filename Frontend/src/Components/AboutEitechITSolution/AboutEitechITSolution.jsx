import React, { useEffect, useRef, useState } from "react";
import "./AboutEitechITSolution.css";
import aboutImg from "../../assets/about-img8.png";

const AboutEitechITSolution = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-container">

        {/* IMAGE + SVG BLOB */}
        <div className={`about-image-wrapper ${isVisible ? "animate" : ""}`}>
          <svg
            className="blob-bg"
            viewBox="0 0 300 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="imagewave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b6cff" />
                <stop offset="100%" stopColor="#5aa2ff" />
              </linearGradient>
            </defs>

            <path
              fill="url(#imagewave)"
              d="
              M 45.7476 177.019
              c -8.4344 -14.8987 -13.9383 -23.0749 -15.4476 -37.7193
              c -3.01996 -19.2154 5.52442 -40.2824 24.3572 -55.2724
              c 23.8186 -20.6649 29.0261 -14.498 58.0901 -24.4874
              C 137.574 50.2891 148.696 44.2975 173 43.4
              c 14.3733 1.3241 31.401 0.0877431 53.6248 16.9492
              c 22.8128 17.3338 24.6759 34.583 27.9443 46.1058
              c 5.03084 22.6055 -3.8026 36.316 -4.03089 51.7691
              c -0.672984 18.1036 4.08009 25.0608 -1.63822 38.4759
              c -7.68583 15.2267 -21.4357 23.1824 -39.3749 29.2058
              c -19.7434 5.8897 -22.8637 -6.02032 -44.5119 -0.890117
              c -27.7708 7.54241 -49.7485 33.8254 -72.8132 25.5843
              c -16.483 -7.09676 -19.5554 -28.3205 -29.2463 -42.6202
              C 54.3858 193.698 54.6486 193.218 45.7476 177.019 Z
              "
            />
          </svg>

          <img src={aboutImg} alt="Team collaboration" />
        </div>

        {/* CONTENT */}
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <h2>
            Dedicated to Delivering  <br />
            <span>Secure, Scalable & Technology-Driven Solutions</span>
          </h2>

          <p>
           At CloudXSecure, we specialize in delivering end-to-end cloud solutions, modern web design, and mobile app development services that help businesses scale securely in a digital-first world. Our expert team combines innovation, security, and industry best practices to build reliable cloud infrastructure, intuitive digital experiences, and high-performance applications tailored to your business needs.
          </p>

          <div className={`progress-group ${isVisible ? "animate" : ""}`}>
            <div className="progress-item">
              <div className="progress-label">
                <span>IT Solution</span>
                <span>98%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: "98%" }}></span>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Cloud Computing</span>
                <span>99%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: "99%" }}></span>
              </div>
            </div>
          </div>

          <button className="about-btn">
            Request A Free Consultation <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutEitechITSolution;
