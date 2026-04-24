import React, { useState } from "react";
import "./FaqSection.css";

import faqImg from "../../assets/faq-1.webp";
import shape1 from "../../assets/icon-5.png";
import shape2 from "../../assets/icon-6.webp";

import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What services does CloudXsecure offer in cloud computing and IT solutions?",
    answer:
      "CloudXsecure provides comprehensive cloud computing and IT solutions including cloud infrastructure deployment, secure web and mobile app development, DevOps automation, cybersecurity services, and scalable enterprise solutions.",
  },
  {
    question: "Why should I choose CloudXsecure for cloud security and data protection?",
    answer:
      "CloudXsecure prioritizes advanced cybersecurity with encryption, secure architecture, and proactive threat monitoring.",
  },
  {
    question: "Does CloudXsecure provide ongoing support and maintenance services?",
    answer:
      "Yes, we offer real-time monitoring, updates, and technical support for seamless performance.",
  },
  {
    question: "Which industries benefit from CloudXsecure services?",
    answer:
      "Healthcare, fintech, e-commerce, education, startups, and enterprises.",
  },
  {
    question: "How does CloudXsecure help businesses scale?",
    answer:
      "Through scalable cloud infrastructure, automation, and performance-driven solutions.",
  },
  {
    question: "Are services suitable for startups?",
    answer:
      "Yes, flexible and cost-effective solutions are available for startups.",
  },

  // NEW QUESTIONS
  {
    question: "Do you offer multi-cloud or hybrid cloud solutions?",
    answer:
      "Yes, we design and deploy hybrid and multi-cloud environments for flexibility and reliability.",
  },
  {
    question: "Is CloudXsecure compliant with industry standards?",
    answer:
      "We follow GDPR, ISO, and other compliance frameworks for secure operations.",
  },
  {
    question: "How fast is deployment?",
    answer:
      "Deployment timelines depend on project size but are optimized for speed and efficiency.",
  },
  {
    question: "Do you provide disaster recovery solutions?",
    answer:
      "Yes, we offer automated backup and disaster recovery strategies.",
  },
];

const ITEMS_PER_PAGE = 4;

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFaqs = faqData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection" id="faq">

      {/* Shapes */}
      <img src={shape1} alt="" className="faq-shape faq-shape-1" />
      <img src={shape2} alt="" className="faq-shape faq-shape-2" />

      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          <span className="faq-tag">CLOUDXSECURE FAQ</span>

          <h2>
            Helping Businesses Stay Secure, <br />
            Scalable and <span>Always Available</span>
          </h2>

          <div className="faq-image">
            <img src={faqImg} alt="faq" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="faq-right">

          <h3>
            Frequently Asked <span>Questions</span>
          </h3>

          <p className="faq-desc">
            Explore common questions about our cloud and IT services.
          </p>

          {/* FAQ LIST */}
          <div className="faq-list">
            {currentFaqs.map((item, index) => (
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

          {/* PAGINATION */}
          <div className="faq-pagination">

            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;