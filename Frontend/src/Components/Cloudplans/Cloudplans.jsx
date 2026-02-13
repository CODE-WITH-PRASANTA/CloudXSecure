import React, { useState } from "react";
import "./Cloudplans.css";

import cloudImg from "../../assets/pa1.webp";
import curveArrow from "../../assets/pa2.webp";
import handImg from "../../assets/pa3.webp";
import diamondImg from "../../assets/pa4.webp";

import { FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";

const pricingData = {
  monthly: "$49",
  yearly: "$36",
};

const Cloudplans = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="pricingPro-section">

      {/* Decor */}
      <img src={diamondImg} alt="" className="pricingPro-diamond" />
      <img src={handImg} alt="" className="pricingPro-hand" />

      <div className="pricingPro-container">

        {/* HEADER */}
        <div className="pricingPro-header">
          <span className="pricingPro-badge">OUR PRICING</span>
          <h2 className="pricingPro-title">
            CloudXSecure Regular Plan
          </h2>

          <div className="pricingPro-toggleWrap">

            <div className="pricingPro-toggle">
              <button
                className={activeTab === "monthly" ? "active" : ""}
                onClick={() => setActiveTab("monthly")}
              >
                Monthly
              </button>

              <button
                className={activeTab === "yearly" ? "active" : ""}
                onClick={() => setActiveTab("yearly")}
              >
                Yearly
              </button>
            </div>

            <div className="pricingPro-save">
              <img src={curveArrow} alt="" />
              <span>Save 25%</span>
            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="pricingPro-grid">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`pricingPro-card ${
                index === 1 ? "active" : ""
              }`}
            >
              <div className="pricingPro-cardTop">
                <div>
                  <h4>Regular Plan</h4>
                  <h3>
                    {activeTab === "monthly"
                      ? pricingData.monthly
                      : pricingData.yearly}
                    <span>/Month</span>
                  </h3>
                </div>
                <img src={cloudImg} alt="" />
              </div>

              <ul className="pricingPro-list">
                {[
                  "Secure Cloud Storage",
                  "Weekly Automated Backups",
                  "Free SSL Certificate",
                  "24/7 System Monitoring",
                  "Free Domain Setup",
                  "Web & App Deployment Support"
                ].map((feature, i) => (
                  <li key={i}>
                    <span className="tick"><FaCheck /></span>
                    <span>{feature}</span>
                    <FaQuestionCircle className="helpIcon" />
                  </li>
                ))}

                <li className="disabled">
                  <span className="cross"><FaTimes /></span>
                  <span>20+ Payment Methods</span>
                  <FaQuestionCircle className="helpIcon" />
                </li>
              </ul>

              <button className="pricingPro-btn">
                GET STARTED NOW →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Cloudplans;
