import React from "react";
import "./PlanSubscription.css";
import { FaCheck, FaBolt, FaGem, FaCrown } from "react-icons/fa";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$29.99",
    icon: <FaBolt />,
    badgeColor: "basic"
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$39.99",
    icon: <FaGem />,
    badgeColor: "standard",
    highlight: true
  },
  {
    id: 3,
    title: "Business Plan",
    price: "$69.99",
    icon: <FaCrown />,
    badgeColor: "business"
  }
];

const features = [
  "Basic task management",
  "Team collaboration",
  "Up to 80% size reduction",
  "Cloud storage (2GB)",
  "Up to 5 Users",
  "Customer Support"
];

const BiznityPricing = () => {
  return (
    <section className="biz-pricing-section">
      <div className="biz-pricing-container">
        <h3 className="biz-pricing-heading">
          Choose your <span>Perfect <br /> Premium</span> Subscription
        </h3>

        <p className="biz-pricing-subtext">
          Here’s a simple Pricing Demo for your Stress-Free Business Management service.
        </p>

        <div className="biz-pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`biz-pricing-card ${plan.highlight ? "active" : ""}`}
            >
              {/* PLAN BADGE */}
              <div className={`biz-plan-badge ${plan.badgeColor}`}>
                {plan.icon}
                <span>{plan.title}</span>
              </div>

              {/* PRICE */}
              <div className="biz-price-box">
                <div className="biz-credit-pill">1,000 Credits</div>
                <h3>{plan.price}</h3>
                <p className="biz-desc">
                  The perfect pack to optimize a single website or a few smaller sites.
                </p>
              </div>

              {/* FEATURES */}
              <ul className="biz-feature-list">
                {features.map((item, index) => (
                  <li key={index}>
                    <FaCheck className="biz-check-icon" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="biz-choose-btn">
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiznityPricing;
