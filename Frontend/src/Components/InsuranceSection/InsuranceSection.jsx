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
      title: "Cloud Services",
      desc: "Secure, scalable cloud infrastructure designed to optimize performance, reduce costs, and protect your data. CloudXSecure helps businesses migrate, manage, and modernize workloads across AWS, Azure, and Google Cloud with enterprise-grade security.",
      img: healthImg,
      icon: <FaHeartbeat />,
    },
    {
      id: 2,
      title: "Web Design & Development",
      desc: "We design high-performance, SEO-optimized websites that convert visitors into customers. From UI/UX design to full-stack development, CloudXSecure builds responsive, fast, and secure web experiences tailored to your brand.",
      img: vehicleImg,
      icon: <FaCar />,
    },
    {
      id: 3,
      title: "App Design & Development",
      desc: "Custom mobile and web applications built for scalability and user engagement. Our expert team delivers modern apps with clean architecture, smooth performance, and seamless cloud integration.",
      img: cargoImg,
      icon: <FaShip />,
    },
    {
      id: 4,
      title: "Complete Cloud Solutions",
      desc: "End-to-end cloud solutions including DevOps automation, cybersecurity, monitoring, and managed services. We help organizations streamline operations, enhance security, and accelerate digital transformation.",
      img: fireImg,
      icon: <FaFire />,
    },
  ];

  return (
    <section className="insurance-section">
      <div className="insurance-header">
        <h2>We Deliver Smart Cloud & Digital Solutions for Every Business</h2>
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
