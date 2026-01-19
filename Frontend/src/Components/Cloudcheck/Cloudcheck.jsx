import React, { useState } from "react";
import "./Cloudcheck.css";

/* TAB ICONS */
import dataIcon from "../../assets/pp6.webp";
import uiuxIcon from "../../assets/pp7.webp";
import appIcon from "../../assets/pp8.webp";
import wpIcon from "../../assets/pp9.webp";
import design3dIcon from "../../assets/pp6.webp";

/* CONTENT IMAGES */
import mainImg from "../../assets/pp1.webp";
import phoneImg from "../../assets/pp2.webp";
import circleText from "../../assets/pp14.png";

/* FEATURE ICONS */
import responsiveIcon from "../../assets/pp3.webp";
import satisfactionIcon from "../../assets/pp4.webp";
import analyticsIcon from "../../assets/pp5.webp";

const tabs = [
  { id: "data", label: "Data Analysis", icon: dataIcon },
  { id: "uiux", label: "UI/UX Designing", icon: uiuxIcon },
  { id: "app", label: "App Development", icon: appIcon },
  { id: "wp", label: "Wp Development", icon: wpIcon },
  { id: "3d", label: "3D Design Solution", icon: design3dIcon },
];

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("app");

  return (
    <section className="pf-section">
      <div className="pf-container">

        {/* HEADER */}
        <div className="pf-header">
          <span className="pf-subtitle">
            <span className="pf-line" /> EXAMPLES OF OUR WORK <span className="pf-line" />
          </span>
          <h2 className="pf-title">Check Our Latest Portfolios</h2>
        </div>

        {/* TABS */}
        <div className="pf-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pf-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="pf-tab-icon">
                <img src={tab.icon} alt={tab.label} />
              </span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        <div className="pf-card">

          {/* LEFT IMAGE */}
          <div className="pf-image-wrap">
            <img src={mainImg} alt="Portfolio" className="pf-main-img" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="pf-content">

            <h3>Detailing Of Our Project</h3>
            <p>
              We deliver well-structured digital projects built on practical learning, strong technical foundations, and real business needs. Every project follows a clear process focused on performance, usability, and long-term value rather than short-term trends.
            </p>

            <div className="pf-features">
              <div className="pf-feature">
                <img src={responsiveIcon} alt="" />
                <span>Responsive Website</span>
              </div>

              <div className="pf-feature">
                <img src={satisfactionIcon} alt="" />
                <span>100% Customers Satisfaction</span>
              </div>

              <div className="pf-feature">
                <img src={analyticsIcon} alt="" />
                <span>Big Data & Analytics</span>
              </div>
            </div>
          </div>

          {/* FLOATING CIRCLE TEXT */}
          <img
            src={circleText}
            alt="Explore More"
            className="pf-circle-text"
          />

          {/* HALF MOBILE IMAGE */}
          <img
            src={phoneImg}
            alt="Mobile App"
            className="pf-phone-img"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
