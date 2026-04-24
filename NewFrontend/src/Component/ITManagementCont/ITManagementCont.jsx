import React, { useState } from "react";
import "./ITManagementCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const ITManagementCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="itm">
      {/* IMAGE */}
      <div className="itm__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      <h2 className="itm__title">
        Best Solutions for IT Management with CloudXSecure
      </h2>

      {/* TEXT */}
      <p className="itm__text">
        At Cloudxsecure, we deliver cutting-edge IT management services designed
        to help businesses scale securely, efficiently, and intelligently.
        Whether you're a startup or an enterprise, CloudX secure ensures
        seamless infrastructure, optimized performance, and proactive security
        across all your systems.
      </p>

      <p className="itm__text">
        Our mission at CloudxSecure is to simplify complex IT environments while
        maximizing uptime, data protection, and operational efficiency.
      </p>

      {/* CARDS */}
      <div className="itm__cards">
        {/* LEFT CARD */}
        <div className="itm__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
            Choosing Cloudxsecure means choosing reliability, innovation, and
            future-ready IT solutions.
          </p>

          <ul className="itm__list">
            <li>
              <span className="itm__arrow">→</span> 24/7 Monitoring & Support
            </li>
            <li>
              <span className="itm__arrow">→</span> Advanced Cybersecurity
              Solutions
            </li>
            <li>
              <span className="itm__arrow">→</span> Scalable Cloud
              Infrastructure
            </li>
            <li>
              <span className="itm__arrow">→</span> Cost-Optimized IT Operations
            </li>
            <li>
              <span className="itm__arrow">→</span> Expert IT Consultation &
              Strategy
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="itm__card itm__card--highlight">
          <img src={iconImg} alt="icon" className="itm__customIcon" />
          <h3>Empowering Your Business Success</h3>

          <p>
            At CloudxSecure, we empower organizations by delivering smart IT
            management strategies that align with business goals. From cloud
            computing to network management, our services are built to enhance
            productivity, reduce downtime, and secure digital assets.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="itm__faq">
        <h2>Frequently Asked Questions</h2>

        {[0, 1, 2].map((item, i) => (
          <div key={i} className="itm__faqItem">
            <div className="itm__faqHeader" onClick={() => toggle(i)}>
              <span>
                {i === 0 &&
                  "What IT management services does CloudXSecure provide?"}
                {i === 1 && "Which regions does Cloudxsecure serve?"}
                {i === 2 &&
                  "What industries benefit from CloudX secure solutions?"}
              </span>

              <FiPlus className={`itm__plus ${active === i ? "active" : ""}`} />
            </div>

            <div className={`itm__faqBody ${active === i ? "open" : ""}`}>
              <p>
                {i === 0 &&
                  "CloudxSecure offers comprehensive IT management services including cloud infrastructure management, 24/7 network monitoring, cybersecurity solutions, data backup and disaster recovery, and dedicated IT support. With CloudX secure, businesses can optimize performance, enhance security, and reduce operational costs through scalable and reliable technology solutions."}

                {i === 1 &&
                  "Cloudxsecure serves clients globally, supporting businesses across North America, Europe, Asia, and emerging markets. CloudXSecure ensures seamless remote IT management, enabling companies to maintain secure and efficient operations regardless of their location."}

                {i === 2 &&
                  "CloudX secure solutions are widely used across industries such as healthcare, finance, e-commerce, education, and corporate enterprises. CloudxSecure helps healthcare providers secure patient data, supports financial institutions with risk management, powers e-commerce platforms with high uptime, and enables businesses with scalable cloud-based IT infrastructure."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITManagementCont;
