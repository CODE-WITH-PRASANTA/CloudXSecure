import React, { useState } from "react";
import "./CloudMigrationCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const CloudMigrationCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "How long does a cloud migration take?",
      answer:
        "Timelines depend directly on data volume and architecture complexity. Small-scale application moves can take a few days, while complex enterprise migrations take several weeks. We provide a detailed timeline during your initial assessment.",
    },
    {
      question: "Is my data safe during the migration process?",
      answer:
        "Yes. We follow strict security and compliance standards, using end-to-end encrypted transfer protocols, automated backup validation, and strict access controls at every phase.",
    },
    {
      question: "Will our business experience downtime?",
      answer:
        "We design our migration paths to eliminate or minimize downtime. Critical cutover steps are scheduled during off-peak hours or low-traffic windows to keep your operations running continuously.",
    },
    {
      question: "What post-migration support does CloudXSecure offer?",
      answer:
        "Our team provides ongoing managed cloud services, including 24/7 infrastructure monitoring, cost optimization, performance tuning, and disaster recovery management.",
    },
  ];

  return (
    <div className="cloudmicont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="cloudmicont__hero">
        <div className="cloudmicont__imageWrap">
          <img
            src={serviceImg}
            alt="CloudXSecure AWS and Azure Cloud Migration Services in Mumbai"
          />
        </div>
        <h1 className="cloudmicont__h1">Cloud Migration Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="cloudmicont__intro">
        <h2 className="cloudmicont__title">
          Move to the Cloud Without the Risk
        </h2>
        <p className="cloudmicont__text">
          Migrating your data, applications, or infrastructure to the cloud—or switching between providers like AWS and Azure—requires precise planning. Without a clear strategy, businesses risk costly downtime, data loss, or security oversights. 
        </p>
        <p className="cloudmicont__text">
          At <strong>CloudXSecure</strong>, we provide end-to-end <strong>cloud migration services</strong> tailored to your business goals. Whether you need a local <strong>Azure migration in Mumbai</strong> or an enterprise-wide <strong>AWS migration</strong>, our team executes every phase with zero data loss and minimal disruption to your daily operations.
        </p>
      </section>

      {/* MIGRATION PROCESS & SCOPE CARDS */}
      <div className="cloudmicont__cards">
        {/* OUR PROCESS */}
        <div className="cloudmicont__card">
          <h3>Our Proven Migration Process</h3>
          <p>
            We take a structured, multi-phase approach to modernizing your digital infrastructure:
          </p>
          <ol className="cloudmicont__processList">
            <li><strong>Assessment:</strong> Review legacy systems and identify workloads ready for the cloud.</li>
            <li><strong>Planning:</strong> Build a custom roadmap with timelines, security checks, and rollback plans.</li>
            <li><strong>Migration:</strong> Securely move applications, databases, and file archives.</li>
            <li><strong>Testing:</strong> Conduct thorough performance and data integrity validations.</li>
            <li><strong>Go-Live & Support:</strong> Final cutover backed by continuous monitoring.</li>
          </ol>
        </div>

        {/* WHAT WE MIGRATE */}
        <div className="cloudmicont__card cloudmicont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure cloud migration process icon"
            className="cloudmicont__customIcon"
          />
          <h3>What We Migrate</h3>
          <p>
            Our engineering team handles complex migrations across varied environments:
          </p>
          <ul className="cloudmicont__list">
            <li><span className="cloudmicont__arrow">→</span> Application & server infrastructure modernization</li>
            <li><span className="cloudmicont__arrow">→</span> Production & legacy databases (SQL, NoSQL, PostgreSQL)</li>
            <li><span className="cloudmicont__arrow">→</span> Large-scale media archives and file storage</li>
            <li><span className="cloudmicont__arrow">→</span> On-premise to cloud, and seamless cloud-to-cloud transitions</li>
          </ul>
        </div>
      </div>

      {/* CASE STUDY HIGHLIGHT */}
      <section className="cloudmicont__casestudy">
        <h2>Featured Case Study: Bad Studio</h2>
        <blockquote className="cloudmicont__quote">
          <p>
            We successfully migrated <strong>Bad Studio’s</strong> entire media archive to AWS with zero data loss and minimal operational downtime. The transition provided their team with a scalable, secure cloud library capable of supporting high-bandwidth creative assets and remote collaboration.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="cloudmicont__servicesNav">
        <h3>Explore Our Cloud Solutions</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="cloudmicont__links">
          <a href="/aws-consulting">AWS Consulting</a>
          <a href="/azure-consulting">Azure Consulting</a>
          <a href="/managed-cloud-services">Managed Cloud Services</a>
          <a href="/cloud-security">Cloud Security</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="cloudmicont__ctaBox">
        <h3>Ready to Modernize Your Infrastructure?</h3>
        <p>Get a free migration assessment—see your timeline and cost upfront.</p>
        <a href="/contact" className="cloudmicont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="cloudmicont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="cloudmicont__faqItem">
            <div
              className="cloudmicont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`cloudmicont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`cloudmicont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudMigrationCont;