import React, { useState } from "react";
import "./ConsultPricingSection.css";

const pricing = {
  monthly: [19, 39, 99],
  yearly: [119, 339, 899],
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
          <p className="gerowPricing__planDesc">
            Best for Startups & Small Businesses
          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][0]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Secure cloud hosting setup</li>
            <li>Basic website design or landing page</li>
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
        <div className="gerowPricing__card">
          <span className="gerowPricing__badge">Popular</span>

          <h3 className="gerowPricing__planTitle">Standard Plan</h3>
          <p className="gerowPricing__planDesc">
                   Perfect for Growing Teams          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][1]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Managed cloud infrastructure</li>
            <li>Responsive website or web app development</li>
            <li>Basic mobile app support</li>
            <li>DevOps monitoring & optimization</li>
            <li>Priority technical support</li>
            <li>Monthly reports & updates</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>

        {/* BUSINESS */}
        <div className="gerowPricing__card">
          <h3 className="gerowPricing__planTitle">Business Plan</h3>
          <p className="gerowPricing__planDesc">
            Built for Enterprises
          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][2]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>Custom cloud architecture & migration</li>
            <li>Full web + mobile app development</li>
            <li>Enterprise-grade security & compliance</li>
            <li>24/7 cloud monitoring & DevOps</li>
            <li>High-availability infrastructure</li>
            <li>Disaster recovery planning</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
