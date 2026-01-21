import React, { useState } from "react";
import "./PricingSection1.css";
import { FaRocket, FaLightbulb, FaBriefcase } from "react-icons/fa";

const PricingSection1 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Basic Plan",
      monthly: 19,
      yearly: 190,
      features: [
        "5000 User Activities",
        "Unlimited Access",
        "No Hidden Charge",
        "03 Time Updates",
        "Figma Source File",
      ],
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Standard",
      monthly: 39,
      yearly: 390,
      features: [
        "5000 User Activities",
        "Unlimited Access",
        "No Hidden Charge",
        "03 Time Updates",
        "Figma Source File",
      ],
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Enterprise",
      monthly: 89,
      yearly: 890,
      features: [
        "5000 User Activities",
        "Unlimited Access",
        "No Hidden Charge",
        "03 Time Updates",
        "Figma Source File",
      ],
    },
  ];

  return (
    <section className="pricing-section1">
      {/* Top Heading */}
      <div className="pricing-header1">
        <span className="pricing-badge1">FLEXIBLE PRICING PLAN</span>
        <h2 className="pricing-title1">We’ve offered the best pricing for you</h2>
        <p className="pricing-subtitle1">
          Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.
        </p>

        {/* Toggle Switch */}
        <div className="pricing-toggle1">
          <span className={!isYearly ? "active" : ""}>Monthly</span>
          <label className="switch1">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="slider1 round"></span>
          </label>
          <span className={isYearly ? "active" : ""}>Yearly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards1">
        {plans.map((plan) => (
          <div key={plan.id} className="pricing-card1">
            <div className="pricing-icon1">{plan.icon}</div>
            <h3 className="plan-title1">{plan.title}</h3>
            <h2 className="plan-price1">
              ${isYearly ? plan.yearly : plan.monthly}
              <span>/ {isYearly ? "year" : "month"}</span>
            </h2>
            <ul className="plan-features1">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span>✔</span> {feature}
                </li>
              ))}
            </ul>
            <button className="plan-btn1">GET THE PLAN NOW →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection1;
