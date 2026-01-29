import React, { useState } from "react";
import "./BDPricing.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const plans = [
  {
    title: "Basic Plan",
    monthly: 19,
    yearly: 190,
    popular: false,
  },
  {
    title: "Team Plan",
    monthly: 49,
    yearly: 490,
    popular: true,
  },
  {
    title: "Enterprise Plan",
    monthly: 99,
    yearly: 990,
    popular: false,
  },
];

const features = [
  "Secure cloud hosting & basic backup",
  "Professional website setup",
  "No Hidden Charge",
  "Essential app support",
  "Managed cloud access",
  "Email & chat support",
];

const BDPricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bd-pricing">
      <div className="bd-pricing-container">
        {/* HEADER */}
        <div className="bd-pricing-header">
          <div>
            <span className="bd-badge">FLEXIBLE PRICING PLAN</span>
            <h2>
              Affordable Cloud Solutions <br />for Every Business
            </h2>
          </div>

          <p>
           Choose a plan that fits your growth. CloudXSecure delivers secure cloud services, professional web design, custom app development, and complete cloud solutions—backed by reliable support and transparent pricing.
          </p>
        </div>

        {/* TOGGLE */}
        <div className="bd-toggle">
          <span className={billing === "monthly" ? "active" : ""}>
            Monthly
          </span>
          <div
            className={`bd-switch ${billing}`}
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          >
            <span></span>
          </div>
          <span className={billing === "yearly" ? "active" : ""}>
            Yearly
          </span>
        </div>

        {/* CARDS */}
        <div className="bd-pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bd-pricing-card ${
                plan.popular ? "popular" : ""
              }`}
            >
              {plan.popular && <span className="popular-tag">Popular</span>}

              <h3>{plan.title}</h3>

              <div className="price">
                $
                <strong>
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </strong>
                <span>/{billing === "monthly" ? "month" : "year"}</span>
              </div>

              <ul>
                {features.map((f, idx) => (
                  <li key={idx}>
                    <FaCheck /> {f}
                  </li>
                ))}
              </ul>

              <button className="bd-btn">
                Get The Plan Now <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDPricing;
