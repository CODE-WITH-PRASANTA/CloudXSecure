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

  {/* ===== TOP CONTENT ROW ===== */}
  <div className="company-content">

    <div className="company-left">
      <div className="company-header">
        <span className="company-subtitle">← ABOUT COMPANY →</span>
        <img src={handIcon} alt="hand icon" className="company-hand-icon" />
      </div>

      <h2 className="company-title">
        Seamless Cloud & Digital Solutions <br /> for Growing Businesses.
      </h2>

      <p className="company-description">
        CloudXSecure delivers secure cloud services, modern web design, powerful app development, and complete cloud solutions to help businesses scale faster. Our expert team builds reliable, high-performance digital platforms tailored to your goals—so you can focus on growth while we handle your technology.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <div className="company-right">
      <button className="company-btn" onClick={() => navigate("/about")}>
        ABOUT MORE <span className="arrow">→</span>
      </button>
    </div>

  </div>

  {/* ===== IMAGE ===== */}
  <div className="company-image-wrapper">

    <img src={companyImage} alt="Our company team" className="company-main-image" />

    {/* FLOATING STATS */}
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

    <img src={diamondIcon} alt="diamond" className="company-diamond-icon" />

  </div>

</section>

  );
};

export default CompanySection;
