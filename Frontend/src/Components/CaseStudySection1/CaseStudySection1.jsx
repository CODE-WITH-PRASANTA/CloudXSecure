import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./CaseStudySection1.css";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.jpg";

const CaseStudySection1 = () => {
  return (
    <div className="case-study-container">
      {/* LEFT CARD */}
      <div className="case-study-card">
        <div className="case-study-image-wrapper">
          <img
            src={project3}
            alt="Digital SEO Marketing"
            className="case-study-image"
          />

          {/* Overlay Info */}
          <div className="case-study-info">
            <p className="case-study-category">Digital SEO Marketing</p>
            <h3 className="case-study-title">Cloud-Powered SEO Marketing</h3>
          </div>

          {/* Index Badge */}
          <div className="case-study-index">
            <span>03</span>
            <FaArrowRight className="btn-arrow" />
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="case-study-card">
        <div className="case-study-image-wrapper">
          <img
            src={project4}
            alt="Smart Technology"
            className="case-study-image"
          />

          {/* Overlay Info */}
          <div className="case-study-info">
            <p className="case-study-category">Smart Technology</p>
            <h3 className="case-study-title">Smart Cloud Technology</h3>
          </div>

          {/* Index Badge */}
          <div className="case-study-index">
            <span>04</span>
            <FaArrowRight className="btn-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection1;
