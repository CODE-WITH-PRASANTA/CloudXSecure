import React from "react";
import { FaHeartbeat, FaCar, FaShip, FaFire } from "react-icons/fa";
import "./InsuranceSection.css";

// IMPORTANT: UPDATE THE PATHS BASED ON YOUR FOLDER STRUCTURE
import healthImg from "../../assets/health.jpg";
import vehicleImg from "../../assets/vehicle.jpg";
import cargoImg from "../../assets/cargo.jpg";
import fireImg from "../../assets/fire.jpg";

const InsuranceSection = () => {
  const services = [
    {
      id: 1,
      title: "Health Insurance",
      desc: "When An Unknown Printeawr Took Galley Insurance Type Andey Ollowing.",
      img: healthImg,
      icon: <FaHeartbeat />,
    },
    {
      id: 2,
      title: "Vehicle Insurance",
      desc: "When An Unknown Printeawr Took Galley Insurance Type Andey Ollowing.",
      img: vehicleImg,
      icon: <FaCar />,
    },
    {
      id: 3,
      title: "Cargo Insurance",
      desc: "When An Unknown Printeawr Took Galley Insurance Type Andey Ollowing.",
      img: cargoImg,
      icon: <FaShip />,
    },
    {
      id: 4,
      title: "Fire Insurance",
      desc: "When An Unknown Printeawr Took Galley Insurance Type Andey Ollowing.",
      img: fireImg,
      icon: <FaFire />,
    },
  ];

  return (
    <section className="insurance-section">
      <div className="insurance-header">
        <h2>We Make Better Insurance For Everyone</h2>
        <button className="see-all-btn">
          SEE ALL SERVICE <span>→</span>
        </button>
      </div>

      <div className="insurance-cards">
        {services.map((service) => (
          <div key={service.id} className="insurance-card">
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
              <div className="icon-circle">{service.icon}</div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceSection;
