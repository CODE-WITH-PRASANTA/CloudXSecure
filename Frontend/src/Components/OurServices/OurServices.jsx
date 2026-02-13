import React from "react";
import "./OurServices.css";
import { useNavigate } from "react-router-dom";
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
    title: "Managed Cloud Services",
    desc: "CloudXSecure provides managed cloud services that handle your cloud infrastructure end-to-end. We ensure high availability, performance optimization, security monitoring, and continuous support so you can focus on growing your business.",
    icon: <FaShieldAlt size={20} />,
    path: "/services/managed-cloud"
  },
  {
    id: "02",
    title: "Cloud Security",
    desc: "Our cloud security services protect your applications, data, and infrastructure from cyber threats.",
    icon: <FaCloud size={20} />,
    path: "/services/security"
  },
  {
    id: "03",
    title: "Cloud Hosting",
    desc: "We deliver secure and scalable cloud hosting services designed for speed, reliability, and performance.",
    icon: <FaDatabase size={20} />,
    path: "services/hosting"
  },
  {
    id: "04",
    title: "Cloud Migration",
    desc: "CloudXSecure helps businesses move to the cloud with minimal downtime.",
    icon: <FaCogs size={20} />,
    path: "services/migration"
  },
  {
    id: "05",
    title: "DevOps & Automation",
    desc: "Our DevOps and automation services streamline development and deployment processes.",
    icon: <FaHeadset size={20} />,
    path: "/services/devops"
  },
  {
    id: "06",
    title: "Monitoring & Cost Optimization",
    desc: "We provide cloud monitoring and cost optimization services.",
    icon: <FaCode size={20} />,
    path: "/services/monitoring"
  }
];

const OurServices = () => {
  const navigate = useNavigate();

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
              onClick={() => navigate(item.path)}   // 🔥 NAVIGATION
              style={{ "--delay": `${index * 0.12}s` }}
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
