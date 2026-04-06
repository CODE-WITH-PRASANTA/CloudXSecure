import React, { useState } from "react";
import "./Faq.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import shapeImage from "../../assets/service8.png";

const Faq = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What Medical Services Do You Provide?",
      answer:
        "We provide secure cloud solutions, web development, app development, IT consulting, digital transformation, and long-term support services tailored to business needs.",
    },
    {
      question: "What is your customer geography?",
      answer:
        "We work with clients across multiple regions and industries, delivering flexible remote and on-site solutions depending on project scale and business requirements.",
    },
    {
      question: "What are the main industries we serve?",
      answer:
        "We mainly serve healthcare, retail, education, finance, startups, and enterprise businesses that need modern digital systems and secure infrastructure.",
    },
  ];

  const handleFaqToggle = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <img src={shapeImage} alt="shape" className="faq__shape faq__shape--top" />
      <img
        src={shapeImage}
        alt="shape"
        className="faq__shape faq__shape--bottom"
      />

      <div className="faq__container">
        <div className="faq__left">
          <div className="faq__badge">
            <span className="faq__badgeLine"></span>
            <span className="faq__badgeText">SOLUTEK COMPANY</span>
          </div>

          <h2 className="faq__title">
            Keeping Your Business
            <br />
            Safe and <span>Available.</span>
          </h2>

          <div className="faq__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="FAQ main"
              className="faq__image"
            />
          </div>
        </div>

        <div className="faq__right">
          <h3 className="faq__rightTitle">
            A Comprehensive <span>Guide.</span>
          </h3>

          <p className="faq__rightDescription">
            Alternative innovation network environmental whiteboard pursue for
            premier methods empowerment go forward opportunities
          </p>

          <div className="faq__list">
            {faqData.map((item, index) => {
              const isOpen = faqOpenIndex === index;

              return (
                <div
                  className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => handleFaqToggle(index)}
                  >
                    <span className="faq__questionText">{item.question}</span>

                    <span className="faq__iconWrap">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <div className="faq__answerWrap">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;