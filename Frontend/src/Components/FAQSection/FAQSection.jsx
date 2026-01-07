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
    question: "What types of IT and cloud solutions does CloudXSecure offer?",
    answer:
      "CloudXSecure provides a comprehensive range of IT and cloud solutions designed to support businesses of all sizes. Our services include cloud services, complete cloud solutions, web design and development, mobile app design and development, cybersecurity, data protection, and IT infrastructure management. All solutions are customized to align with your business goals, scalability needs, and security requirements.",
  },
  {
    question: "How does CloudXSecure ensure cloud and data security?",
    answer:
      "Security is a top priority at CloudXSecure. We implement advanced cloud security measures including data encryption, access control, threat monitoring, secure backups, and compliance-ready cloud environments. Our cybersecurity solutions protect your data, applications, and infrastructure from evolving threats.",
  },
  {
    question: "Can CloudXSecure scale services as my business grows?",
    answer:
      "Yes. Our scalable cloud and IT solutions are designed to grow with your business. Whether you need additional cloud resources, new digital platforms, or expanded security measures, CloudXSecure ensures seamless scalability without disruption.",
  },
  {
    question: "What is your approach to data backup and disaster recovery?",
    answer:
      "CloudXSecure provides reliable data backup and disaster recovery solutions to protect your critical business data. We use secure cloud-based backups, automated recovery processes, and continuous monitoring to minimize downtime and ensure business continuity.",
  },
  {
    question: "How can I get in touch with CloudXSecure’s support team?",
    answer:
      "You can contact our support team through our website, email, or scheduled consultation. CloudXSecure provides responsive and reliable support to ensure your systems remain secure, optimized, and operational.",
  },
  {
    question: "What types of businesses does CloudXSecure work with?",
    answer:
      "We work with startups, small and medium-sized businesses, and enterprises across various industries. Our flexible cloud services, web design, and app development solutions are tailored to meet diverse business requirements.",
  },
  {
    question: "Do you offer flexible pricing and payment plans?",
    answer:
      "Yes. CloudXSecure offers flexible pricing models and customized service plans based on your business needs and project scope. Contact us for a personalized quote or consultation.",
  },
  {
    question: "Do you offer custom web design and development services?",
    answer:
      "Yes. CloudXSecure specializes in professional, SEO-friendly web design and development. We build responsive, fast-loading, and secure websites that enhance user experience and improve search engine rankings. Our web solutions are tailored to your brand and business objectives.",
  },
  {
    question: "What types of payment plans do you offer?",
    answer:
      "We offer flexible payment plans including monthly subscriptions, project-based pricing, and customized plans depending on the scope of services.",
  },
  {
    question: "Does CloudXSecure provide mobile app design and development?",
    answer:
      "Absolutely. We design and develop high-performance mobile applications for Android, iOS, and cross-platform environments. Our app development services focus on UI/UX excellence, cloud integration, security, and scalability, ensuring long-term performance and growth.",
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
