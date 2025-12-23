import React from "react";
import "./OurServices.css";
import {
  FaShieldAlt,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaHeadset,
  FaCode
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Cyber Security Solution",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaShieldAlt size={20} />
  },
  {
    id: "02",
    title: "Scalable Cloud Solutions",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaCloud size={20} />
  },
  {
    id: "03",
    title: "Data Protection Services",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaDatabase size={20} />
  },
  {
    id: "04",
    title: "Optimization Management",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaCogs size={20} />
  },
  {
    id: "05",
    title: "HelpDesk 360 Solutions",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaHeadset size={20} />
  },
  {
    id: "06",
    title: "Software Development",
    desc: "Our advanced cybersecurity solution designed to protect against ever-an evolving threats, approach ensures.",
    icon: <FaCode size={20} />
  }
];

const OurServices = () => {
  return (
    <section className="OurServices">
      <div className="OurServices-container">

        {/* HEADER */}
        <div className="OurServices-header">
          <span className="OurServices-badge">OUR SERVICES</span>
          <h2>
            Expert IT Services Designed <br /> To Elevate Your Business
          </h2>
        </div>

        {/* GRID */}
        <div className="OurServices-grid">
          {services.map((item, index) => (
            <div
              className="OurServices-card"
              key={item.id}
              style={{ "--delay": `${index * 0.12}s` }}   // 🔥 PREMIUM SCROLL DELAY
            >
              <div className="OurServices-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <div className="OurServices-footer">
                <span>{item.id}</span>
                <div className="OurServices-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
