import React, { useState } from "react";
import "./CloudMigrationCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const CloudMigrationCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="cloudmicont">
      {/* IMAGE */}
      <div className="cloudmicont__imageWrap">
        <img src={serviceImg} alt="CloudXSecure cloud migration services" />
      </div>

      {/* TITLE */}
      <h2 className="cloudmicont__title">
        CloudXSecure – Seamless Cloud Migration & IT Transformation
      </h2>

      {/* TEXT */}
      <p className="cloudmicont__text">
        <strong>Cloudxsecure</strong> offers secure and efficient cloud
        migration services designed to move your business infrastructure to the
        cloud without downtime or data loss. With <strong>CloudX secure</strong>
        , you can modernize legacy systems, enhance scalability, and ensure
        smooth digital transformation.
      </p>

      <p className="cloudmicont__text">
        <strong>CloudxSecure</strong> enables organizations to migrate
        applications, databases, and workloads with precision. Our solutions
        include automated migration tools, risk assessment, performance
        optimization, and ongoing IT management to ensure your cloud environment
        runs efficiently and securely.
      </p>

      {/* CARDS */}
      <div className="cloudmicont__cards">
        {/* LEFT CARD */}
        <div className="cloudmicont__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
            <strong>Cloudxsecure</strong> delivers reliable cloud migration
            backed by advanced tools and expert IT management support for
            businesses of all sizes.
          </p>

          <ul className="cloudmicont__list">
            <li>
              <span className="cloudmicont__arrow">→</span> Zero Downtime
              Migration
            </li>
            <li>
              <span className="cloudmicont__arrow">→</span> Secure Data Transfer
              & Backup
            </li>
            <li>
              <span className="cloudmicont__arrow">→</span> 24/7 IT Management &
              Monitoring
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="cloudmicont__card cloudmicont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure cloud migration icon"
            className="cloudmicont__customIcon"
          />
          <h3>Transform Your Business with CloudXSecure</h3>

          <p>
            <strong>CloudX secure</strong> helps businesses accelerate
            innovation through seamless cloud migration, infrastructure
            modernization, and advanced IT management solutions.{" "}
            <strong>CloudxSecure</strong> supports workload optimization,
            disaster recovery planning, hybrid cloud setup, and real-time
            performance monitoring to ensure long-term success in the cloud.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="cloudmicont__faq">
        <h2>Frequently Asked Questions</h2>

        {[0, 1, 2, 3].map((item, i) => (
          <div key={i} className="cloudmicont__faqItem">
            <div className="cloudmicont__faqHeader" onClick={() => toggle(i)}>
              <span>
                {i === 0 && "What is CloudXSecure cloud migration service?"}
                {i === 1 &&
                  "Is CloudX secure migration safe for sensitive data?"}
                {i === 2 &&
                  "What IT management support does CloudxSecure provide after migration?"}
                {i === 3 && "How long does Cloudxsecure migration take?"}
              </span>

              <FiPlus
                className={`cloudmicont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`cloudmicont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>
                {i === 0 &&
                  "Cloudxsecure cloud migration service helps businesses move applications, data, and infrastructure from on-premise or legacy systems to a secure and scalable cloud environment with minimal downtime."}

                {i === 1 &&
                  "Yes, CloudX secure uses advanced encryption, secure transfer protocols, and continuous monitoring to ensure all sensitive data is protected during and after migration."}

                {i === 2 &&
                  "CloudxSecure provides complete IT management support including server monitoring, performance optimization, backup management, disaster recovery, and 24/7 technical assistance after migration."}

                {i === 3 &&
                  "Cloudxsecure migration timelines depend on the size and complexity of your infrastructure, but our optimized process ensures fast, efficient, and low-risk migration with minimal disruption."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudMigrationCont;
