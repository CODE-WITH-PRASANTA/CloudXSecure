import React, { useState } from "react";
import "./DevOpsServicesCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const DevOpsServicesCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you set up Kubernetes from scratch?",
      answer:
        "Yes, we handle complete Kubernetes cluster setup, production-grade configuration, security hardening, and ongoing cluster management.",
    },
    {
      question: "What CI/CD tools do you work with?",
      answer:
        "We support all major platforms including GitHub Actions, GitLab CI, Jenkins, AWS CodePipeline, and Azure DevOps based on your tech stack.",
    },
    {
      question: "Can you improve an existing but messy CI/CD setup?",
      answer:
        "Yes, we regularly audit, clean up, and refactor existing deployment pipelines to eliminate bottlenecks and ensure reliable, lightning-fast releases.",
    },
  ];

  return (
    <div className="devopscont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="devopscont__hero">
        <div className="devopscont__imageWrap">
          <img
            src={serviceImg}
            alt="DevOps Services, CI/CD, and Kubernetes in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="devopscont__h1">DevOps Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="devopscont__intro">
        <h2 className="devopscont__title">
          Automate Your Way to Faster, More Reliable Releases
        </h2>
        <p className="devopscont__text">
          Manual deployments and inconsistent environments slow product teams down and increase the risk of downtime. 
        </p>
        <p className="devopscont__text">
          At <strong>CloudXSecure</strong>, we offer hands-on <strong>DevOps services in Mumbai</strong> — implementing end-to-end CI/CD pipeline automation, Infrastructure as Code, and container orchestration so your engineering team ships code faster with minimal friction.
        </p>
      </section>

      {/* CARDS GRID */}
      <div className="devopscont__cards">
        {/* WHAT OUR DEVOPS SERVICES COVER */}
        <div className="devopscont__card">
          <h3>What Our DevOps Services Cover</h3>
          <p>
            Automated deployment workflows designed to scale engineering efficiency and software stability:
          </p>
          <ul className="devopscont__list">
            <li><span className="devopscont__arrow">→</span> CI/CD pipeline setup & automation (GitHub Actions, GitLab CI, Jenkins)</li>
            <li><span className="devopscont__arrow">→</span> Production-grade Kubernetes setup and container orchestration</li>
            <li><span className="devopscont__arrow">→</span> Infrastructure as Code (IaC) implementation using Terraform</li>
            <li><span className="devopscont__arrow">→</span> Microservices containerization and Dockerization</li>
            <li><span className="devopscont__arrow">→</span> Automated software testing and continuous deployment workflows</li>
            <li><span className="devopscont__arrow">→</span> Comprehensive monitoring, logging, and alerting systems</li>
          </ul>
        </div>

        {/* WHO NEEDS DEVOPS SERVICES */}
        <div className="devopscont__card devopscont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure DevOps icon"
            className="devopscont__customIcon"
          />
          <h3>Who Needs DevOps Services</h3>
          <p>
            Our specialized DevOps automation solutions are engineered for growth-focused development teams:
          </p>
          <ul className="devopscont__list">
            <li><span className="devopscont__arrow">→</span> <strong>Manual Release Bottlenecks:</strong> Development teams relying on manual server setups and risky deployment scripts.</li>
            <li><span className="devopscont__arrow">→</span> <strong>Scaling Infrastructure:</strong> Organizations looking for reproducible, predictable cloud deployments across multi-cloud setups.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="devopscont__whyUs">
        <h2>DevSecOps: Security Baked In from the Start</h2>
        <blockquote className="devopscont__quote">
          <p>
            We don't treat security as an afterthought. We build automated security checks directly into your CI/CD pipelines so speed and safety walk hand-in-hand.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="devopscont__servicesNav">
        <h3>Explore Our Related Services</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="devopscont__links">
          <a href="/cloud-security">Cloud Security</a>
          <a href="/aws-consulting">AWS Consulting</a>
          <a href="/azure-consulting">Azure Consulting</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="devopscont__ctaBox">
        <h3>Ready to Ship Faster?</h3>
        <p>Let's automate your release pipeline — schedule a discussion with our engineers today.</p>
        <a href="/contact" className="devopscont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="devopscont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="devopscont__faqItem">
            <div
              className="devopscont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`devopscont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`devopscont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevOpsServicesCont;