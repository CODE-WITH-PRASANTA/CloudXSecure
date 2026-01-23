import React, { useEffect, useRef, useState } from "react";
import "./BestITSolution.css";

import imageLarge from "../../assets/work-img1.png";
import imageSmall from "../../assets/work-img2.png";

const progressData = [
  { label: "IT Solution", value: 98 },
  { label: "Devops & Automation", value: 99 },
  { label: "Cloud Solution", value: 99 },
];

const BestITSolution = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState(progressData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;

    progressData.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1200;
      const incrementTime = 15;
      const step = Math.ceil(end / (duration / incrementTime));

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
      }, incrementTime);
    });
  }, [animate]);

  return (
    <section className="bestitsolution" ref={sectionRef}>
      <div className="bestitsolution-container">

        {/* LEFT CONTENT */}
        <div className="bestitsolution-content">
          <span className="bestitsolution-badge">
            ⚡ Best IT & Cloud Solutions Provider
          </span>

          <h1 className="bestitsolution-title">
            End-to-End Cloud, Web & App Solutions For <br />
            <span>Growing Businesses</span>
          </h1>

          <p className="bestitsolution-description">
            CloudXSecure is a trusted technology partner providing comprehensive cloud
            solutions, modern web design, and mobile app development services.
          </p>

          {/* PROGRESS CARD */}
          <div className="bestitsolution-progress-card">
            {progressData.map((item, index) => (
              <div className="bestitsolution-progress" key={index}>
                <div className="bestitsolution-progress-header">
                  <span>{item.label}</span>
                  <span>{counts[index]}%</span>
                </div>
                <div className="bestitsolution-progress-bar">
                  <span
                    className="bestitsolution-progress-fill"
                    style={{
                      width: animate ? `${item.value}%` : "0%",
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="bestitsolution-btn">
            Discover Our Solutions →
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="bestitsolution-images">
          <img
            src={imageLarge}
            alt="IT team discussion"
            className="bestitsolution-image"
          />
          <img
            src={imageSmall}
            alt="Team collaboration"
            className="bestitsolution-image bestitsolution-image-small"
          />
        </div>

      </div>
    </section>
  );
};

export default BestITSolution;
