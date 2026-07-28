import React, { useState } from "react";
import "./ManageCloudCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const ManageCloudCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "How much does managed cloud service cost?",
      answer:
        "Pricing depends on the overall size and complexity of your infrastructure. Contact us for a custom quote based on your specific setup and operational needs.",
    },
    {
      question: "Do I need to switch cloud providers to use this service?",
      answer:
        "No — we manage your existing AWS or Azure environment as-is. No migration is required unless you specifically want to re-architect or move your workload.",
    },
    {
      question: "What happens if there's a server issue at night?",
      answer:
        "Our monitoring systems run continuously 24/7. We respond to and resolve critical incidents as soon as they are detected, regardless of the time.",
    },
  ];

  return (
    <div className="managecloudcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="managecloudcont__hero">
        <div className="managecloudcont__imageWrap">
          <img
            src={serviceImg}
            alt="24/7 Managed Cloud Services for AWS and Azure by CloudXSecure in Mumbai"
          />
        </div>
        <h1 className="managecloudcont__h1">Managed Cloud Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="managecloudcont__intro">
        <h2 className="managecloudcont__title">
          Run Your Cloud Infrastructure Without an In-House Team
        </h2>
        <p className="managecloudcont__text">
          Managing cloud infrastructure without dedicated in-house cloud engineers can lead to downtime, unpatched vulnerabilities, and spiraling cloud costs. 
        </p>
        <p className="managecloudcont__text">
          At <strong>CloudXSecure</strong>, our <strong>managed cloud services in Mumbai</strong> take that operational burden off your shoulders. We provide proactive 24/7 support for AWS and Azure so you can focus entirely on growing your core business.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="managecloudcont__cards">
        {/* WHAT'S INCLUDED */}
        <div className="managecloudcont__card">
          <h3>What's Included</h3>
          <p>
            Enterprise-grade monitoring and proactive cloud maintenance customized for your operational requirements:
          </p>
          <ul className="managecloudcont__list">
            <li><span className="managecloudcont__arrow">→</span> 24/7 real-time server and application monitoring</li>
            <li><span className="managecloudcont__arrow">→</span> Uptime management and rapid incident response</li>
            <li><span className="managecloudcont__arrow">→</span> Continuous cost optimization (reducing unnecessary cloud spend)</li>
            <li><span className="managecloudcont__arrow">→</span> Regular security patching, updates, and maintenance</li>
            <li><span className="managecloudcont__arrow">→</span> Automated backup setup and disaster recovery management</li>
            <li><span className="managecloudcont__arrow">→</span> Performance tuning and scaling as your business grows</li>
          </ul>
        </div>

        {/* WHO THIS IS FOR & PLATFORMS */}
        <div className="managecloudcont__card managecloudcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure managed cloud icon"
            className="managecloudcont__customIcon"
          />
          <h3>Platforms We Manage</h3>
          <p>
            We manage both <strong>AWS</strong> and <strong>Azure</strong> environments, tailoring our support to your current stack or guiding your choice if you're just starting:
          </p>
          <ul className="managecloudcont__list">
            <li><span className="managecloudcont__arrow">→</span> <strong>SMBs & Scale-Ups:</strong> Ideal for organizations seeking enterprise reliability without the overhead of an internal cloud team.</li>
            <li><span className="managecloudcont__arrow">→</span> <strong>Hybrid & Multi-Cloud:</strong> Businesses requiring specialized maintenance, patching, and budget control.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="managecloudcont__whyUs">
        <h2>Proactive Maintenance, Not Reactive Firefighting</h2>
        <blockquote className="managecloudcont__quote">
          <p>
            We don't wait for things to break. Our automated alerts and continuous auditing ensure security patches, performance bottlenecks, and resource bloat are resolved before they impact your users.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="managecloudcont__servicesNav">
        <h3>Explore Our Cloud Solutions</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="managecloudcont__links">
          <a href="/cloud-migration">Cloud Migration</a>
          <a href="/cloud-security">Cloud Security</a>
          <a href="/aws-consulting">AWS Consulting</a>
          <a href="/azure-consulting">Azure Consulting</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="managecloudcont__ctaBox">
        <h3>Stop Firefighting Your Infrastructure</h3>
        <p>Let us handle your 24/7 cloud operations while you focus on driving your core product forward.</p>
        <a href="/contact" className="managecloudcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="managecloudcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="managecloudcont__faqItem">
            <div
              className="managecloudcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`managecloudcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`managecloudcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCloudCont;