import React from "react";
import "./FeatureOne.css";

import img1 from "../../assets/feature-one-img-1-1.webp";
import img2 from "../../assets/feature-one-img-1-2.webp";
import img3 from "../../assets/feature-one-img-1-3.webp";
import waveShape from "../../assets/feature-one-shape-3.webp";

const features = [
  {
    img: img1,
    title: "Security Services",
    desc: "CloudXSecure provides enterprise-level website security with encrypted architecture, malware defense, server hardening, and real-time threat monitoring.Our secure development workflow protects your data, users, and online operations from evolving cyber threats.",
  },
  {
    img: img2,
    title: "Data Privacy",
    desc: "We ensure strict data privacy through encrypted databases, secure API communication, and GDPR-aligned practices.CloudXSecure safeguards sensitive customer information while maintaining confidentiality, compliance, and integrity across all systems.",
  },
  {
    img: img3,
    title: "Industry Certified",
    desc: "CloudXSecure follows ISO-27001, OWASP Top-10, and global development security standards.our certified coding methods ensure your website is built with maximum security, performance, reliability, and long-term scalability.",
  },
];

const FeatureOne = () => {
  return (
    <section className="feature1-section">
      {/* Animated gradient overlay */}
      <div className="feature1-gradient"></div>

      <div className="feature1-container">
        {features.map((item, index) => (
          <div className="feature1-card" key={index}>
            <div className="feature1-img">
              <img src={item.img} alt={item.title} />
            </div>

            <h3 className="feature1-title">{item.title}</h3>
            <p className="feature1-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Animated wave shape */}
      <img src={waveShape} alt="" className="feature1-wave" />
    </section>
  );
};

export default FeatureOne;
