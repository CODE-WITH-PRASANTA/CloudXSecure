import React from "react";
import "./BestITSolution.css";

import imageLarge from "../../assets/work-img1.png";
import imageSmall from "../../assets/work-img2.png";

const BestITSolution = () => {
  return (
    <section className="bestitsolution">
      <div className="bestitsolution-container">

        {/* LEFT CONTENT */}
        <div className="bestitsolution-content">
          <span className="bestitsolution-badge">
            <span className="bestitsolution-badge-icon">⚡</span>
             Best IT & Cloud Solutions Provider
          </span>

          <h1 className="bestitsolution-title">
           End-to-End Cloud, Web & App Solutions For <br />
            <span>Growing Businesses</span>
          </h1>

          <p className="bestitsolution-description">
           CloudXSecure is a trusted technology partner providing comprehensive cloud solutions, modern web design, and mobile app development services. From cloud infrastructure and security to high-performance websites and applications, we help businesses streamline operations, enhance digital experiences, and scale with confidence.
          </p>

          {/* PROGRESS CARD */}
          <div className="bestitsolution-progress-card">

            <div className="bestitsolution-progress">
              <div className="bestitsolution-progress-header">
                <span>IT Solution</span>
                <span>98%</span>
              </div>
              <div className="bestitsolution-progress-bar">
                <span className="bestitsolution-progress-fill fill-98"></span>
              </div>
            </div>

            <div className="bestitsolution-progress">
              <div className="bestitsolution-progress-header">
                <span>Devops & Automation</span>
                <span>99%</span>
              </div>
              <div className="bestitsolution-progress-bar">
                <span className="bestitsolution-progress-fill fill-99"></span>
              </div>
            </div>

            <div className="bestitsolution-progress">
              <div className="bestitsolution-progress-header">
                <span>Cloud Solution</span>
                <span>99%</span>
              </div>
              <div className="bestitsolution-progress-bar">
                <span className="bestitsolution-progress-fill fill-99"></span>
              </div>
            </div>

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
            className="bestitsolution-image bestitsolution-image-large"
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
