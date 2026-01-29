import React, { useState } from "react";
import "./Cloudfaq.css";

// IMAGES
import mainImg from "../../assets/faq1.webp";
import groupImg from "../../assets/faq2.webp";

const faqData = [
  {
    question: "What services does CloudXSecure provide?",
    answer:
      "CloudXSecure delivers end-to-end cloud services, secure cloud infrastructure, modern web design, mobile & web app development, and complete cloud solutions to help businesses scale safely and efficiently.",
  },
  {
    question: "How does CloudXSecure improve website performance and security?",
    answer:
      "We combine cloud optimization, SSL security, performance tuning, and scalable architecture to ensure fast-loading, secure, and reliable digital platforms.",
  },
  {
    question: "Do you offer custom web and app development?",
    answer:
     "Yes. We build fully customized websites and applications tailored to your business goals, focusing on user experience, performance, and long-term scalability.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We support startups, small businesses, and enterprises across industries, delivering flexible cloud solutions, professional web design, and robust app development.",
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
          <span className="faqBadgeUnique">CloudXSecure FAQ</span>

          <h2 className="faqTitleUnique">
            Prioritize Your Website’s Security, <br />Performance & Growth
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
