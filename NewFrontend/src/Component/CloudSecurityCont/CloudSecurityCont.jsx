import React, { useState } from "react";
import "./CloudSecurityCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const CloudSecurityCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "What is VAPT?",
      answer:
        "VAPT stands for Vulnerability Assessment and Penetration Testing — a comprehensive process of identifying and actively testing security weaknesses in your systems before real attackers can exploit them.",
    },
    {
      question: "How often should we run a VAPT?",
      answer:
        "We recommend conducting a full VAPT assessment at least once a year, or immediately following any major infrastructure updates, cloud migrations, or application releases.",
    },
    {
      question: "Do you provide a compliance report after testing?",
      answer:
        "Yes, we deliver a comprehensive security and remediation report tailored for both internal engineering teams and external compliance or audit purposes.",
    },
  ];

  return (
    <div className="cloudseccont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="cloudseccont__hero">
        <div className="cloudseccont__imageWrap">
          <img
            src={serviceImg}
            alt="Cloud Security and VAPT Services in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="cloudseccont__h1">Cloud Security Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="cloudseccont__intro">
        <h2 className="cloudseccont__title">
          Protect Your Cloud Infrastructure Before It's Compromised
        </h2>
        <p className="cloudseccont__text">
          Misconfigured cloud environments are one of the leading causes of modern data breaches. Without rigorous testing, open storage buckets, overly permissive access roles, and unpatched vulnerabilities can expose your sensitive business assets to threat actors.
        </p>
        <p className="cloudseccont__text">
          At <strong>CloudXSecure</strong>, we provide specialized <strong>VAPT services in Mumbai</strong> and cloud security audits for AWS and Azure. Our cybersecurity team proactively identifies, tests, and fixes security gaps before attackers can exploit them.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="cloudseccont__cards">
        {/* WHAT OUR CLOUD SECURITY SERVICES COVER */}
        <div className="cloudseccont__card">
          <h3>What Our Cloud Security Services Cover</h3>
          <p>
            Comprehensive security evaluations designed to fortify every layer of your digital stack:
          </p>
          <ul className="cloudseccont__list">
            <li><span className="cloudseccont__arrow">→</span> Vulnerability Assessment and Penetration Testing (VAPT)</li>
            <li><span className="cloudseccont__arrow">→</span> Cloud configuration audits (IAM, network security, storage buckets)</li>
            <li><span className="cloudseccont__arrow">→</span> Regulatory and industry security compliance support</li>
            <li><span className="cloudseccont__arrow">→</span> Incident response planning and threat mitigation</li>
            <li><span className="cloudseccont__arrow">→</span> Ongoing continuous security and threat monitoring</li>
          </ul>
        </div>

        {/* WHO NEEDS THIS */}
        <div className="cloudseccont__card cloudseccont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure cloud security icon"
            className="cloudseccont__customIcon"
          />
          <h3>Who Needs Cloud Security</h3>
          <p>
            Proactive security audits are critical for organizations seeking to protect operational integrity:
          </p>
          <ul className="cloudseccont__list">
            <li><span className="cloudseccont__arrow">→</span> <strong>Data-Sensitive Businesses:</strong> Organizations handling customer financial, personal, or healthcare data.</li>
            <li><span className="cloudseccont__arrow">→</span> <strong>Audit Prep & Compliance:</strong> Companies preparing for regulatory security audits or investor reviews.</li>
            <li><span className="cloudseccont__arrow">→</span> <strong>Outdated Assessments:</strong> Any business that hasn't conducted a cloud security evaluation in the last 12 months.</li>
          </ul>
        </div>
      </div>

      {/* OUR APPROACH SECTION */}
      <section className="cloudseccont__whyUs">
        <h2>Our Multi-Layered Testing Approach</h2>
        <blockquote className="cloudseccont__quote">
          <p>
            We combine industry-standard automated tools (OWASP ZAP, Nessus, Burp Suite) with manual penetration testing to uncover complex vulnerabilities that automated scanners miss, delivering a clear, prioritized remediation roadmap.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="cloudseccont__servicesNav">
        <h3>Explore Our Related Services</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="cloudseccont__links">
          <a href="/cloud-migration">Cloud Migration</a>
          <a href="/managed-cloud-services">Managed Cloud Services</a>
          <a href="/devops-services">DevOps Services</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="cloudseccont__ctaBox">
        <h3>Find Your Vulnerabilities Before Attackers Do</h3>
        <p>Get a free initial cloud security consultation and safeguard your assets today.</p>
        <a href="/contact" className="cloudseccont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="cloudseccont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="cloudseccont__faqItem">
            <div
              className="cloudseccont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`cloudseccont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`cloudseccont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudSecurityCont;