import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceSection.css";
import { FiMessageCircle } from "react-icons/fi";

import serviceIcon1 from "../../assets/service1.svg";
import serviceIcon2 from "../../assets/service2.svg";
import serviceIcon3 from "../../assets/service3.svg";
import chatPerson from "../../assets/chartperson.png";

const ServiceSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: serviceIcon1,
      title: "Woo Commerce",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: "Web Development",
      description:
        "Progressively evolve interactive solutions. Seamlessly foster collaboration and cutting-edge development.",
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: "App Design",
      description:
        "Holistically leverage innovation to deliver stunning, responsive, and engaging mobile app experiences.",
    },
  ];

  return (
    <section className="service-section">
      {/* ===== Header Section ===== */}
      <div className="service-header">
        <p className="subtitle">← OUR SERVICES →</p>
        <h2 className="service-title">
          Quickly Drive Interoperable <br /> Amazing Services
        </h2>
        <p className="service-description">
          Monotonically synergize grants to business visualize strategic
          infomediaries parallel task technically convergence maintenance local
          business technology done
        </p>
      </div>

      {/* ===== Main Content ===== */}
      <div className="service-content">
        {/* Left Side Cards */}
        <div className="service-cards">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="read-more-btn"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                Read more <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Right Side Chat Image */}
        <div className="chat-container">
          <div className="live-chat-label">Live Chat</div>
          <img src={chatPerson} alt="Chat Person" className="chat-person" />
            {/* ✅ Wrapper for animation */}
         <div className="chat-icon-wrapper">
             <FiMessageCircle className="chat-icon" />
         </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
