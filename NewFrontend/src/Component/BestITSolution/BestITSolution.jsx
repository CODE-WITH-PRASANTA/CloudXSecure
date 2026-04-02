import React, { useEffect, useRef, useState } from "react";
import "./BestITSolution.css";

import imageLarge from "../../assets/work-img1.png";
import imageSmall from "../../assets/work-img2.webp";

const progressData = [
  { label: "IT Solutions Expertise", value: 98 },
  { label: "DevOps & Automation Efficiency", value: 99 },
  { label: "Cloud Infrastructure & Security", value: 99 },
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
    <section
      className="bestitsolution"
      id="best-it-solution"
      ref={sectionRef}
    >
      <div className="bestitsolution-container">

        {/* LEFT CONTENT */}
        <div className="bestitsolution-content">

          {/* SEO BADGE */}
          <span className="bestitsolution-badge">
            ⚡ CloudXsecure – Trusted IT & Cloud Solutions Partner
          </span>

          {/* SEO HEADING */}
          <h1 className="bestitsolution-title">
            Secure, Scalable & High-Performance IT Solutions <br />
            <span>For Modern Growing Businesses</span>
          </h1>

          {/* SEO DESCRIPTION */}
          <p className="bestitsolution-description">
            At CloudXsecure, we help businesses build a strong digital foundation
            with reliable cloud infrastructure, custom web applications, and
            secure mobile solutions. Our team focuses on performance, data
            protection, and long-term scalability so you can operate with
            confidence in a rapidly evolving digital environment.
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

          {/* CTA */}
          <a href="#services" className="bestitsolution-btn">
            Explore CloudXsecure Services →
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="bestitsolution-images">
          <img
            src={imageLarge}
            alt="CloudXsecure IT experts working on secure cloud infrastructure solutions"
            className="bestitsolution-image"
          />
          <img
            src={imageSmall}
            alt="CloudXsecure team collaborating on DevOps automation and application development"
            className="bestitsolution-image bestitsolution-image-small"
          />
        </div>

      </div>
    </section>
  );
};

export default BestITSolution;