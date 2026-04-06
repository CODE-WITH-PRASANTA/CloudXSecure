import React, { useState } from "react";
import "./BackupCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const faqData = [
  {
    question: "What backup and recovery services does CloudXSecure provide?",
    answer:
      "CloudXSecure provides backup and recovery services for cloud environments, servers, databases, business applications, and critical company data. We help businesses create reliable backup strategies, automate recovery processes, and reduce the risk of data loss caused by cyberattacks, accidental deletion, hardware failure, or system outages.",
  },
  {
    question: "Why is backup and recovery important for business continuity?",
    answer:
      "Backup and recovery play a major role in business continuity because they help organizations restore data quickly after unexpected incidents. A strong recovery plan reduces downtime, protects customer trust, and ensures important business operations can continue even during disruptions.",
  },
  {
    question: "Which businesses can benefit from backup and recovery solutions?",
    answer:
      "Backup and recovery solutions are essential for startups, eCommerce businesses, healthcare systems, financial organizations, SaaS platforms, and enterprises that manage important digital assets. Any business that relies on data, applications, or online services can benefit from a dependable backup and disaster recovery strategy.",
  },
];

const BackupCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="backup-cont">
      {/* IMAGE */}
      <div className="backup-cont__imageWrap">
        <img
          src={serviceImg}
          alt="CloudXSecure backup and recovery services for cloud infrastructure, servers, and business data"
        />
      </div>

      {/* TITLE */}
      <h1 className="backup-cont__title">
        CloudXSecure Backup & Recovery Services for Secure Data Protection and Fast Business Recovery
      </h1>

      {/* TEXT */}
      <p className="backup-cont__text">
        At <strong>CloudXSecure</strong>, our <strong>Backup & Recovery</strong>{" "}
        services are built to protect critical business data and keep operations
        running during unexpected disruptions. We help organizations create
        dependable backup systems for cloud platforms, servers, databases, and
        applications so important information is always secure, accessible, and
        ready to be restored when needed.
      </p>

      <p className="backup-cont__text">
        A reliable recovery strategy is not just about storing copies of data.
        It is about making sure your business can recover quickly after cyber
        incidents, accidental deletion, hardware failure, or service outages.
        CloudXSecure designs backup and disaster recovery solutions that reduce
        downtime, strengthen business continuity, and give teams confidence in
        their digital infrastructure.
      </p>

      {/* CARDS */}
      <div className="backup-cont__cards">
        {/* LEFT CARD */}
        <div className="backup-cont__card">
          <h3>Why Choose CloudXSecure Backup & Recovery</h3>

          <p>
            We help businesses protect valuable data, recover faster from
            disruptions, and maintain continuity with secure and practical backup
            solutions.
          </p>

          <ul className="backup-cont__list">
            <li>
              <span className="backup-cont__arrow">→</span> Secure backup for data,
              applications, and infrastructure
            </li>
            <li>
              <span className="backup-cont__arrow">→</span> Faster recovery after
              system failure or cyber incidents
            </li>
            <li>
              <span className="backup-cont__arrow">→</span> Improved business
              continuity and reduced downtime
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="backup-cont__card backup-cont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure backup and recovery expertise"
            className="backup-cont__customIcon"
          />
          <h3>Reliable Recovery for Modern Business Operations</h3>

          <p>
            CloudXSecure helps organizations stay prepared with backup and
            recovery solutions that protect critical systems and support fast
            restoration. Our approach is designed to improve resilience, secure
            business data, and keep operations moving without long interruptions.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="backup-cont__faq">
        <h2>CloudXSecure Backup & Recovery – Frequently Asked Questions</h2>

        {faqData.map((item, i) => (
          <div key={i} className="backup-cont__faqItem">
            <div
              className="backup-cont__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>

              <FiPlus
                className={`backup-cont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`backup-cont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackupCont;