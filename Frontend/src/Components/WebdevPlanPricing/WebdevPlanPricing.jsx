import React, { useState } from "react";
import "./WebdevPlanPricing.css";

import bgShape from "../../assets/pricing-two-bg-shape.webp";
import cardBg from "../../assets/contact-three-bg-shape.webp";

const pricingData = {
  monthly: [
    { title: "Personal", price: "$5.60", note: "Free 3 Months Solutions" },
    { title: "Premium", price: "$25.60", note: "Free 5 Months Solutions" },
    { title: "Business", price: "$120.60", note: "Free Lifetime Solutions" },
  ],
  yearly: [
    { title: "Personal", price: "$50.60", note: "Yearly Support" },
    { title: "Premium", price: "$250.60", note: "Priority Support" },
    { title: "Business", price: "$1200.60", note: "Enterprise Support" },
  ],
  packages: [
    { title: "Starter", price: "$99", note: "One Time Setup" },
    { title: "Growth", price: "$299", note: "Complete Package" },
    { title: "Enterprise", price: "$799", note: "Unlimited Access" },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="pricing2-section">
      {/* BACKGROUND SHAPES */}
      <img src={bgShape} alt="" className="pricing2-bg" />

      {/* HEADER */}
      <div className="pricing2-header">
        <span className="pricing2-subtitle">PRICING & PLAN</span>
        <h2>
          Select the Perfect <span>Plan</span> for Your <br /> Needs That Fits You
        </h2>

        {/* TABS */}
        <div className="pricing2-tabs">
          {["monthly", "yearly", "packages"].map(tab => (
            <button
              key={tab}
              className={`pricing2-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="pricing2-cards">
        {pricingData[activeTab].map((item, i) => (
          <div className="pricing2-card" key={i}>
            <img src={cardBg} alt="" className="pricing2-card-bg" />

            <span className="pricing2-plan">{item.title.toUpperCase()}</span>
            <h3 className="pricing2-price">{item.price}</h3>
            <p className="pricing2-note">{item.note}</p>

            <button className="pricing2-btn">
              Choose Plan <span>→</span>
            </button>

            <div className="pricing2-features">
              <p>✔ Custom Website Design</p>
              <p>✔ Website Development</p>
              <p>✔ Social Media Graphics</p>
              <p className="disabled">✖ Brand Color Palette</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
