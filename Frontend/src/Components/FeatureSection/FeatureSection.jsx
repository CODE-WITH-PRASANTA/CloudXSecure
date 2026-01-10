import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./FeatureSection.css";

import icon1 from "../../assets/choose-1.svg";
import icon2 from "../../assets/choose-2.svg";
import icon3 from "../../assets/choose-3.svg";

const FeatureSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: icon1,
      title: "Highly Expert Team",
      description:
        "Our consulting process begins with a thorough assessment of your current situation and needs.",
      link: "/service-details/expert-team", // ✅ Service detail route
    },
    {
      icon: icon2,
      title: "24/7 Customer Services",
      description:
        "We offer around-the-clock support to ensure your business keeps running without interruption.",
      link: "/service-details/customer-support",
    },
    {
      icon: icon3,
      title: "Competitive Pricing",
      description:
        "We provide top-quality services at affordable prices to keep your operations efficient and cost-effective.",
      link: "/service-details/competitive-pricing",
    },
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-wrapper">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>

            {/* ✅ Navigate on click */}
            <button
              className="feature-btn"
              onClick={() => navigate(feature.link)}
            >
              Read more <span className="arrow">»</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
