import React from "react";
import "./DevopsServices.css";

import icon1 from "../../assets/devops-service-icon1.svg";
import icon2 from "../../assets/devops-service-icon2.svg";
import icon3 from "../../assets/devops-service-icon3.svg";

import img1 from "../../assets/devops-service-img1.webp";
import img2 from "../../assets/devops-service-img2.webp";
import img3 from "../../assets/devops-service-img3.webp";

const services = [
  {
    icon: icon1,
    title: "Software Development and Integration",
    desc: "IT solutions designed to streamline your operations, enhance security, and drive innovation.",
    img: img1,
  },
  {
    icon: icon2,
    title: "Unified Communications and Collaboration",
    desc: "From cloud infrastructure management and cybersecurity solutions to data analytics, network optimization.",
    img: img2,
  },
  {
    icon: icon3,
    title: "Network Optimization Services Managed IT Services",
    desc: "Whether you're looking to enhance productivity, improve efficiency, or stay ahead of technological.",
    img: img3,
  },
];

const ServiceSection = () => {
  return (
    <section className="tx-service-section">
      <div className="tx-service-container">
        <span className="tx-service-tag">Service</span>

        <h2 className="tx-service-title">
          Our Comprehensive <span>IT Solutions</span>
        </h2>

        <p className="tx-service-subtitle">
          Whether you are looking to enhance productivity, improve efficiency,
          or stay ahead of technological advancements, we've got you covered.
        </p>

        <div className="tx-service-grid">
          {services.map((item, index) => (
            <div className="tx-service-card" key={index}>
              <div className="tx-service-content">
                <div className="tx-service-icon">
                  <img src={item.icon} alt="icon" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <a href="/" className="tx-read-more">
                  Read More <span>↗</span>
                </a>
              </div>

              <div className="tx-service-img">
                <img src={item.img} alt="service" />
                <div className="tx-img-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
