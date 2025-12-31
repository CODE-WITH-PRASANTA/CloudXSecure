import React from "react";
import "./ServicesSection.css";
import {
  FiShield,
  FiCloud,
  FiDatabase,
  FiSettings,
  FiHeadphones,
  FiCode,
} from "react-icons/fi";

const services = [
  { icon: <FiShield />, title: "Cyber Security Solution", number: "01" },
  { icon: <FiCloud />, title: "Scalable Cloud Solutions", number: "02" },
  { icon: <FiDatabase />, title: "Data Protection Services", number: "03" },
  { icon: <FiSettings />, title: "Optimization Management", number: "04" },
  { icon: <FiHeadphones />, title: "HelpDesk 360 Solutions", number: "05" },
  { icon: <FiCode />, title: "Software Development", number: "06" },
  { icon: <FiShield />, title: "Cyber Security Solution", number: "07" },
  { icon: <FiCloud />, title: "Scalable Cloud Solutions", number: "08" },
  { icon: <FiDatabase />, title: "Data Protection Services", number: "09" },
];

const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  return (
    <section className="services-wrapper">
      <div className="services-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span className="arrow">↗</span>

            <div className="service-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>
              Our advanced cybersecurity solution designed to protect against
              ever-an evolving threats, approach ensures.
            </p>

            <div className="service-footer">
              <span className="line" />
              <span className="number">{item.number}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
