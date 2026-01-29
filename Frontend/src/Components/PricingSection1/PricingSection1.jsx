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
        "Cloud monitoring setup",
        "Basic website support",
        "Email support",
        "Monthly performance report",
        "Cloud Migration",
      ],
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Standard",
      monthly: 39,
      yearly: 390,
      features: [
        "Managed cloud services",
        "Website maintenance",
        "App performance monitoring",
        "Priority support",
        "SEO-Friendly Development",
      ],
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Enterprise",
      monthly: 89,
      yearly: 890,
      features: [
        "Full cloud management",
        "Dedicated DevOps engineer",
        "Custom web & app support",
        "24/7 priority assistance",
        "Cross-Platform Development",
      ],
    },
  ];

  return (
    <section className="pricing-section1">
      {/* Top Heading */}
      <div className="pricing-header1">
        <span className="pricing-badge1">FLEXIBLE PRICING PLAN</span>
        <h2 className="pricing-title1">Our Comprehensive Cloud & Digital Services</h2>
        <p className="pricing-subtitle1">
            CloudXSecure is a trusted technology partner delivering scalable cloud services, modern web design, mobile app development, and end-to-end cloud solutions. We help startups, SMEs, and enterprises accelerate digital transformation with secure infrastructure, high-performance applications, and future-ready technology.        </p>

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
