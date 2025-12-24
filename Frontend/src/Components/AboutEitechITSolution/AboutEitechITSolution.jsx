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
        {/* IMAGE */}
        <div className={`about-image-wrapper ${isVisible ? "animate" : ""}`}>
          <div className="blob-bg"></div>
          <img src={aboutImg} alt="Team collaboration" />
        </div>

        {/* CONTENT */}
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
         

          <h2>
            Dedicated To Delivering <br />
            <span>Technology-Driven Services</span>
          </h2>

          <p>
            We deliver innovative IT solutions that empower businesses to grow,
            scale, and stay secure with a dedicated team of professionals.
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
                <span>Cyber Security</span>
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
