import React, { useState } from "react";
import "./WebDevelopmentCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const WebDevelopmentCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you build on WordPress or custom code?",
      answer:
        "We work with both WordPress and modern custom code frameworks depending on your business requirements, scalability goals, and technical needs — fully evaluated during our initial consultation.",
    },
    {
      question: "Is hosting included?",
      answer:
        "We can set up, configure, and manage high-performance cloud hosting (AWS/Azure) for your website as part of our Managed Cloud Services.",
    },
    {
      question: "Do you offer ongoing website maintenance?",
      answer:
        "Yes, we provide continuous monitoring, performance tuning, regular updates, and security patching through our Managed Cloud Services.",
    },
  ];

  return (
    <div className="webdevcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="webdevcont__hero">
        <div className="webdevcont__imageWrap">
          <img
            src={serviceImg}
            alt="Cloud-Native Web Development Services in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="webdevcont__h1">Web Development Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="webdevcont__intro">
        <h2 className="webdevcont__title">
          Websites Built on Solid Cloud Infrastructure
        </h2>
        <p className="webdevcont__text">
          Unlike typical web agencies that focus solely on surface design, <strong>CloudXSecure</strong> builds high-performance web solutions with proper cloud architecture and robust security baked in from day one — not as an afterthought.
        </p>
        <p className="webdevcont__text">
          Whether you need <strong>cloud-native website development</strong> or custom web applications, our engineering team ensures your site is blazing fast, infinitely scalable, and protected against digital threats across modern AWS and Azure infrastructure.
        </p>
      </section>

      {/* PROCESS & SCOPE CARDS */}
      <div className="webdevcont__cards">
        {/* WHAT WE BUILD */}
        <div className="webdevcont__card">
          <h3>What We Build</h3>
          <p>
            We engineer tailored web solutions optimized for performance, seamless user experience, and growth:
          </p>
          <ul className="webdevcont__list">
            <li><span className="webdevcont__arrow">→</span> High-converting business and corporate marketing websites</li>
            <li><span className="webdevcont__arrow">→</span> Scalable, cloud-native web applications and portals</li>
            <li><span className="webdevcont__arrow">→</span> Secure e-commerce platforms tailored for speed and high traffic</li>
            <li><span className="webdevcont__arrow">→</span> Custom API integrations and backend microservices</li>
          </ul>
        </div>

        {/* WHY IT'S DIFFERENT WITH US */}
        <div className="webdevcont__card webdevcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure web development icon"
            className="webdevcont__customIcon"
          />
          <h3>Why It's Different With Us</h3>
          <p>
            We bridge the gap between frontend excellence and backend infrastructure:
          </p>
          <ul className="webdevcont__list">
            <li><span className="webdevcont__arrow">→</span> <strong>Cloud-Native Foundation:</strong> Every platform is deployed directly on secure, scalable cloud infrastructure (AWS / Azure).</li>
            <li><span className="webdevcont__arrow">→</span> <strong>Security & Speed First:</strong> Superior loading speeds, automatic scaling, and multi-layered protection built-in rather than bolted on later.</li>
          </ul>
        </div>
      </div>

      {/* WHY US / ARCHITECTURE SECTION */}
      <section className="webdevcont__whyUs">
        <h2>Built for Scale, Speed, and Security</h2>
        <blockquote className="webdevcont__quote">
          <p>
            Every web project we deploy leverages cloud best practices — ensuring zero downtime during traffic spikes, optimal search engine performance, and enterprise-grade security protocols.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="webdevcont__servicesNav">
        <h3>Explore Our Cloud & Tech Solutions</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="webdevcont__links">
          <a href="/managed-cloud-services">Managed Cloud Services</a>
          <a href="/cloud-security">Cloud Security</a>
          <a href="/custom-software-development">Custom Software Development</a>
          <a href="/contact">Contact Page</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="webdevcont__ctaBox">
        <h3>Get a Website Built on Solid Cloud Infrastructure</h3>
        <p>Build a secure, scalable web presence designed for high performance.</p>
        <a href="/contact" className="webdevcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="webdevcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="webdevcont__faqItem">
            <div
              className="webdevcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`webdevcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`webdevcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentCont;