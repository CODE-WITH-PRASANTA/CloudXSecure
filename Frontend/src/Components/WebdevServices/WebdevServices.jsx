import React, { useEffect, useState, useRef } from "react";
import "./WebdevServices.css";

import bgShape from "../../assets/services-three-shape-2.webp";
import iconBg from "../../assets/webcard-icon-bg.webp";

import {
  FaTrophy,
  FaUsers,
  FaStar,
  FaUserCheck,
  FaCloud,
  FaCode,
} from "react-icons/fa";

const initialServices = [
  { title: "Cybersecurity Solutions", icon: <FaTrophy />, desc: "Comprehensive IT management, including network monitoring, data backup" },
  { title: "All Kind Of IT Services", icon: <FaUsers />, desc: "Comprehensive IT management, including network monitoring, data backup" },
  { title: "Data Analytics Consulting", icon: <FaStar />, desc: "Comprehensive IT management, including network monitoring, data backup" },
  { title: "Cloud Solutions Provider", icon: <FaCloud />, desc: "Comprehensive IT management, including network monitoring, data backup" },
  { title: "Software Development", icon: <FaCode />, desc: "Comprehensive IT management, including network monitoring, data backup" },
  { title: "Customer Satisfaction", icon: <FaUserCheck />, desc: "Comprehensive IT management, including network monitoring, data backup" },
];

const ServicesThree = () => {
  const [services, setServices] = useState(initialServices);
  const [animate, setAnimate] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
        setServices(prev => {
          const updated = [...prev];
          const first = updated.shift(); // remove first
          updated.push(first); // add to end
          return updated;
        });
      }, 800); // must match CSS transition time
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="services3-section">
      <img src={bgShape} className="services3-bg-shape" alt="" />
      <div className="services3-overlay"></div>

      <div className="services3-container">
        {/* HEADING */}
        <div className="services3-heading">
          <span className="services3-subtitle">OUR SERVICES</span>
          <h2 className="services3-title">
            <span className="reveal-text">Reliable Services Crafted To</span>
            <span className="reveal-text highlight">Your Expectations</span>
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="services3-carousel">
          <div
            ref={trackRef}
            className={`services3-track ${animate ? "slide" : ""}`}
          >
            {services.map((item, i) => (
              <div className="services3-card" key={i}>
                <div
                  className="services3-icon"
                  style={{ backgroundImage: `url(${iconBg})` }}
                >
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button className="services3-btn">
                  Read More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesThree;
