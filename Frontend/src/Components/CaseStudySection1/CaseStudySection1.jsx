import React from "react";
import { FaArrowRight } from "react-icons/fa"; // arrow icon
import "./CaseStudySection1.css";
import project3 from "../../assets/project3.png";

const CaseStudySection1 = () => {
  return (
    <div className="case-study-container">
      {/* LEFT SIDE */}
      <div className="case-study-left">
        <div className="case-study-card">
          {/* IMAGE WRAPPER WITH GRADIENT OVERLAY */}
          <div className="case-study-image-wrapper">
            <img
              src={project3}
              alt="Digital SEO Marketing"
              className="case-study-image"
            />

            {/* OVERLAY TEXT */}
            <div className="case-study-info">
              <p className="case-study-category">Technology</p>
              <h3 className="case-study-title">Digital SEO Marketing</h3>
            </div>

            {/* INDEX BADGE WITH ARROW */}
            <div className="case-study-index">
              <span>01</span>
              <FaArrowRight className="btn-arrow" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (optional or future use) */}
      <div className="case-study-right"></div>
    </div>
  );
};

export default CaseStudySection1;
