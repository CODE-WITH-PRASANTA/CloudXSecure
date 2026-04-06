import React, { useState } from "react";
import "./CloudConsultingCont.css";
import { FiPlus } from "react-icons/fi";

import iconImg from "../../assets/det-icon.png";

const faqData = [
  {
    question: "What is cloud consulting and how can CloudXSecure help?",
    answer:
      "Cloud consulting helps businesses plan, design, and manage their cloud infrastructure effectively. At CloudXSecure, we guide organizations in choosing the right cloud solutions, optimizing performance, improving security, and ensuring long-term scalability based on their business goals.",
  },
  {
    question: "Do you support cloud migration and optimization?",
    answer:
      "Yes, CloudXSecure provides complete support for cloud migration, optimization, and cost management. We help businesses move their applications and data to the cloud smoothly while improving performance and reducing unnecessary infrastructure costs.",
  },
  {
    question: "Which industries benefit from cloud consulting services?",
    answer:
      "Cloud consulting is valuable for startups, SaaS companies, eCommerce platforms, healthcare systems, financial services, and enterprises. Any business that wants scalable, secure, and cost-efficient infrastructure can benefit from CloudXSecure cloud consulting solutions.",
  },
];

const CloudConsultingCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="cloud-consult-cont">
      {/* IMAGE */}
      <div className="cloud-consult-cont__imageWrap">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
          alt="CloudXSecure cloud consulting services for scalable and secure cloud infrastructure"
        />
      </div>

      {/* TITLE */}
      <h1 className="cloud-consult-cont__title">
        CloudXSecure Cloud Consulting Services for Scalable, Secure, and Cost-Effective Infrastructure
      </h1>

      {/* SUBTITLE */}
      <h2 className="cloud-consult-cont__subtitle">
        CLOUD CONSULTING
      </h2>

      {/* TEXT */}
      <p className="cloud-consult-cont__text">
        At <strong>CloudXSecure</strong>, our <strong>Cloud Consulting</strong>{" "}
        services help businesses make confident decisions about their cloud
        infrastructure. Whether you are planning to move to the cloud, optimize
        your existing setup, or scale your applications, we provide practical
        guidance tailored to your business needs.
      </p>

      <p className="cloud-consult-cont__text">
        We focus on building cloud strategies that are reliable, secure, and
        cost-efficient. From selecting the right cloud platform to improving
        performance and managing resources, CloudXSecure ensures your cloud
        environment supports growth without unnecessary complexity or risk.
      </p>

      {/* CARDS */}
      <div className="cloud-consult-cont__cards">
        {/* LEFT CARD */}
        <div className="cloud-consult-cont__card">
          <h3>Why Choose CloudXSecure Cloud Consulting</h3>

          <p>
            We provide expert cloud guidance that helps businesses improve
            performance, reduce costs, and build secure, scalable infrastructure.
          </p>

          <ul className="cloud-consult-cont__list">
            <li>
              <span className="cloud-consult-cont__arrow">→</span> Smart cloud
              strategy and architecture planning
            </li>
            <li>
              <span className="cloud-consult-cont__arrow">→</span> Cost optimization
              and resource management
            </li>
            <li>
              <span className="cloud-consult-cont__arrow">→</span> Secure and scalable
              cloud solutions
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="cloud-consult-cont__card cloud-consult-cont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure cloud consulting expertise"
            className="cloud-consult-cont__customIcon"
          />
          <h3>Guiding Your Cloud Journey with Confidence</h3>

          <p>
            CloudXSecure supports businesses at every stage of their cloud
            journey, from planning and migration to optimization and management.
            Our consulting approach ensures your infrastructure is built for
            performance, security, and long-term success.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="cloud-consult-cont__faq">
        <h2>CloudXSecure Cloud Consulting – Frequently Asked Questions</h2>

        {faqData.map((item, i) => (
          <div key={i} className="cloud-consult-cont__faqItem">
            <div
              className="cloud-consult-cont__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>

              <FiPlus
                className={`cloud-consult-cont__plus ${
                  active === i ? "active" : ""
                }`}
              />
            </div>

            <div
              className={`cloud-consult-cont__faqBody ${
                active === i ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudConsultingCont;