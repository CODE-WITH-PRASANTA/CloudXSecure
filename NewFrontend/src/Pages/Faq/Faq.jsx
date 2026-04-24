import React, { useState } from "react";
import "./Faq.css";
import { FiPlus, FiMinus, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import shapeImage from "../../assets/service8.png";

const Faq = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const faqData = [
    {
      question: "What services does CloudXSecure provide?",
      answer:
        "CloudXSecure provides a wide range of digital and infrastructure services including cloud solutions, cyber security support, website development, application development, IT consulting, managed hosting, and business technology support. Our goal is to help companies build secure, scalable, and high-performing digital systems that support long-term growth.",
    },
    {
      question: "Why should businesses choose CloudXSecure?",
      answer:
        "Businesses choose CloudXSecure because we focus on reliability, security, and practical results. We do not believe in one-size-fits-all solutions. Every business has different goals, so we build services around performance, protection, and usability. From startups to growing companies, we help clients strengthen their online presence and improve operational efficiency.",
    },
    {
      question: "Do you offer secure cloud infrastructure solutions?",
      answer:
        "Yes, CloudXSecure offers secure cloud infrastructure solutions designed to improve flexibility, uptime, and data protection. We help businesses move to modern cloud environments, manage workloads more efficiently, and maintain stronger control over system performance, backup processes, and service availability.",
    },
    {
      question: "Can CloudXSecure help with website development?",
      answer:
        "Yes, we develop modern, responsive, and business-focused websites that are built for speed, user experience, and long-term performance. Whether you need a corporate website, service-based business site, landing page, or custom web platform, CloudXSecure creates solutions that look professional and support your business goals.",
    },
    {
      question: "Do you provide cyber security and monitoring support?",
      answer:
        "Yes, we provide cyber security support and proactive monitoring services to help businesses reduce risk and stay protected. Our services include system monitoring, threat visibility, performance tracking, issue alerts, and security-focused support that helps businesses respond faster and maintain stable digital operations.",
    },
    {
      question: "Which industries does CloudXSecure work with?",
      answer:
        "CloudXSecure works with businesses across multiple industries including healthcare, education, retail, finance, logistics, startups, professional services, and technology-driven companies. Any organization that depends on secure systems, digital performance, and reliable infrastructure can benefit from our services.",
    },
    {
      question: "Do you create custom solutions for different business needs?",
      answer:
        "Yes, we create custom solutions based on the size, goals, and technical requirements of each client. Some businesses need a secure website, some need cloud migration support, and others need full digital transformation assistance. We take the time to understand the real need before recommending the right solution.",
    },
    {
      question: "Can small businesses work with CloudXSecure?",
      answer:
        "Absolutely. CloudXSecure works with small businesses, startups, and growing brands that need dependable digital support without unnecessary complexity. We understand that smaller businesses need smart, cost-conscious, and practical solutions, so we focus on services that create value and support steady growth.",
    },
    {
      question: "How does CloudXSecure improve business performance?",
      answer:
        "CloudXSecure improves business performance by helping companies reduce downtime, improve website speed, strengthen digital security, and modernize their technology environment. Better systems lead to better customer experience, smoother internal operations, and stronger long-term business confidence.",
    },
    {
      question: "Do you offer long-term support after project delivery?",
      answer:
        "Yes, CloudXSecure offers long-term support after project delivery. We believe that good service does not end when a website goes live or a system is deployed. We continue to support businesses with maintenance, monitoring, updates, technical guidance, and future improvements whenever needed.",
    },
  ];

  const faqsPerPage = 5;
  const totalPages = Math.ceil(faqData.length / faqsPerPage);

  const startIndex = (currentPage - 1) * faqsPerPage;
  const endIndex = startIndex + faqsPerPage;
  const currentFaqs = faqData.slice(startIndex, endIndex);

  const handleFaqToggle = (index) => {
    const actualIndex = startIndex + index;
    setFaqOpenIndex(faqOpenIndex === actualIndex ? null : actualIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setFaqOpenIndex(null);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setFaqOpenIndex(null);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setFaqOpenIndex(null);
    }
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
            <span className="faq__badgeText">CLOUDXSECURE</span>
          </div>

          <h2 className="faq__title">
            Secure Digital Solutions
            <br />
            for Modern <span>Businesses.</span>
          </h2>

          <p className="faq__leftDescription">
            CloudXSecure helps businesses build secure, reliable, and scalable
            digital systems through cloud solutions, web development, monitoring,
            and long-term technology support.
          </p>

          <div className="faq__imageWrap">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="CloudXSecure IT services and business technology support"
              className="faq__image"
            />
          </div>
        </div>

        <div className="faq__right">
          <h3 className="faq__rightTitle">
            Frequently Asked <span>Questions.</span>
          </h3>

          <p className="faq__rightDescription">
            Explore common questions about CloudXSecure services, cloud
            infrastructure, cyber security, website development, and business
            technology support.
          </p>

          <div className="faq__list">
            {currentFaqs.map((item, index) => {
              const actualIndex = startIndex + index;
              const isOpen = faqOpenIndex === actualIndex;

              return (
                <div
                  className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                  key={actualIndex}
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

          <div className="faq__pagination">
            <button
              type="button"
              className={`faq__pageBtn faq__pageBtn--arrow ${
                currentPage === 1 ? "faq__pageBtn--disabled" : ""
              }`}
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <FiChevronLeft />
            </button>

            <div className="faq__pageNumbers">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`faq__pageBtn ${
                      currentPage === page ? "faq__pageBtn--active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className={`faq__pageBtn faq__pageBtn--arrow ${
                currentPage === totalPages ? "faq__pageBtn--disabled" : ""
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;