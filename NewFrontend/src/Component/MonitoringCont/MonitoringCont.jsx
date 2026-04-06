import React, { useState } from "react";
import "./MonitoringCont.css";
import { FiPlus } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const faqData = [
  {
    question: "What monitoring services does CloudXSecure provide?",
    answer:
      "CloudXSecure provides end-to-end monitoring services for servers, cloud infrastructure, applications, websites, databases, and network environments. We help businesses track performance, uptime, security events, and system health in real time so issues can be identified and resolved before they affect users.",
  },
  {
    question: "Why is continuous infrastructure monitoring important?",
    answer:
      "Continuous monitoring is important because it helps businesses detect downtime, unusual activity, slow performance, and system failures early. With the right monitoring setup, your team gets better visibility into operations, improves reliability, and protects customer experience across critical digital platforms.",
  },
  {
    question: "Which businesses can benefit from monitoring solutions?",
    answer:
      "Monitoring solutions are valuable for startups, SaaS companies, eCommerce businesses, healthcare platforms, financial services, and growing enterprises. Any business that depends on websites, cloud systems, applications, or online services can benefit from proactive monitoring and faster issue response.",
  },
];

const MonitoringCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="monitor-cont">
      <div className="monitor-cont__container">
        {/* IMAGE */}
        <div className="monitor-cont__imageWrap">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
            alt="Cloud infrastructure monitoring dashboard and digital network"
            className="monitor-cont__image"
          />
        </div>

        {/* PAGE TITLE */}
        <h1 className="monitor-cont__title">
          CloudXSecure Monitoring Services – Real-Time Infrastructure &
          Performance Monitoring
        </h1>

        {/* SUBTITLE */}
        <h2 className="monitor-cont__subtitle">MONITORING</h2>

        {/* TEXT */}
        <p className="monitor-cont__text">
          At <strong>CloudXSecure</strong>, our{" "}
          <strong>Monitoring services</strong> are designed to keep your systems
          running smoothly, securely, and without interruption. We monitor cloud
          infrastructure, servers, applications, and networks in real time,
          ensuring that any issue is detected and resolved before it impacts your
          business operations.
        </p>

        <p className="monitor-cont__text">
          Our monitoring approach focuses on visibility, performance, and
          proactive issue detection. With advanced tools and smart automation,
          CloudXSecure helps businesses reduce downtime, improve system
          stability, and maintain a reliable digital environment that supports
          long-term growth.
        </p>

        {/* CARDS */}
        <div className="monitor-cont__cards">
          {/* LEFT CARD */}
          <div className="monitor-cont__card">
            <h3 className="monitor-cont__cardTitle">
              Why Choose CloudXSecure Monitoring
            </h3>

            <p className="monitor-cont__cardText">
              We deliver monitoring solutions that provide complete visibility,
              faster response times, and improved system reliability for modern
              businesses.
            </p>

            <ul className="monitor-cont__list">
              <li className="monitor-cont__listItem">
                <FiCheckCircle className="monitor-cont__listIcon" />
                24/7 real-time system monitoring
              </li>
              <li className="monitor-cont__listItem">
                <FiCheckCircle className="monitor-cont__listIcon" />
                Instant alerts and issue detection
              </li>
              <li className="monitor-cont__listItem">
                <FiCheckCircle className="monitor-cont__listIcon" />
                Better uptime and performance optimization
              </li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="monitor-cont__card monitor-cont__card--highlight">
            <div className="monitor-cont__customIcon">
              <span>01</span>
            </div>

            <h3 className="monitor-cont__cardTitle">
              Smart Monitoring for Modern Infrastructure
            </h3>

            <p className="monitor-cont__cardText">
              CloudXSecure empowers businesses with intelligent monitoring
              systems that ensure stability, security, and performance across
              cloud and IT environments. Our solutions are built to support
              growth while minimizing operational risks.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="monitor-cont__faq">
          <h2 className="monitor-cont__faqTitle">
            CloudXSecure Monitoring – Frequently Asked Questions
          </h2>

          {faqData.map((item, i) => (
            <div key={i} className="monitor-cont__faqItem">
              <div
                className="monitor-cont__faqHeader"
                onClick={() => toggle(i)}
              >
                <span>{item.question}</span>
                <FiPlus
                  className={`monitor-cont__plus ${
                    active === i ? "active" : ""
                  }`}
                />
              </div>

              <div
                className={`monitor-cont__faqBody ${
                  active === i ? "open" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringCont;