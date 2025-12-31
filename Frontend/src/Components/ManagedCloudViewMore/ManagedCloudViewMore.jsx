import React from "react";
import "./ManagedCloudViewMore.css";
import { FiShield, FiCloud, FiDatabase } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Cyber Security Solution",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FiShield />
  },
  {
    id: "02",
    title: "Scalable Cloud Solutions",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FiCloud />
  },
  {
    id: "03",
    title: "Data Protection Services",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FiDatabase />
  }
];

const ViewMoreServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">View More Services</h2>

      <div className="services-grid">
        {services.map((item) => (
          <div className="service-card" key={item.id}>
            <div className="service-icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="service-footer">
              <span className="line"></span>
              <span className="number">{item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ViewMoreServices;
