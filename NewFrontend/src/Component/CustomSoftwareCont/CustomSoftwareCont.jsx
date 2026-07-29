import React, { useState } from "react";
import "./CustomSoftwareCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const CustomSoftwareCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "What's your development process?",
      answer:
        "Our process includes requirements gathering, architectural design, agile iterative sprint developments, thorough automated testing, and secure deployment accompanied by post-launch operational support.",
    },
    {
      question: "Can you take over an existing software project?",
      answer:
        "Yes, we can conduct comprehensive code audits, refactor legacy tech, and seamlessly continue engineering on your existing codebases.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing maintenance, infrastructure monitoring, and feature upgrades through our dedicated Managed Cloud Services.",
    },
  ];

  return (
    <div className="customsoftwarecont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="customsoftwarecont__hero">
        <div className="customsoftwarecont__imageWrap">
          <img
            src={serviceImg}
            alt="Custom Software Development Services and Cloud Architecture in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="customsoftwarecont__h1">Custom Software Development Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="customsoftwarecont__intro">
        <h2 className="customsoftwarecont__title">
          Software Built Right, From Infrastructure Up
        </h2>
        <p className="customsoftwarecont__text">
          Off-the-shelf software often forces your business into rigid workflows, while typical agencies build applications without considering long-term cloud stability or security.
        </p>
        <p className="customsoftwarecont__text">
          At <strong>CloudXSecure</strong>, we offer high-performance <strong>custom software development in Mumbai</strong> designed around your exact business needs. We integrate modern application design with secure, scalable cloud architecture right from day one.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="customsoftwarecont__cards">
        {/* WHAT WE BUILD */}
        <div className="customsoftwarecont__card">
          <h3>What We Build</h3>
          <p>
            Tailored digital solutions engineered for reliability, security, and seamless operational flow:
          </p>
          <ul className="customsoftwarecont__list">
            <li><span className="customsoftwarecont__arrow">→</span> Tailored business automation and workflow tools</li>
            <li><span className="customsoftwarecont__arrow">→</span> Internal management systems and enterprise portals</li>
            <li><span className="customsoftwarecont__arrow">→</span> Custom API integrations connecting your existing SaaS platforms</li>
            <li><span className="customsoftwarecont__arrow">→</span> Cloud-native microservices and scalable web applications</li>
          </ul>
        </div>

        {/* WHY CLOUDXSECURE */}
        <div className="customsoftwarecont__card customsoftwarecont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure software icon"
            className="customsoftwarecont__customIcon"
          />
          <h3>Why CloudXSecure</h3>
          <p>
            Most traditional software agencies outsource their cloud hosting and security management.
          </p>
          <ul className="customsoftwarecont__list">
            <li><span className="customsoftwarecont__arrow">→</span> <strong>Unified Ownership:</strong> We manage application coding, cloud infrastructure, and security together under one roof.</li>
            <li><span className="customsoftwarecont__arrow">→</span> <strong>Single Point of Accountability:</strong> No finger-pointing between developers and server administrators.</li>
          </ul>
        </div>
      </div>

      {/* WHY US / ARCHITECTURE SECTION */}
      <section className="customsoftwarecont__whyUs">
        <h2>Security and Scalability Baked In</h2>
        <blockquote className="customsoftwarecont__quote">
          <p>
            By designing the application logic alongside the cloud hosting framework, we eliminate performance bottlenecks, lower cloud costs, and safeguard your data against modern security threats.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="customsoftwarecont__servicesNav">
        <h3>Explore Our Development Capabilities</h3>
        <p>Looking for complementary solutions? Explore our specialized services:</p>
        <div className="customsoftwarecont__links">
          <a href="/web-development">Web Development</a>
          <a href="/services/ai-development">AI Development Services</a>
          <a href="/services/managed-cloud">Managed Cloud Services</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="customsoftwarecont__ctaBox">
        <h3>Have a Custom Software Need?</h3>
        <p>Let's talk about building a tailored, cloud-ready application that propels your business forward.</p>
        <a href="/contact" className="customsoftwarecont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="customsoftwarecont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="customsoftwarecont__faqItem">
            <div
              className="customsoftwarecont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`customsoftwarecont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`customsoftwarecont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSoftwareCont;