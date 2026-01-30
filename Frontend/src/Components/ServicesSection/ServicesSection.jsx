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
  { icon: <FiShield />, title: "Cyber Security Solutions", number: "01" },
  { icon: <FiCloud />, title: "Scalable Cloud Solutions", number: "02" },
  { icon: <FiDatabase />, title: "Data Protection Services", number: "03" },
  { icon: <FiSettings />, title: "Cloud Optimization Management", number: "04" },
  { icon: <FiHeadphones />, title: "HelpDesk 360 Solutions", number: "05" },
  { icon: <FiCode />, title: "Software Development Services", number: "06" },
  { icon: <FiShield />, title: "Custom Web Design", number: "07" },
  { icon: <FiCloud />, title: "Mobile App Development", number: "08" },
  { icon: <FiDatabase />, title: "Complete Cloud Solutions", number: "09" },
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
    <section className="ctt-wrapper">
      <div className="ctt-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="btt-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span className="arrow">↗</span>

            <div className="btt-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>
              Protect your digital assets with CloudXSecure’s enterprise-grade cybersecurity services, including threat detection, secure access control, compliance support, and proactive monitoring to keep your business safe.
            </p>

            <div className="btt-footer">
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
