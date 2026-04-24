import React, { useState } from "react";
import "./Cloudplans.css";

import cloudImg from "../../assets/pa1.webp";
import curveArrow from "../../assets/pa2.webp";
import handImg from "../../assets/pa3.webp";
import diamondImg from "../../assets/pa4.webp";

import { FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";

const pricingData = {
  monthly: "₹49",
  yearly: "₹36",
};

const Cloudplans = () => {
  const base = "pricingPro";
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className={`${base}__section`}>
      {/* Decor */}
      <img src={diamondImg} alt="" className={`${base}__diamond`} />
      <img src={handImg} alt="" className={`${base}__hand`} />

      <div className={`${base}__container`}>
        {/* HEADER */}
        <div className={`${base}__header`}>
          <span className={`${base}__badge`}>OUR PRICING</span>
          <h2 className={`${base}__title`}>CloudXSecure Regular Plan</h2>

          <div className={`${base}__toggleWrap`}>
            <div className={`${base}__toggle`}>
              <button
                type="button"
                className={activeTab === "monthly" ? "active" : ""}
                onClick={() => setActiveTab("monthly")}
              >
                Monthly
              </button>

              <button
                type="button"
                className={activeTab === "yearly" ? "active" : ""}
                onClick={() => setActiveTab("yearly")}
              >
                Yearly
              </button>
            </div>

            <div className={`${base}__save`}>
              <img src={curveArrow} alt="" />
              <span>Save 25%</span>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className={`${base}__grid`}>
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`${base}__card ${index === 1 ? "active" : ""}`}
            >
              <div className={`${base}__cardTop`}>
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

              <ul className={`${base}__list`}>
                {[
                  "Secure Cloud Storage",
                  "Weekly Automated Backups",
                  "Free SSL Certificate",
                  "24/7 System Monitoring",
                  "Free Domain Setup",
                  "Web & App Deployment Support",
                ].map((feature, i) => (
                  <li key={i}>
                    <span className="tick">
                      <FaCheck />
                    </span>
                    <span>{feature}</span>
                    <FaQuestionCircle className="helpIcon" />
                  </li>
                ))}

                <li className="disabled">
                  <span className="cross">
                    <FaTimes />
                  </span>
                  <span>20+ Payment Methods</span>
                  <FaQuestionCircle className="helpIcon" />
                </li>
              </ul>

              <button type="button" className={`${base}__btn`}>
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