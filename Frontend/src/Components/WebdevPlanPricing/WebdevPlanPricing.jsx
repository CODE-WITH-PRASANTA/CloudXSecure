import React, { useState } from "react";
import "./WebdevPlanPricing.css";

import bgShape from "../../assets/pricing-two-bg-shape.webp";
import cardBg from "../../assets/contact-three-bg-shape.webp";

// UPDATED CONTENT (ONLY CONTENT CHANGED)
const pricingData = {
  monthly: [
    { 
      title: "Starter", 
      price: "₹8,999", 
      note: "Perfect for small businesses starting online" 
    },
    { 
      title: "Growth", 
      price: "₹24,999", 
      note: "Designed for growing brands and SMEs" 
    },
    { 
      title: "Enterprise", 
      price: "₹64,999", 
      note: "Advanced solutions with premium support" 
    },
  ],

  yearly: [
    { 
      title: "Starter", 
      price: "₹79,999", 
      note: "Full annual support + maintenance" 
    },
    { 
      title: "Growth", 
      price: "₹2,39,999", 
      note: "Yearly plan with priority updates" 
    },
    { 
      title: "Enterprise", 
      price: "₹6,49,999", 
      note: "Enterprise-level yearly support + upgrades" 
    },
  ],

  packages: [
    { 
      title: "Starter", 
      price: "₹8,999", 
      note: "One-time setup for basic website needs" 
    },
    { 
      title: "Growth", 
      price: "₹24,999", 
      note: "Complete package with enhanced features" 
    },
    { 
      title: "Enterprise", 
      price: "₹64,999", 
      note: "Unlimited access with full customization" 
    },
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
