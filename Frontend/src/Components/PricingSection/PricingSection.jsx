import React, { useState } from "react";
import "./PricingSection.css";
import priceicon from "../../assets/priceicon.png";
import priceicon2 from "../../assets/pricingIcon2.svg";

const PricingSection = () => {
  const [planType, setPlanType] = useState("monthly");

  const plans = [
    { title: "Cloud Startup", monthlyPrice: 99, save: "75%" },
    { title: "Business Plan", monthlyPrice: 59, save: "75%" },
    { title: "Premium Plan", monthlyPrice: 39, save: "75%" },
    { title: "Enterprise Plan", monthlyPrice: 29, save: "75%" },
  ];

  const features = [
    "100 GB SSD Storage",
    "Weekly Backups",
    "Unlimited Free SSL",
    "24/7 System Monitoring",
    "Free Domain ($9.99 Value)",
  ];

  const notIncluded = ["Dedicated IP Address", "20+ Payment Methods"];

  const getPrice = (price) => {
    return planType === "yearly" ? Math.round(price * 12 * 0.75) : price;
  };

  return (
    <section className="price-section">
      <img src={priceicon} alt="decor" className="price-icon-top" />

      {/* Header Section */}
      <div className="price-header">
        <p className="small-title">
          <span className="pricing-line"></span> OUR PRICING
        </p>
        <h2>Flexible Cloud & Digital Pricing Plans</h2>

        <div className="toggle-container">
          <div className="toggle-buttons">
            <button
              className={planType === "monthly" ? "active" : ""}
              onClick={() => setPlanType("monthly")}
            >
              Monthly
            </button>
            <button
              className={planType === "yearly" ? "active" : ""}
              onClick={() => setPlanType("yearly")}
            >
              Yearly
            </button>
          </div>
          <div className="toggle-hint">
            <img src={priceicon2} alt="arrow" className="price-icon-bottom" />
            <p className="save-text">Save 25%</p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="plans-container">
        {plans.map((plan, i) => (
          <div className="plan-card" key={i}>
            <div className="plan-title">{plan.title}</div>
            <div className="plan-price">
              <small className="old-price">$120.99</small>
              <span className="save-badge">SAVE {plan.save}</span>
              <h3>
                ${getPrice(plan.monthlyPrice)}
                <span>{planType === "monthly" ? "/mo" : "/yr"}</span>
              </h3>
              <p className="desc">
                Secure cloud, web & app solutions with backups and 24/7 support—CloudXSecure.
              </p>
            </div>

            <ul className="plan-features">
              {features.map((f, idx) => (
                <li key={idx} className="included">
                  ✔ {f}
                </li>
              ))}
              {notIncluded.map((f, idx) => (
                <li key={idx} className="not-included">
                  ✖ {f}
                </li>
              ))}
            </ul>

            <button className="get-started-btn">GET STARTED NOW →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
