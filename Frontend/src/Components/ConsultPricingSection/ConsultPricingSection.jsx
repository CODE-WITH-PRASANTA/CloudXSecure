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
          Best Pricing Plane For You
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
            Ever Find Yourself Staring At Your Follow Computer Screen A Good
          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][0]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>5000 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
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
            Ever Find Yourself Staring At Your Follow Computer Screen A Good
          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][1]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>5000 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>

        {/* BUSINESS */}
        <div className="gerowPricing__card">
          <h3 className="gerowPricing__planTitle">Business Plan</h3>
          <p className="gerowPricing__planDesc">
            Ever Find Yourself Staring At Your Follow Computer Screen A Good
          </p>

          <div className="gerowPricing__pricePill">
            <strong>${pricing[billing][2]}</strong>
            <span>/{billing === "monthly" ? "month" : "year"}</span>
          </div>

          <ul className="gerowPricing__list">
            <li>5000 User Activities</li>
            <li>Unlimited Access</li>
            <li>No Hidden Charge</li>
            <li>03 Time Updates</li>
            <li>Figma Source File</li>
            <li>Many More Facilities</li>
          </ul>

          <button className="gerowPricing__btn">
            GET THE PLAN NOW <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
