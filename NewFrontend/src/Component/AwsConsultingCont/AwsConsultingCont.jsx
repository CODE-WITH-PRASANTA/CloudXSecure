import React, { useState } from "react";
import "./AwsConsultingCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const AwsConsultingCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "What does AWS consulting typically include?",
      answer:
        "An assessment of your current or planned AWS usage, architecture recommendations, cost-saving opportunities, and a clear roadmap for implementation.",
    },
    {
      question: "Do you help with AWS billing issues?",
      answer:
        "Yes — we regularly identify and eliminate wasted AWS spend through right-sizing, instance cleanup, and reserved capacity planning.",
    },
    {
      question: "Can you help if I'm just starting out on AWS?",
      answer:
        "Absolutely — we help design your cloud architecture correctly from the start, avoiding costly rework, security risks, and technical debt later.",
    },
  ];

  return (
    <div className="awsconsultcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="awsconsultcont__hero">
        <div className="awsconsultcont__imageWrap">
          <img
            src={serviceImg}
            alt="AWS Consulting Services in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="awsconsultcont__h1">AWS Consulting Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="awsconsultcont__intro">
        <h2 className="awsconsultcont__title">
          Get the Most Out of Amazon Web Services
        </h2>
        <p className="awsconsultcont__text">
          Many businesses use AWS but don't use it efficiently — overpaying for resources, missing security best practices, or lacking a scalable architecture. Without a clear cloud strategy, your environment can quickly become bloated and difficult to maintain.
        </p>
        <p className="awsconsultcont__text">
          At <strong>CloudXSecure</strong>, our expert <strong>AWS consulting in Mumbai</strong> helps you design, optimize, and run AWS infrastructure the right way from day one. We combine hands-on architecture expertise with a security-first mindset to deliver high-performing cloud solutions tailored to your business goals.
        </p>
      </section>

      {/* PROCESS & SCOPE CARDS */}
      <div className="awsconsultcont__cards">
        {/* WHAT OUR AWS CONSULTING COVERS */}
        <div className="awsconsultcont__card">
          <h3>What Our AWS Consulting Covers</h3>
          <p>
            We deliver actionable strategies and hands-on guidance across your cloud infrastructure:
          </p>
          <ul className="awsconsultcont__list">
            <li><span className="awsconsultcont__arrow">→</span> Cloud architecture design and structural review</li>
            <li><span className="awsconsultcont__arrow">→</span> Cost optimization and AWS billing analysis</li>
            <li><span className="awsconsultcont__arrow">→</span> Security configuration (IAM, VPC, encryption best practices)</li>
            <li><span className="awsconsultcont__arrow">→</span> Scalability and performance planning</li>
            <li><span className="awsconsultcont__arrow">→</span> AWS Well-Architected Framework reviews</li>
          </ul>
        </div>

        {/* WHO NEEDS AWS CONSULTING */}
        <div className="awsconsultcont__card awsconsultcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure AWS consulting icon"
            className="awsconsultcont__customIcon"
          />
          <h3>Who Needs AWS Consulting</h3>
          <p>
            Whether you are building from scratch or scaling an enterprise setup, we tailor our support to your exact stage:
          </p>
          <ul className="awsconsultcont__list">
            <li><span className="awsconsultcont__arrow">→</span> <strong>Startups:</strong> Moving to AWS for the first time and needing proper initial architecture setup.</li>
            <li><span className="awsconsultcont__arrow">→</span> <strong>Growing Businesses:</strong> Whose existing AWS setup has become costly, insecure, or hard to manage.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="awsconsultcont__whyUs">
        <h2>Why CloudXSecure for AWS Consulting?</h2>
        <blockquote className="awsconsultcont__quote">
          <p>
            We combine cloud architecture expertise with a security-first mindset — so your AWS environment isn't just functional, it's optimized, cost-effective, and fully protected from day one.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="awsconsultcont__servicesNav">
        <h3>Explore Our Cloud Solutions</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="awsconsultcont__links">
          <a href="/cloud-migration">Cloud Migration</a>
          <a href="/managed-cloud-services">Managed Cloud Services</a>
          <a href="/cloud-security">Cloud Security</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="awsconsultcont__ctaBox">
        <h3>Ready to Optimize Your Cloud Infrastructure?</h3>
        <p>Get a free AWS architecture review — no cost, no obligation.</p>
        <a href="/contact" className="awsconsultcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="awsconsultcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="awsconsultcont__faqItem">
            <div
              className="awsconsultcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`awsconsultcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`awsconsultcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwsConsultingCont;