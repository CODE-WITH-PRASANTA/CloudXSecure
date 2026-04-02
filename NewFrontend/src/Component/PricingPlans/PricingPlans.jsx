import React from "react";
import "./PricingPlans.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    id: 1,
    price: "$49",
    title: "Starter Plan",
    desc: "Ideal for startups and small businesses looking to establish a secure digital presence.",
  },
  {
    id: 2,
    price: "$59",
    title: "Business Plan",
    desc: "Perfect for growing companies that need scalable web and cloud solutions.",
  },
  {
    id: 3,
    price: "$69",
    title: "Growth Plan",
    desc: "Designed for businesses expanding their digital operations with advanced features.",
  },
  {
    id: 4,
    price: "$79",
    title: "Premium Plan",
    desc: "Complete IT and cloud solution package with enhanced performance and security.",
  },
];

const features = [
  "30-day free trial with full access",
  "Multi-language support for global reach",
  "Unlimited features and integrations",
  "Secure data backup and recovery system",
  "Real-time cloud database synchronization",
];

const PricingPlans = () => {
  return (
    <section className="pricingPlans" id="pricing-plans">
      <div className="pricingPlans-container">

        {/* HEADER */}
        <div className="pricingPlans-header">
          <span className="pricingPlans-tag">
            CLOUDXSECURE PRICING
          </span>

          <h2>
            Flexible IT & Cloud Pricing Plans for Every Business
          </h2>

          <p className="pricingPlans-subtext">
            At CloudXsecure, we offer transparent and affordable pricing plans
            designed to fit businesses of all sizes. Whether you're just starting
            or scaling rapidly, our solutions ensure performance, security, and
            long-term reliability.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="pricingPlans-grid">
          {plans.map((plan) => (
            <div className="pricingPlans-card" key={plan.id}>

              {/* PRICE BOX */}
              <div className="pricingPlans-top">
                <h3>{plan.price}</h3>
                <p>{plan.title}</p>
              </div>

              {/* PLAN DESCRIPTION */}
              <p className="pricingPlans-desc">
                {plan.desc}
              </p>

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
                Get Started with CloudXsecure
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;