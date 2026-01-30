import React, { useState } from "react";
import "./DevopsFAQ.css";

import faqImg from "../../assets/devops-faq-img.webp";

const faqData = [
  {
    question: "What does CloudXSecure do?",
    answer:
      "CloudXSecure provides end-to-end IT solutions including cloud services, web design, mobile app development, cybersecurity, and managed cloud infrastructure to help businesses grow securely and efficiently.",
  },
  {
    question: "How can CloudXSecure help my business?",
    answer:
      "We streamline operations with scalable cloud solutions, high-performance websites, custom mobile apps, and secure IT systems—helping you reduce costs, improve productivity, and accelerate digital transformation.",
  },
  {
    question: "What industries does CloudXSecure serve?",
    answer:
      "We support startups, SMEs, and enterprises across healthcare, finance, eCommerce, education, SaaS, and more—delivering tailored cloud, web, and application solutions for every industry.",
  },
  {
    question: "How experienced is the CloudXSecure team?",
    answer:
      "Our certified cloud engineers, developers, and designers bring years of hands-on experience in cloud architecture, web development, app design, and cybersecurity—ensuring reliable, future-ready solutions.",
  },
];

const DevopsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="devops-faq-section">
      <div className="devops-faq-wrapper">
        {/* LEFT */}
        <div className="devops-faq-left">
          <span className="devops-faq-tag">FAQs</span>

          <h2 className="devops-faq-title">
            Frequently Asked <span>Question?</span>
          </h2>

          <p className="devops-faq-desc">
            Got questions? We have got answers. Explore our frequently asked
            questions to learn more about our IT solutions and how they can
            benefit your business.
          </p>

          <div className="devops-faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`devops-faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="devops-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{item.question}</h4>
                  <span className="devops-faq-arrow">⌃</span>
                </div>

                <div className="devops-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="devops-faq-img">
          <img src={faqImg} alt="FAQ" />
          <div className="devops-faq-img-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default DevopsFAQ;
