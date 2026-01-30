import React from "react";
import "./BDFinanceHero.css";
import bgImage from "../../assets/choose_bg.jpg";

const progressData = [
  { title: "Cloud Backup & Recovery", value: 85 },
  { title: "Web & App Protection", value: 76 },
  { title: "Managed Cloud Solutions", value: 90 },
];

const BDFinanceHero = () => {
  return (
    <section
      className="finance-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="finance-overlay"></div>

      <div className="finance-container">
        {/* LEFT CONTENT */}
        <div className="finance-left">
          <h1>
           Secure Backup, Cloud Recovery & Digital <br />
            Solutions for Your Business
          </h1>
          <p>
            CloudXSecure delivers enterprise-grade backup and disaster recovery services combined with secure cloud infrastructure, professional web design, and scalable app development. We help businesses protect critical data, restore applications quickly, and maintain continuous operations during disruptions.
          </p>

          <div className="finance-video">
            <div className="play-btn">▶</div>
            <span>Watch Video</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="finance-card">
          <span className="badge">WHY CLOUDXSECURE</span>
          <h2>
           Secure Cloud Backup & Disaster Recovery  <br /> Solutions
          </h2>
          <p>
           CloudXSecure provides reliable backup and disaster recovery services to protect your cloud systems, websites, and applications. Our secure cloud solutions ensure fast recovery, data protection, and uninterrupted business operations.
          </p>

          {progressData.map((item, index) => (
            <div className="progress-box" key={index}>
              <div className="progress-title">
                <span>{item.title}</span>
                <span className="progress-value">{item.value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDFinanceHero;
