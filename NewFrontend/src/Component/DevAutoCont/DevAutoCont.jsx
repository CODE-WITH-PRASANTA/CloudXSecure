import React, { useState } from "react";
import "./DevAutoCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const DevAutoCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "What DevOps and automation services does CloudXSecure provide?",
      answer:
        "CloudXSecure provides end-to-end DevOps and automation services including CI/CD pipeline setup, cloud infrastructure automation, containerization, Kubernetes deployment, monitoring, server configuration, release automation, and security integration. Our goal is to help businesses deploy faster, reduce downtime, and improve system reliability.",
    },
    {
      question: "Which industries do you support with DevOps solutions?",
      answer:
        "We work with startups, SaaS companies, eCommerce brands, healthcare platforms, finance teams, and enterprises looking to modernize their infrastructure. Our DevOps and automation solutions are designed to fit businesses that need scalable, secure, and high-performing digital systems.",
    },
    {
      question: "Why is DevOps important for modern businesses?",
      answer:
        "DevOps helps businesses improve collaboration between development and operations teams, speed up software delivery, reduce manual errors, and maintain stable production environments. With the right automation strategy, companies can release features faster, respond quickly to issues, and grow with confidence.",
    },
  ];

  return (
    <section className="dev-auto-sdc">
      {/* IMAGE */}
      <div className="dev-auto-sdc__imageWrap">
        <img
          src={serviceImg}
          alt="CloudXSecure DevOps and automation services"
        />
      </div>

      {/* TITLE */}
      <h1 className="dev-auto-sdc__title">
        DevOps & Automation Services for Faster, Safer, and Scalable Delivery
      </h1>

      {/* TEXT */}
      <p className="dev-auto-sdc__text">
        At <strong>CloudXSecure</strong>, we help businesses simplify software
        delivery through reliable <strong>DevOps and automation services</strong>.
        From continuous integration and deployment to infrastructure management,
        we build systems that reduce manual work, improve release speed, and keep
        your applications stable at every stage of growth.
      </p>

      <p className="dev-auto-sdc__text">
        Our team focuses on practical, business-driven DevOps solutions. Whether
        you are launching a new product, migrating to the cloud, or improving an
        existing deployment process, we create automated workflows that support
        performance, security, and long-term scalability. With CloudXSecure, your
        team can ship updates confidently and manage infrastructure more
        efficiently.
      </p>

      {/* CARDS */}
      <div className="dev-auto-sdc__cards">
        {/* LEFT CARD */}
        <div className="dev-auto-sdc__card">
          <h3>Why Choose CloudXSecure</h3>

          <p>
            We build DevOps workflows that are practical, secure, and tailored to
            real business needs, helping teams deliver software with speed and
            confidence.
          </p>

          <ul className="dev-auto-sdc__list">
            <li>
              <span className="dev-auto-sdc__arrow">→</span> Faster CI/CD pipeline
              delivery
            </li>
            <li>
              <span className="dev-auto-sdc__arrow">→</span> Reliable cloud
              infrastructure automation
            </li>
            <li>
              <span className="dev-auto-sdc__arrow">→</span> Improved security and
              deployment consistency
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="dev-auto-sdc__card dev-auto-sdc__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure automation expertise icon"
            className="dev-auto-sdc__customIcon"
          />
          <h3>Empowering Modern DevOps Teams</h3>

          <p>
            CloudXSecure helps organizations automate repetitive tasks, streamline
            deployments, and maintain secure cloud environments. We combine modern
            DevOps practices with smart automation strategies to improve
            productivity, reduce operational risk, and support continuous growth.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="dev-auto-sdc__faq">
        <h2>Frequently Asked Questions</h2>

        {faqData.map((item, i) => (
          <div key={i} className="dev-auto-sdc__faqItem">
            <div
              className="dev-auto-sdc__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>

              <FiPlus
                className={`dev-auto-sdc__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`dev-auto-sdc__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevAutoCont;