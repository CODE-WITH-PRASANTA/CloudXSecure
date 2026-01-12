import React, { useState } from "react";
import "./DevopsFAQ.css";

import faqImg from "../../assets/devops-faq-img.webp";

const faqData = [
  {
    question: "What does TechXen do?",
    answer:
      "Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.",
  },
  {
    question: "How can TechXen help my business?",
    answer:
      "TechXen helps businesses enhance productivity, improve efficiency, and stay ahead of technological advancements through tailored IT solutions.",
  },
  {
    question: "What industries does TechXen serve?",
    answer:
      "We serve industries including healthcare, finance, education, retail, and technology-driven enterprises.",
  },
  {
    question: "How experienced is the team at TechXen?",
    answer:
      "Our team consists of highly skilled professionals with years of experience delivering innovative IT solutions.",
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
