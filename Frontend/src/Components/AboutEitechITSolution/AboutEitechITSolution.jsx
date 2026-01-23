import React, { useEffect, useRef, useState } from "react";
import "./AboutEitechITSolution.css";
import aboutImg from "../../assets/about-img8.png";

const progressData = [
  { label: "IT Solution", value: 98 },
  { label: "Cloud Computing", value: 99 },
];

const AboutEitechITSolution = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(progressData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* 🔥 Count Animation */
  useEffect(() => {
    if (!isVisible) return;

    progressData.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1200;
      const stepTime = 16;
      const step = Math.ceil(end / (duration / stepTime));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, stepTime);
    });
  }, [isVisible]);

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-container">

        {/* IMAGE */}
        <div className={`about-image-wrapper ${isVisible ? "animate" : ""}`}>
          {/* SVG + Image stays same */}
          <img src={aboutImg} alt="Team collaboration" />
        </div>

        {/* CONTENT */}
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <h2>
            Dedicated to Delivering <br />
            <span>Secure, Scalable & Technology-Driven Solutions</span>
          </h2>

          <p>
            At CloudXSecure, we specialize in delivering end-to-end cloud solutions,
            modern web design, and mobile app development services.
          </p>

          {/* 🔥 PROGRESS */}
          <div className={`progress-group ${isVisible ? "animate" : ""}`}>
            {progressData.map((item, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-label">
                  <span>{item.label}</span>
                  <span>{counts[index]}%</span>
                </div>
                <div className="progress-bar">
                  <span
                    style={{
                      width: isVisible ? `${item.value}%` : "0%",
                    }}
                  ></span>
                </div>
              </div>
            ))}
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
