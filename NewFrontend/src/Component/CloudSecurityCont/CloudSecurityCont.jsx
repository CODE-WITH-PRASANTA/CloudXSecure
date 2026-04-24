import React, { useState } from "react";
import "./CloudSecurityCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const CloudSecurityCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="csc">

{/* IMAGE */}
<div className="csc__imageWrap">
  <img src={serviceImg} alt="Cloud Security Services" />
</div>

{/* TITLE */}
<h2 className="csc__title">
  Best Cloud Security Solutions with CloudXSecure
</h2>

{/* TEXT */}
<p className="csc__text">
  At Cloudxsecure, we provide advanced cloud security services designed to
  protect your business data, applications, and infrastructure from evolving
  cyber threats. With CloudX secure, organizations can ensure end-to-end data
  protection, secure access control, and compliance with industry standards while
  operating in cloud environments.
</p>

<p className="csc__text">
  CloudxSecure integrates powerful IT management practices such as real-time
  threat monitoring, data encryption, vulnerability assessment, and automated
  security updates. These solutions help businesses maintain secure, reliable,
  and high-performing systems while minimizing risks and ensuring uninterrupted
  operations.
</p>

{/* CARDS */}
<div className="csc__cards">

  {/* LEFT CARD */}
  <div className="csc__card">
    <h3>Why Choose CloudXSecure</h3>

    <p>
      CloudxSecure delivers enterprise-grade cloud security solutions backed by
      intelligent IT management, ensuring your digital assets remain protected
      and your business stays resilient.
    </p>

    <ul className="csc__list">
      <li><span className="csc__arrow">→</span> Advanced Threat Detection & Prevention</li>
      <li><span className="csc__arrow">→</span> Data Encryption & Secure Access Control</li>
      <li><span className="csc__arrow">→</span> Continuous Monitoring & Compliance Management</li>
    </ul>
  </div>

  {/* RIGHT CARD */}
  <div className="csc__card csc__card--highlight">
    <img src={iconImg} alt="icon" className="csc__customIcon" />
    <h3>Empowering Your Security</h3>

    <p>
      With CloudX secure, businesses benefit from integrated IT management
      applications such as security monitoring, risk assessment, identity and
      access management, and disaster recovery planning. Cloudxsecure ensures
      your cloud infrastructure remains secure, scalable, and optimized to
      support business continuity and digital growth.
    </p>
  </div>

</div>

      {/* FAQ */}
<div className="csc__faq">
  <h2>Frequently Asked Questions</h2>

  {[0, 1, 2].map((item, i) => (
    <div key={i} className="csc__faqItem">

      <div
        className="csc__faqHeader"
        onClick={() => toggle(i)}
      >
        <span>
          {i === 0 && "What cloud security services does CloudXSecure provide?"}
          {i === 1 && "How does Cloudxsecure protect data in cloud environments?"}
          {i === 2 && "Why is CloudX secure important for business IT management?"}
        </span>

        <FiPlus
          className={`csc__plus ${active === i ? "active" : ""}`}
        />
      </div>

      <div
        className={`csc__faqBody ${
          active === i ? "open" : ""
        }`}
      >
        <p>
          {i === 0 &&
            "CloudxSecure offers comprehensive cloud security services including threat detection, data encryption, identity and access management, compliance monitoring, and disaster recovery solutions. With CloudX secure, businesses can safeguard their cloud infrastructure and ensure secure operations."}

          {i === 1 &&
            "Cloudxsecure protects data through advanced encryption, secure access controls, continuous monitoring, and vulnerability assessments. CloudXSecure ensures that sensitive business data remains protected from cyber threats while maintaining high system performance."}

          {i === 2 &&
            "CloudX secure plays a crucial role in IT management by ensuring data protection, system reliability, and compliance with security standards. CloudxSecure integrates security with IT operations to provide businesses with a safe, scalable, and efficient cloud environment."}
        </p>
      </div>

    </div>
  ))}
</div>

    </div>
  );
};

export default CloudSecurityCont;