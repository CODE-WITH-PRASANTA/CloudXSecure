import React, { useState } from "react";
import "./Cloudfaq.css";

// IMAGES
import mainImg from "../../assets/faq1.webp";
import groupImg from "../../assets/faq2.webp";

const faqData = [
  {
    question: "Where Should I Incorporate My Business?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
  },
  {
    question: "How Long Should A Business Plan Be?",
    answer:
      "A business plan typically ranges between 10–30 pages depending on the business model and purpose.",
  },
  {
    question: "What Is Included In Your Services?",
    answer:
      "Our services include strategy planning, development, security optimization, and ongoing support.",
  },
  {
    question: "What Type Of Company Is Measured?",
    answer:
      "We work with startups, SMEs, and enterprise-level organizations across industries.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faqSectionUnique">
      <div className="faqContainerUnique">
        {/* LEFT IMAGES */}
        <div className="faqImageWrapUnique">
          <img src={mainImg} alt="FAQ Main" className="faqMainImgUnique" />
          <img
            src={groupImg}
            alt="Team Working"
            className="faqGroupImgUnique"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="faqContentUnique">
          <span className="faqBadgeUnique">FAQ</span>

          <h2 className="faqTitleUnique">
            Prioritize Your Site’s Safety <br />
            And Security
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
