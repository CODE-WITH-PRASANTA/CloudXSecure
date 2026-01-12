import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompanySection.css";

import companyImage from "../../assets/company.png";      
import handIcon from "../../assets/hand.png";          
import diamondIcon from "../../assets/dimondshape.png";

const CompanySection = () => {
  const navigate = useNavigate();

  return (
    <section className="company-section">
      {/* ===== TOP CONTENT ===== */}
      <div className="company-content">
        <div className="company-header">
          <span className="company-subtitle">← ABOUT COMPANY →</span>
          <img src={handIcon} alt="hand icon" className="company-hand-icon" />
        </div>

        <h2 className="company-title">
          Seamless IT For Your Business <br /> Boosting Your Growth.
        </h2>
        <p className="company-description">
          We don't believe in a one-size-fit-all approach. Our services are
          carefully customized to suit your specific needs, ensuring you achieve
          your goals.
        </p>

        {/* ✅ Navigate to About Page */}
        <div className="button-wrapper">
        <button className="company-btn" onClick={() => navigate("/about")}>
          ABOUT MORE <span className="arrow">→</span>
        </button>
        </div>
      </div>

      {/* ===== BOTTOM IMAGE SECTION ===== */}
      <div className="company-image-wrapper">
        <img
          src={companyImage}
          alt="Our company team"
          className="company-main-image"
        />

        <div className="company-stats">
          <div className="stat-item">
            <h3>20.5k</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat-item">
            <h3>100.5k</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>150.5k</h3>
            <p>Team Members</p>
          </div>
        </div>

        <img
          src={diamondIcon}
          alt="diamond icon"
          className="company-diamond-icon"
        />
      </div>
    </section>
  );
};

export default CompanySection;
