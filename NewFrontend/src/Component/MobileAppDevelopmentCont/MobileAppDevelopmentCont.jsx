import React, { useState } from "react";
import "./MobileAppDevelopmentCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const MobileAppDevelopmentCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you build both frontend and backend?",
      answer:
        "Yes, we handle complete full-stack development, including cross-platform frontend interfaces and highly scalable cloud backend infrastructure.",
    },
    {
      question: "Can you take over an existing app's backend?",
      answer:
        "Yes, our engineering team can audit, optimize, migrate, and actively manage existing mobile application backends to improve reliability and security.",
    },
    {
      question: "How do you ensure app security?",
      answer:
        "We combine secure coding practices with robust infrastructure-level protection, end-to-end encryption, and dedicated VAPT security testing.",
    },
  ];

  return (
    <div className="mobileappcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="mobileappcont__hero">
        <div className="mobileappcont__imageWrap">
          <img
            src={serviceImg}
            alt="Mobile App Development Services in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="mobileappcont__h1">Mobile App Development Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="mobileappcont__intro">
        <h2 className="mobileappcont__title">
          Mobile Apps Backed by Secure Cloud Infrastructure
        </h2>
        <p className="mobileappcont__text">
          A great user interface is only half the battle. At <strong>CloudXSecure</strong>, we build high-performance mobile applications powered by cloud-native backends—ensuring your app stays fast, responsive, and secure as your user base expands.
        </p>
        <p className="mobileappcont__text">
          Whether you need native <strong>iOS and Android app development</strong> or cross-platform solutions in Mumbai, our engineering team builds modern mobile experiences backed by resilient AWS and Azure infrastructure.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="mobileappcont__cards">
        {/* WHAT WE OFFER */}
        <div className="mobileappcont__card">
          <h3>What We Offer</h3>
          <p>
            End-to-end mobile engineering designed for seamless scalability and performance:
          </p>
          <ul className="mobileappcont__list">
            <li><span className="mobileappcont__arrow">→</span> iOS and Android native and cross-platform app development</li>
            <li><span className="mobileappcont__arrow">→</span> High-throughput backend API development and integration</li>
            <li><span className="mobileappcont__arrow">→</span> Cloud infrastructure setup for mobile backends (AWS / Azure)</li>
            <li><span className="mobileappcont__arrow">→</span> Enterprise app security, data encryption, and compliance</li>
          </ul>
        </div>

        {/* WHY CLOUDXSECURE */}
        <div className="mobileappcont__card mobileappcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure mobile app development icon"
            className="mobileappcont__customIcon"
          />
          <h3>Why CloudXSecure</h3>
          <p>
            Most app developers focus purely on the frontend interface — we ensure the backend cloud infrastructure is scalable and secure from day one:
          </p>
          <ul className="mobileappcont__list">
            <li><span className="mobileappcont__arrow">→</span> <strong>Full-Stack Architecture:</strong> Seamless integration between mobile clients and cloud services.</li>
            <li><span className="mobileappcont__arrow">→</span> <strong>Security-First Approach:</strong> Built-in encryption, API protection, and VAPT validation.</li>
          </ul>
        </div>
      </div>

      {/* WHY US / BACKEND HIGHLIGHT */}
      <section className="mobileappcont__whyUs">
        <h2>Built to Handle Real-World Scale</h2>
        <blockquote className="mobileappcont__quote">
          <p>
            By designing mobile backends directly on modern cloud environments, we guarantee low latency, real-time sync, and uninterrupted uptime even during sudden viral user growth.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="mobileappcont__servicesNav">
        <h3>Explore Our Related Services</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="mobileappcont__links">
          <a href="/cloud-security">Cloud Security</a>
          <a href="/ai-development">AI Development</a>
          <a href="/custom-software-development">Custom Software Development</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="mobileappcont__ctaBox">
        <h3>Have an App Idea?</h3>
        <p>Let's scope your project together — build a secure, scalable mobile solution.</p>
        <a href="/contact" className="mobileappcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="mobileappcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="mobileappcont__faqItem">
            <div
              className="mobileappcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`mobileappcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`mobileappcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAppDevelopmentCont;