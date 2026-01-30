import React, { useState } from "react";
import "./Cloudplans.css";

// DECOR IMAGES
import cloudImg from "../../assets/pa1.webp";
import curveArrow from "../../assets/pa2.webp";
import handImg from "../../assets/pa3.webp";
import diamondImg from "../../assets/pa4.webp";

// ICONS
import { FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";

const pricingData = {
  monthly: "$49",
  yearly: "$36",
};

const Cloudplans = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="pricingSectionUnique">
      {/* DECOR */}
      <img src={diamondImg} alt="" className="pricingDiamondDecor" />
      <img src={handImg} alt="" className="pricingHandDecor" />

      {/* HEADER */}
      <div className="pricingHeaderUnique">
        <span className="pricingBadgeUnique">OUR PRICING</span>
        <h2 className="pricingTitleUnique">CloudXSecure Regular Plan</h2>

        {/* TOGGLE */}
        <div className="pricingToggleWrapUnique">
          <button
            className={`pricingToggleBtnUnique ${
              activeTab === "monthly" ? "active" : ""
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>

          <button
            className={`pricingToggleBtnUnique ${
              activeTab === "yearly" ? "active" : ""
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>

          <div className="pricingSaveWrapUnique">
            <img src={curveArrow} alt="save" />
            <span>Save 25%</span>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="pricingGridUnique">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`pricingCardUnique ${
              index === 1 ? "pricingCardActiveUnique" : ""
            }`}
          >
            {/* CARD TOP */}
            <div className="pricingCardTopUnique">
              <div>
                <h4>Regular Plans</h4>
                <h3>
                  {activeTab === "monthly"
                    ? pricingData.monthly
                    : pricingData.yearly}
                  <span>/Month</span>
                </h3>
              </div>

              <img src={cloudImg} alt="cloud" />
            </div>

            {/* FEATURES */}
            <ul className="pricingListUnique">
              <li className="pricingItemUnique">
                <span className="pricingIcon tick">
                  <FaCheck />
                </span>
                <span className="pricingText">Secure Cloud Storage</span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique">
                <span className="pricingIcon tick">
                  <FaCheck />
                </span>
                <span className="pricingText">Weekly Automated Backups</span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique">
                <span className="pricingIcon tick">
                  <FaCheck />
                </span>
                <span className="pricingText">Free SSL Certificate</span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique">
                <span className="pricingIcon tick">
                  <FaCheck />
                </span>
                <span className="pricingText">24/7 System Monitoring</span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique">
                <span className="pricingIcon tick">
                  <FaCheck />
                </span>
                <span className="pricingText">
                  Free Domain Setup
                </span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique ">
                <span className="pricingIcon tick">
                  <FaCheck  />
                </span>
                <span className="pricingText">Web & App Deployment Support</span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>

              <li className="pricingItemUnique disabled">
                <span className="pricingIcon cross">
                  <FaTimes />
                </span>
                <span className="pricingText">
                  20+ Payment Methods
                </span>
                <FaQuestionCircle className="pricingHelpIcon" />
              </li>
            </ul>

            {/* BUTTON */}
            <button className="pricingBtnUnique">
              GET STARTED NOW <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloudplans;
