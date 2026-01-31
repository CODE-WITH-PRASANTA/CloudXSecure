import React from "react";
import "./ManagedCloudViewMore.css";
import { FiShield, FiCloud, FiDatabase } from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Cyber Security Solution",
    desc: "CloudXSecure delivers enterprise-grade cybersecurity solutions to protect your networks, applications, and data from modern cyber threats. Our security-first approach includes threat detection, access control, compliance management, and incident response to ensure business continuity and digital trust.",
    icon: <FiShield />
  },
  {
    id: "02",
    title: "Scalable Cloud Solutions",
    desc: "Our scalable cloud solutions enable businesses to grow faster with secure, high-performance cloud infrastructure. CloudXSecure designs, deploys, and manages flexible cloud environments that improve efficiency, reduce costs, and support seamless scalability across workloads.",
    icon: <FiCloud />
  },
  {
    id: "03",
    title: "Data Protection Services",
    desc: "CloudXSecure provides advanced data protection services to safeguard critical business information across cloud and on-premise systems. We implement secure backups, encryption, disaster recovery, and monitoring solutions to prevent data loss and ensure compliance.",
    icon: <FiDatabase />
  }
];

const ViewMoreServices = () => {
  return (
    <section className="managedcloud-services-section">
      <h2 className="managedcloud-services-title">View More Services</h2>

      <div className="managedcloud-services-grid">
        {services.map((item) => (
          <div className="managedcloud-services-card" key={item.id}>
            <div className="managedcloud-services-icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="managedcloud-services-footer">
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
