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
    title: "Cloud Solutions & Software Development",
    desc: "Build secure, scalable cloud infrastructure with custom software tailored to your business. CloudXSecure delivers cloud migration, SaaS development, and system integration for high-performance digital operations.",
    img: img1,
  },
  {
    icon: icon2,
    title: "Web & Mobile App Design",
    desc: "Create stunning websites and powerful mobile apps with CloudXSecure. We design user-friendly, SEO-optimized web platforms and high-performance mobile applications that convert visitors into customers.",
    img: img2,
  },
  {
    icon: icon3,
    title: "Managed Cloud & IT Services",
    desc: "From cloud security and DevOps to infrastructure management and monitoring, CloudXSecure provides complete managed IT services to keep your systems secure, optimized, and always online.",
    img: img3,
  },
];

const ServiceSection = () => {
  return (
    <section className="tx-service-section">
      <div className="tx-service-container">
        <span className="tx-service-tag">Service</span>

        <h2 className="tx-service-title">
          Our Comprehensive  <span>Cloud & Digital Solutions</span>
        </h2>

        <p className="tx-service-subtitle">
         Empowering businesses with secure cloud services, modern web design, scalable app development, and end-to-end IT solutions—built to drive growth, performance, and digital success.
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
