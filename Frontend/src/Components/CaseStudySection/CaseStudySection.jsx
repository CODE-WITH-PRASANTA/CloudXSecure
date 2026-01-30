import React from "react";
import "./CaseStudySection.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import images from assets
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

const CaseStudySection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section className="case-section">
      {/* ===== HEADER ===== */}
      <div className="case-header">
        <div className="case-header-left">
          <div className="case-subtitle">
            <FaArrowLeft className="arrow" />
            <span>CASE STUDY</span>
            <FaArrowRight className="arrow" />
          </div>
          <h2 className="case-title">
            Your Roadmap to Digital Success  <br /> with CloudXSecure
          </h2>
        </div>

        <button className="view-all-btn" onClick={handleNavigate}>
          VIEW ALL PROJECT <FaArrowRight className="btn-arrow" />
        </button>
      </div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="case-cards">
        {/* Card 1 */}
        <div className="case-card">
          <div className="case-image-wrapper">
            <img src={project1} alt="Web Development" className="case-image" />
          </div>
          <div className="case-info">
            <p className="case-category">Technology</p>
            <h3 className="case-name">Modern Web Development</h3>
          </div>
          <div className="case-index">
            <span>01</span>
            <FaArrowRight />
          </div>
        </div>

        {/* Card 2 */}
        <div className="case-card">
          <div className="case-image-wrapper">
            <img src={project2} alt="Product Design" className="case-image" />
          </div>
          <div className="case-info">
            <p className="case-category">Graphics</p>
            <h3 className="case-name">UI/UX Product Design</h3>
          </div>
          <div className="case-index">
            <span>02</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
