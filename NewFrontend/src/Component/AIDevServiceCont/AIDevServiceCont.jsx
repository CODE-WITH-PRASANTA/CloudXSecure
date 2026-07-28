import React, { useState } from "react";
import "./AIDevServiceCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const AIDevServiceCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you build custom AI models or integrate existing ones?",
      answer:
        "We primarily integrate, fine-tune, and deploy production-ready solutions using established AI models and APIs tailored directly to your enterprise requirements.",
    },
    {
      question: "What industries have you built AI solutions for?",
      answer:
        "We have deep, hands-on experience in real estate tech (including PropAssist AI) and actively build solutions across fintech, SaaS, e-commerce, and logistics.",
    },
    {
      question: "Do you handle the cloud infrastructure for AI apps too?",
      answer:
        "Yes — as cloud specialists, we build the full technology stack. We design optimized compute infrastructure, secure API gateways, and reliable production pipelines.",
    },
  ];

  return (
    <div className="aidevservicecont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="aidevservicecont__hero">
        <div className="aidevservicecont__imageWrap">
          <img
            src={serviceImg}
            alt="AI Development Services and Cloud Integration by CloudXSecure in Mumbai"
          />
        </div>
        <h1 className="aidevservicecont__h1">AI Development Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="aidevservicecont__intro">
        <h2 className="aidevservicecont__title">
          AI Solutions Built on Solid Cloud Foundations
        </h2>
        <p className="aidevservicecont__text">
          Bringing Artificial Intelligence into production requires more than just smart prompts — it demands scalable cloud architecture, fast API execution, and robust data security.
        </p>
        <p className="aidevservicecont__text">
          At <strong>CloudXSecure</strong>, our <strong>AI development services in Mumbai</strong> combine cutting-edge AI integration with battle-tested cloud infrastructure, ensuring your intelligent applications run securely and reliably at scale.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="aidevservicecont__cards">
        {/* WHAT WE OFFER */}
        <div className="aidevservicecont__card">
          <h3>What We Offer</h3>
          <p>
            End-to-end artificial intelligence engineering designed to deliver measurable business impact:
          </p>
          <ul className="aidevservicecont__list">
            <li><span className="aidevservicecont__arrow">→</span> Custom AI application development and enterprise tool integration</li>
            <li><span className="aidevservicecont__arrow">→</span> Scalable cloud infrastructure design for high-performance AI workloads</li>
            <li><span className="aidevservicecont__arrow">→</span> Secure API integration with leading LLMs and foundational models</li>
            <li><span className="aidevservicecont__arrow">→</span> Production-grade deployment with continuous monitoring and safeguards</li>
          </ul>
        </div>

        {/* PROVEN EXPERIENCE */}
        <div className="aidevservicecont__card aidevservicecont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure AI icon"
            className="aidevservicecont__customIcon"
          />
          <h3>Proven Experience: Real-World AI</h3>
          <p>
            We don't just consult — we build real products. We engineered and deployed <strong>PropAssist AI</strong>, an intelligent assistant built specifically for the real estate domain.
          </p>
          <ul className="aidevservicecont__list">
            <li><span className="aidevservicecont__arrow">→</span> <strong>From Concept to Launch:</strong> Practical experience bringing custom AI solutions to live market deployment.</li>
            <li><span className="aidevservicecont__arrow">→</span> <strong>Enterprise Scale:</strong> Designed for reliability, safety, and rapid customer response times.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="aidevservicecont__whyUs">
        <h2>Bridging the Gap Between AI and Cloud Infrastructure</h2>
        <blockquote className="aidevservicecont__quote">
          <p>
            An AI application is only as good as the infrastructure supporting it. We ensure your LLMs, databases, and microservices are architected for enterprise security, low latency, and cost efficiency.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="aidevservicecont__servicesNav">
        <h3>Explore Our Technical Offerings</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="aidevservicecont__links">
          <a href="/custom-software">Custom Software Development</a>
          <a href="/services/managed-cloud">Managed Cloud Services</a>
          <a href="/cloud-security">Cloud Security</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="aidevservicecont__ctaBox">
        <h3>See How AI Can Work for Your Business</h3>
        <p>Schedule a call with our team to explore custom AI integrations and cloud architectures built for your needs.</p>
        <a href="/contact" className="aidevservicecont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="aidevservicecont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="aidevservicecont__faqItem">
            <div
              className="aidevservicecont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`aidevservicecont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`aidevservicecont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIDevServiceCont;