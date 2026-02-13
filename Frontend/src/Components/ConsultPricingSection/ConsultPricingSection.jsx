import React, { useState } from "react";
import "./ConsultPricingSection.css";

const pricing = {
  monthly: ["₹1,599", "₹3,299", "₹7,999"],
  yearly: ["₹15,999", "₹32,999", "₹89,999"],
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="gerowPricing__section">
      {/* HEADER */}
      <div className="gerowPricing__header">
        <span className="gerowPricing__subtitle">PRICING CHART</span>
        <h2 className="gerowPricing__title">
          Affordable Cloud & Digital Solutions for Every Business
        </h2>
        <p className="gerowPricing__desc">
          Ever Find Yourself Staring At Your Computer Screen A Good Consulting
          Slogan To Come To Mind? Oftentimes.
        </p>

        {/* TOGGLE */}
        <div className="gerowPricing__toggle">
          <span
            className={`gerowPricing__toggleText ${
              billing === "monthly" ? "active" : ""
            }`}
          >
            Monthly
          </span>

          <div
            className={`gerowPricing__switch ${
              billing === "yearly" ? "yearly" : ""
            }`}
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          >
            <span />
          </div>

          <span
            className={`gerowPricing__toggleText ${
              billing === "yearly" ? "active" : ""
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      {/* CARDS */}
      <div className="gerowPricing__grid">
        {/* BASIC */}
        <div className="gerowPricing__card">
          <h3 className="gerowPricing__planTitle">Basic Plan</h3>
          <p className="gerowPricing__planDesc">Best for Small Businesses</p>

          <div className="gerowPricing__pricePill">
            <strong>{pricing[billing][0]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Secure cloud hosting setup</li>
            <li>Basic website design</li>
            <li>Email & DNS configuration</li>
            <li>Performance monitoring</li>
            <li>SSL & basic security</li>
            <li>Monthly backups</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>

        {/* STANDARD */}
        <div className="gerowPricing__card gerowPricing__highlight">
          <span className="gerowPricing__badge">Popular</span>

          <h3 className="gerowPricing__planTitle">Standard Plan</h3>
          <p className="gerowPricing__planDesc">Perfect for Growing Teams</p>

          <div className="gerowPricing__pricePill">
            <strong>{pricing[billing][1]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Managed cloud infrastructure</li>
            <li>Web App + Mobile App</li>
            <li>DevOps monitoring</li>
            <li>Priority support</li>
            <li>Monthly reports</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>

        {/* BUSINESS */}
        <div className="gerowPricing__card">
          <h3 className="gerowPricing__planTitle">Business Plan</h3>
          <p className="gerowPricing__planDesc">Built for Enterprises</p>

          <div className="gerowPricing__pricePill">
            <strong>{pricing[billing][2]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Custom cloud architecture</li>
            <li>Full Web + Mobile Development</li>
            <li>Enterprise Security</li>
            <li>24/7 Cloud Monitoring</li>
            <li>High Availability Servers</li>
            <li>Disaster Recovery Setup</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
