import React, { useState } from "react";
import "./CloudHostingCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const CloudHostingCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="chostcont">

      {/* IMAGE */}
      <div className="chostcont__imageWrap">
        <img src={serviceImg} alt="CloudXSecure cloud hosting services" />
      </div>

      {/* TITLE */}
      <h2 className="chostcont__title">
        CloudXSecure – Advanced Cloud Hosting & IT Management Solutions
      </h2>

      {/* TEXT */}
      <p className="chostcont__text">
        <strong>Cloudxsecure</strong> delivers next-generation cloud hosting
        services designed for performance, security, and scalability. Whether
        you're a startup or an enterprise, <strong>CloudX secure</strong> ensures
        high-speed infrastructure, reliable uptime, and advanced protection for
        your digital assets.
      </p>

      <p className="chostcont__text">
        With <strong>CloudxSecure</strong>, businesses can streamline operations,
        reduce infrastructure costs, and deploy applications seamlessly. Our
        intelligent cloud ecosystem supports modern IT management, including
        server monitoring, automated backups, disaster recovery, and secure data
        storage solutions.
      </p>

      {/* CARDS */}
      <div className="chostcont__cards">

        {/* LEFT CARD */}
        <div className="chostcont__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
            <strong>Cloudxsecure</strong> provides reliable and scalable cloud
            hosting backed by cutting-edge technology and expert IT management
            support.
          </p>

          <ul className="chostcont__list">
            <li>
              <span className="chostcont__arrow">→</span> Secure Cloud Infrastructure
            </li>
            <li>
              <span className="chostcont__arrow">→</span> 99.9% Uptime & Performance
            </li>
            <li>
              <span className="chostcont__arrow">→</span> 24/7 IT Management Support
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="chostcont__card chostcont__card--highlight">
          <img src={iconImg} alt="CloudXSecure IT management icon" className="chostcont__customIcon" />
          <h3>Empowering Your Business with CloudXSecure</h3>

          <p>
            <strong>CloudX secure</strong> empowers businesses with robust IT
            management solutions, including cloud migration, infrastructure
            optimization, cybersecurity protection, and real-time analytics.
            <strong> CloudxSecure</strong> helps organizations innovate faster,
            improve efficiency, and maintain complete control over their cloud
            environment.
          </p>
        </div>

      </div>

      {/* FAQ */}
     <div className="chostcont__faq">
  <h2>Frequently Asked Questions</h2>

  {[0, 1, 2, 3].map((item, i) => (
    <div key={i} className="chostcont__faqItem">

      <div
        className="chostcont__faqHeader"
        onClick={() => toggle(i)}
      >
        <span>
          {i === 0 && "What is CloudXSecure cloud hosting service?"}
          {i === 1 && "How secure is CloudX secure hosting?"}
          {i === 2 && "What IT management services does CloudxSecure provide?"}
          {i === 3 && "Who should use Cloudxsecure cloud solutions?"}
        </span>

        <FiPlus
          className={`chostcont__plus ${active === i ? "active" : ""}`}
        />
      </div>

      <div
        className={`chostcont__faqBody ${
          active === i ? "open" : ""
        }`}
      >
        <p>
          {i === 0 &&
            "Cloudxsecure is a modern cloud hosting platform that provides scalable, high-performance infrastructure for websites, applications, and enterprise systems. CloudXSecure ensures fast deployment, reliability, and seamless cloud experience."}

          {i === 1 &&
            "CloudX secure uses advanced security protocols including data encryption, firewall protection, continuous monitoring, and automated backups to keep your data safe and protected from threats."}

          {i === 2 &&
            "CloudxSecure offers comprehensive IT management services such as server monitoring, cloud migration, infrastructure optimization, disaster recovery, and 24/7 technical support to ensure smooth operations."}

          {i === 3 &&
            "Cloudxsecure is ideal for startups, growing businesses, and enterprises that need reliable cloud hosting, secure data management, and scalable IT infrastructure to support their digital growth."}
        </p>
      </div>

    </div>
  ))}
</div>

    </div>
  );
};

export default CloudHostingCont;