import React, { useState } from "react";
import "./Cloudfaq.css";

import mainImg from "../../assets/faq1.webp";
import groupImg from "../../assets/faq2.webp";

const faqData = [
  {
    question: "What services does CloudXSecure provide?",
    answer:
      "CloudXSecure delivers end-to-end cloud services, secure cloud infrastructure, modern web design, mobile & web app development, and complete cloud solutions."
  },
  {
    question: "How does CloudXSecure improve website performance and security?",
    answer:
      "We combine cloud optimization, SSL security, performance tuning, and scalable architecture to ensure fast-loading, secure, and reliable platforms."
  },
  {
    question: "Do you offer custom web and app development?",
    answer:
      "Yes. We build fully customized websites and applications tailored to your business goals."
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We support startups, small businesses, and enterprises across industries with flexible cloud and development solutions."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqPro-section">
      <div className="faqPro-container">

        {/* LEFT IMAGES */}
        <div className="faqPro-imageWrap">
          <img src={mainImg} alt="FAQ" className="faqPro-mainImg" />
          <img src={groupImg} alt="Team" className="faqPro-groupImg" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="faqPro-content">
          <span className="faqPro-badge">
            CloudXSecure FAQ
          </span>

          <h2 className="faqPro-title">
            Prioritize Your Website’s Security, Performance & Growth
          </h2>

          <div className="faqPro-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faqPro-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faqPro-question"
                  onClick={() => toggleItem(index)}
                >
                  {item.question}
                  <span className="faqPro-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="faqPro-answerWrap"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0px"
                  }}
                >
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

export default FAQSection;
