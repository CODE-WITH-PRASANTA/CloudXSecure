import React, { useState } from "react";
import "./ManageCloudCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const ManageCloudCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="mcc">
      {/* IMAGE */}
      <div className="mcc__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      {/* TITLE */}
      <h2 className="mcc__title">
        Best Managed Cloud Services with CloudXSecure
      </h2>

      {/* TEXT */}
      <p className="mcc__text">
        At Cloudxsecure, we provide advanced managed cloud services designed to
        help businesses scale efficiently, improve performance, and ensure
        maximum data security. With CloudX secure, organizations can seamlessly
        manage their cloud infrastructure while reducing operational complexity
        and IT costs.
      </p>

      <p className="mcc__text">
        CloudxSecure integrates powerful IT management solutions such as
        real-time monitoring, automated backups, and secure cloud hosting. This
        ensures high availability, faster system performance, and protection
        against downtime, enabling businesses to operate smoothly in a
        digital-first environment.
      </p>

      {/* CARDS */}
      <div className="mcc__cards">
        {/* LEFT CARD */}
        <div className="mcc__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
            CloudxSecure delivers reliable and scalable cloud solutions backed
            by expert IT management, helping businesses achieve efficiency,
            security, and long-term growth.
          </p>

          <ul className="mcc__list">
            <li>
              <span className="mcc__arrow">→</span> 24/7 Cloud Monitoring &
              Support
            </li>
            <li>
              <span className="mcc__arrow">→</span> Secure Cloud Infrastructure
            </li>
            <li>
              <span className="mcc__arrow">→</span> Cost Optimization &
              Performance Scaling
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="mcc__card mcc__card--highlight">
          <img src={iconImg} alt="icon" className="mcc__customIcon" />
          <h3>Empowering Your Cloud Success</h3>

          <p>
            With CloudX secure, businesses benefit from integrated IT management
            applications such as cloud migration, disaster recovery, workload
            automation, and performance analytics. Cloudxsecure ensures your
            cloud environment is secure, scalable, and optimized to support
            business continuity and innovation.
          </p>
        </div>
      </div>

      {/* FAQ */}
 <div className="mcc__faq">
  <h2>Frequently Asked Questions</h2>

  {[0, 1, 2].map((item, i) => (
    <div key={i} className="mcc__faqItem">
      <div className="mcc__faqHeader" onClick={() => toggle(i)}>
        <span>
          {i === 0 && "What managed cloud services does CloudXSecure provide?"}
          {i === 1 && "How does Cloudxsecure ensure cloud security and performance?"}
          {i === 2 && "What are the benefits of using CloudX secure managed cloud solutions?"}
        </span>

        <FiPlus className={`mcc__plus ${active === i ? "active" : ""}`} />
      </div>

      <div className={`mcc__faqBody ${active === i ? "open" : ""}`}>
        <p>
          {i === 0 &&
            "CloudxSecure provides comprehensive managed cloud services including cloud hosting, infrastructure management, cloud migration, backup and disaster recovery, and 24/7 monitoring. With CloudX secure, businesses can efficiently manage their IT systems while improving scalability and reducing operational costs."}

          {i === 1 &&
            "Cloudxsecure ensures cloud security and performance through advanced monitoring, data encryption, threat detection, and automated system optimization. CloudXSecure integrates IT management tools to maintain high uptime, fast performance, and secure cloud environments."}

          {i === 2 &&
            "CloudX secure managed cloud solutions offer benefits such as improved scalability, cost optimization, enhanced data protection, and seamless business continuity. CloudxSecure helps organizations streamline operations while leveraging cloud technology for growth and innovation."}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default ManageCloudCont;
