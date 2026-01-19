import React, { useState } from "react";
import "./Cloudfaq.css";

// IMAGES
import mainImg from "../../assets/faq1.webp";
import groupImg from "../../assets/faq2.webp";

const faqData = [
  {
    question: "Where Should I Incorporate My Business?",
    answer:
      "The right location depends on your business goals, target market, tax structure, and legal requirements. We help you evaluate the best option based on long-term growth and compliance.",
  },
  {
    question: "How Long Should A Business Plan Be?",
    answer:
      "A well-structured business plan usually ranges from 10 to 30 pages, focusing on clarity, strategy, and realistic execution rather than length.",
  },
  {
    question: "What Is Included In Your Services?",
    answer:
      "Our services include consultation, UI/UX design, development, security optimization, performance improvement, and ongoing technical support.",
  },
  {
    question: "What Types Of Companies Do You Work With?",
    answer:
      "We collaborate with startups, educational platforms, SMEs, and growing enterprises across multiple industries.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faqSectionUnique">
      <div className="faqContainerUnique">
        {/* LEFT IMAGES */}
        <div className="faqImageWrapUnique">
          <img src={mainImg} alt="Frequently Asked Questions" className="faqMainImgUnique" />
          <img src={groupImg} alt="Team Collaboration" className="faqGroupImgUnique" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="faqContentUnique">
          <span className="faqBadgeUnique">FAQ</span>

          <h2 className="faqTitleUnique">
            Prioritize Your Website’s <br /> Safety & Performance
          </h2>

          <div className="faqListUnique">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faqItemUnique ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="faqQuestionUnique"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  {item.question}
                  <span className="faqIconUnique">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="faqAnswerUnique">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
