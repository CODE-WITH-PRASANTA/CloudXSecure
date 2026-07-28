import React, { useState } from "react";
import "./ITInfraConsultCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const ITInfraConsultCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you handle both hardware setup and configuration?",
      answer:
        "We handle configuration, troubleshooting, and optimization of routers, switches, and network hardware. Specific hardware procurement is discussed based on your setup requirements.",
    },
    {
      question: "Can you connect our office network securely to our cloud infrastructure?",
      answer:
        "Yes — this is one of our core strengths, since we manage cloud, security, and networking together rather than as separate, disconnected services.",
    },
    {
      question: "Do you audit existing networks, or only set up new ones?",
      answer:
        "Both. We can audit an existing network for performance and security issues, or design and set up a new network from scratch.",
    },
  ];

  return (
    <div className="itinfraconsultcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="itinfraconsultcont__hero">
        <div className="itinfraconsultcont__imageWrap">
          <img
            src={serviceImg}
            alt="IT Infrastructure Consulting and Network Design by CloudXSecure in Mumbai"
          />
        </div>
        <h1 className="itinfraconsultcont__h1">IT Infrastructure Consulting</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="itinfraconsultcont__intro">
        <h2 className="itinfraconsultcont__title">
          Network Foundations That Support Your Business, Not Slow It Down
        </h2>
        <p className="itinfraconsultcont__text">
          A business’s cloud and security setup is only as strong as the network underneath it. Disconnected on-premise networks often lead to bandwidth bottlenecks, security vulnerabilities, and frequent downtime.
        </p>
        <p className="itinfraconsultcont__text">
          At <strong>CloudXSecure</strong>, our <strong>IT infrastructure consulting in Mumbai</strong> covers end-to-end network design, router and switch configuration, and connectivity planning — engineered specifically to support the secure cloud environments we manage.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="itinfraconsultcont__cards">
        {/* WHAT WE COVER */}
        <div className="itinfraconsultcont__card">
          <h3>What Our IT Infrastructure Consulting Covers</h3>
          <p>
            Comprehensive network engineering and connectivity solutions built for high uptime and performance:
          </p>
          <ul className="itinfraconsultcont__list">
            <li><span className="itinfraconsultcont__arrow">→</span> Network design and planning (LAN/WAN architecture)</li>
            <li><span className="itinfraconsultcont__arrow">→</span> Router and switch configuration, optimization, and troubleshooting</li>
            <li><span className="itinfraconsultcont__arrow">→</span> Next-gen firewall setup and network security policy configuration</li>
            <li><span className="itinfraconsultcont__arrow">→</span> Enterprise Wi-Fi and connectivity optimization for office environments</li>
            <li><span className="itinfraconsultcont__arrow">→</span> In-depth network audits to identify performance and security gaps</li>
            <li><span className="itinfraconsultcont__arrow">→</span> Hybrid connectivity between on-premise networks and cloud environments (AWS/Azure)</li>
          </ul>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="itinfraconsultcont__card itinfraconsultcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure IT infrastructure icon"
            className="itinfraconsultcont__customIcon"
          />
          <h3>Who This Is For</h3>
          <p>
            Tailored infrastructure solutions for modern growing organizations:
          </p>
          <ul className="itinfraconsultcont__list">
            <li><span className="itinfraconsultcont__arrow">→</span> <strong>New Office Setups:</strong> Growing businesses setting up high-performance, secure office networks from scratch.</li>
            <li><span className="itinfraconsultcont__arrow">→</span> <strong>Legacy Infrastructure Upgrades:</strong> Companies with existing networks that are slow, insecure, or poorly documented.</li>
            <li><span className="itinfraconsultcont__arrow">→</span> <strong>Hybrid Workforces:</strong> Businesses that rely on cloud platforms and need seamless, secure connectivity between physical offices and the cloud.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="itinfraconsultcont__whyUs">
        <h2>Why CloudXSecure for IT Infrastructure?</h2>
        <blockquote className="itinfraconsultcont__quote">
          <p>
            Most IT infrastructure providers stop at the physical network. We connect network infrastructure directly to your cloud and security setup — since we manage both, there's no gap between your on-premise network and your cloud environment, and no finger-pointing between vendors when something goes wrong.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="itinfraconsultcont__servicesNav">
        <h3>Explore Our Related Offerings</h3>
        <p>Looking for broader cloud and security solutions? Check out our services:</p>
        <div className="itinfraconsultcont__links">
          <a href="/cloud-security">Cloud Security</a>
          <a href="/services/managed-cloud">Managed Cloud Services</a>
          <a href="/services/aws-consulting">AWS Consulting</a>
          <a href="/services/azure-consulting">Azure Consulting</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="itinfraconsultcont__ctaBox">
        <h3>Get Your Network Audited</h3>
        <p>Find hidden vulnerabilities and performance bottlenecks before they cause downtime for your business.</p>
        <a href="/contact" className="itinfraconsultcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="itinfraconsultcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="itinfraconsultcont__faqItem">
            <div
              className="itinfraconsultcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`itinfraconsultcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`itinfraconsultcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITInfraConsultCont;