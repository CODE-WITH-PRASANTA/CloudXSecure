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
    title: "Managed Cloud Services",
    desc: "CloudXSecure provides managed cloud services that handle your cloud infrastructure end-to-end. We ensure high availability, performance optimization, security monitoring, and continuous support so you can focus on growing your business.",
    icon: <FaShieldAlt size={20} />
  },
  {
    id: "02",
    title: "Cloud Security",
    desc: "Our cloud security services protect your applications, data, and infrastructure from cyber threats. We implement robust security controls, continuous monitoring, and compliance-ready solutions to keep your cloud environment safe.",
    icon: <FaCloud size={20} />
  },
  {
    id: "03",
    title: "Cloud Hosting",
    desc: "We deliver secure and scalable cloud hosting services designed for speed, reliability, and performance. Whether hosting websites, applications, or enterprise systems, our cloud hosting ensures maximum uptime and flexibility.",
    icon: <FaDatabase size={20} />
  },
  {
    id: "04",
    title: "Cloud Migration",
    desc: "CloudXSecure helps businesses move to the cloud with minimal downtime. Our cloud migration services ensure safe data transfer, application compatibility, and optimized cloud performance for a seamless transition.",
    icon: <FaCogs size={20} />
  },
  {
    id: "05",
    title: "DevOps & Automation",
    desc: "Our DevOps and automation services streamline development and deployment processes. We automate workflows, improve CI/CD pipelines, and enhance system reliability to help businesses deliver faster and smarter.",
    icon: <FaHeadset size={20} />
  },
  {
    id: "06",
    title: "Monitoring & Cost Optimization",
    desc: "We provide cloud monitoring and cost optimization services to track performance, detect issues early, and reduce unnecessary cloud spending. Our solutions help you achieve efficiency without compromising performance.",
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
