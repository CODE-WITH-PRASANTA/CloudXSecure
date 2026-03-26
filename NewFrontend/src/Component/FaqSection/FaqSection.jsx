import React, { useState } from "react";
import "./FaqSection.css";

import faqImg from "../../assets/faq-1.webp";
import shape1 from "../../assets/icon-5.png"; // wave line
import shape2 from "../../assets/icon-6.webp"; // triangle shape

import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What Medical Services Do You Provide?",
    answer:
      "We provide a wide range of healthcare services including consultation, diagnostics, and treatment solutions tailored to your needs.",
  },
  {
    question: "What is your customer geography?",
    answer:
      "We serve clients globally with a strong presence in India, US, and Europe regions.",
  },
  {
    question: "What are the main industries we serve?",
    answer:
      "We specialize in healthcare, fintech, real estate, and enterprise software solutions.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqSection">
      {/* Background Shapes */}
      <img src={shape1} alt="shape" className="faq-shape faq-shape-1" />
      <img src={shape2} alt="shape" className="faq-shape faq-shape-2" />

      <div className="faq-container">

        {/* LEFT SIDE */}
        <div className="faq-left">
          <span className="faq-tag">SOLUTEK COMPANY</span>

          <h2>
            Keeping Your Business <br />
            Safe and <span>Available.</span>
          </h2>

          <div className="faq-image">
            <img src={faqImg} alt="faq" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-right">

          <h3>
            A Comprehensive <span>Guide.</span>
          </h3>

          <p className="faq-desc">
            Alternative innovation network environmental whiteboard pursue
            for premier methods empowerment go forward opportunities
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
                  {activeIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FaqSection;