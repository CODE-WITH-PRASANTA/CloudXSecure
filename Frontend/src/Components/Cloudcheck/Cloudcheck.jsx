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
  { id: "cloud", label: "Cloud Solutions", icon: design3dIcon },
];

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("app");

  return (
    <section className="portfolioPro-section">
      <div className="portfolioPro-container">
        {/* HEADER */}
        <div className="portfolioPro-header">
          <span className="portfolioPro-subtitle">
            <span className="line" /> EXAMPLES OF OUR WORK <span className="line" />
          </span>
          <h2 className="portfolioPro-title">
            Check Our Latest Cloud & Digital Projects
          </h2>
        </div>

        {/* TABS */}
        <div className="portfolioPro-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`portfolioPro-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              <div className="portfolioPro-tabIcon">
                <img src={tab.icon} alt={tab.label} />
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CARD */}
        <div className="portfolioPro-card">
          <div className="portfolioPro-image">
            <img src={mainImg} alt="Project" />
          </div>

          <div className="portfolioPro-content">
            <h3>Detailing Our Cloud & Digital Projects</h3>
            <p>
              At CloudXSecure, we build secure cloud platforms,
              high-performance websites, and scalable mobile apps
              tailored to real business needs.
            </p>

            <div className="portfolioPro-features">
              <div className="feature">
                <img src={responsiveIcon} alt="" />
                Cloud & Data Analytics
              </div>

              <div className="feature">
                <img src={satisfactionIcon} alt="" />
                100% Customers Satisfaction
              </div>

              <div className="feature">
                <img src={analyticsIcon} alt="" />
                Custom App Development
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <img src={circleText} alt="" className="portfolioPro-circle" />
          <img src={phoneImg} alt="" className="portfolioPro-phone" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;