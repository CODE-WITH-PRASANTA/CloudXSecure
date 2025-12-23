import React, { useState } from "react";
import "./FAQSection.css";

const categories = [
  "All",
  "Cyber Security",
  "Help Desk Solution",
  "Software Development",
  "Cloud Solution",
  "Data Protection",
];

const faqs = [
  {
    question: "What types of IT solutions do you offer?",
    answer:
      "We offer a wide range of IT solutions including cybersecurity, cloud services, software development, help desk support, data protection, and IT infrastructure management tailored to your business needs.",
  },
  {
    question: "What is your policy on data backup and recovery?",
    answer:
      "Our data backup and recovery policy ensures your critical data is securely backed up with regular schedules and can be quickly restored in case of data loss, cyberattacks, or system failures.",
  },
  {
    question: "How can IT solutions benefit my business?",
    answer:
      "IT solutions improve operational efficiency, enhance security, reduce costs, enable scalability, and help your business stay competitive through modern technology and automation.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in serving industries such as healthcare, finance, retail, education, manufacturing, and technology-driven businesses of all sizes.",
  },
  {
    question: "What is the process for onboarding a new client?",
    answer:
      "Our onboarding process includes an initial consultation, requirement analysis, solution planning, implementation, testing, and continuous support to ensure a smooth transition.",
  },
  {
    question: "How can I get in touch with your support team?",
    answer:
      "You can reach our support team via email, phone, or our online support portal. Our dedicated team is available to assist you during business hours and for emergencies.",
  },
  {
    question: "What kind of technology partners do you work with?",
    answer:
      "We work with leading technology partners and platforms including cloud providers, cybersecurity vendors, and enterprise software companies to deliver reliable solutions.",
  },
  {
    question: "Can I scale the services as my business grows?",
    answer:
      "Yes, our services are fully scalable. As your business grows, we can easily expand or customize solutions to meet your evolving requirements.",
  },
  {
    question: "What types of payment plans do you offer?",
    answer:
      "We offer flexible payment plans including monthly subscriptions, project-based pricing, and customized plans depending on the scope of services.",
  },
  {
    question: "What is your policy on data backup recovery?",
    answer:
      "We follow industry best practices for data backup recovery, ensuring secure storage, regular testing, and rapid restoration to minimize downtime.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState("All");

  return (
    <section className="faq-wrapper">
      <h2>Frequently Asked Question</h2>

      {/* TABS */}
      <div className="faq-tabs">
        {categories.map((item) => (
          <button
            key={item}
            className={tab === item ? "tab active" : "tab"}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* FAQ GRID */}
      <div className="faq-grid">
        <div className="faq-col">
          {faqs.slice(0, 5).map((faq, index) => (
            <div
              key={index}
              className={active === index ? "faq-item active" : "faq-item"}
              onClick={() => setActive(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{active === index ? "⌃" : "⌄"}</span>
              </div>

              {active === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="faq-col">
          {faqs.slice(5).map((faq, index) => {
            const realIndex = index + 5;
            return (
              <div
                key={realIndex}
                className={
                  active === realIndex ? "faq-item active" : "faq-item"
                }
                onClick={() => setActive(realIndex)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span>{active === realIndex ? "⌃" : "⌄"}</span>
                </div>

                {active === realIndex && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
