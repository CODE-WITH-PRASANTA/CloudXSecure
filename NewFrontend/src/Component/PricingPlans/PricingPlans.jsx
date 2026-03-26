import React from "react";
import "./PricingPlans.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  { id: 1, price: "$49", title: "Standard Plan" },
  { id: 2, price: "$59", title: "Basic Plan" },
  { id: 3, price: "$69", title: "Beginner Plan" },
  { id: 4, price: "$79", title: "Premium Plan" },
];

const features = [
  "30 Days Trial Features",
  "Multi-Language Content",
  "Unlimited Features",
  "Data backup and recovery",
  "Synced To Cloud Database",
];

const PricingPlans = () => {
  return (
    <div className="pricingPlans">
      <div className="pricingPlans-container">

        <div className="pricingPlans-header">
          <span className="pricingPlans-tag">Start Business</span>
          <h2>Choose Your Best Plan</h2>
        </div>

        <div className="pricingPlans-grid">
          {plans.map((plan) => (
            <div className="pricingPlans-card" key={plan.id}>

              {/* PRICE BOX */}
              <div className="pricingPlans-top">
                <h3>{plan.price}</h3>
                <p>{plan.title}</p>
              </div>

              {/* FEATURES */}
              <ul className="pricingPlans-features">
                {features.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="tick-icon" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="pricingPlans-btn">
                CHOOSE PLAN
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;