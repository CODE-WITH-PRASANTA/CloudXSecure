import React, { useState } from "react";
import "./FaqSection.css";

import faqImg from "../../assets/faq-1.webp";
import shape1 from "../../assets/icon-5.png";
import shape2 from "../../assets/icon-6.webp";

import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What IT services does CloudXsecure provide?",
    answer:
      "CloudXsecure offers end-to-end IT solutions including cloud infrastructure setup, web development, mobile app development, DevOps automation, and ongoing technical support tailored to business needs.",
  },
  {
    question: "How secure are your cloud and application solutions?",
    answer:
      "Security is a core focus at CloudXsecure. We implement industry-standard security practices, including data encryption, secure cloud architecture, and continuous monitoring to protect your business from potential threats.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, CloudXsecure provides reliable post-launch support, including system monitoring, updates, performance optimization, and technical assistance to ensure your business operations run smoothly.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with a wide range of industries including healthcare, fintech, e-commerce, startups, and enterprise businesses, delivering customized IT solutions that align with industry-specific requirements.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection" id="faq">
      
      {/* Background Shapes */}
      <img
        src={shape1}
        alt="decorative wave shape background"
        className="faq-shape faq-shape-1"
      />
      <img
        src={shape2}
        alt="decorative geometric shape background"
        className="faq-shape faq-shape-2"
      />

      <div className="faq-container">

        {/* LEFT SIDE */}
        <div className="faq-left">
          <span className="faq-tag">CLOUDXSECURE FAQ</span>

          <h2>
            Helping Businesses Stay Secure, <br />
            Scalable and <span>Always Available</span>
          </h2>

          <div className="faq-image">
            <img
              src={faqImg}
              alt="CloudXsecure IT support team assisting businesses with cloud and application solutions"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-right">

          <h3>
            Frequently Asked <span>Questions</span>
          </h3>

          <p className="faq-desc">
            Find answers to common questions about CloudXsecure services, including
            cloud solutions, application development, and IT support. We aim to
            provide clear, transparent information to help you make informed
            technology decisions.
          </p>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;