import React, { useState } from "react";
import "./AzureConsultingCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png";

const AzureConsultingCont = () => {
  const [active, setActive] = useState(0);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  const faqData = [
    {
      question: "Do you support hybrid environments (on-prem + Azure)?",
      answer:
        "Yes, we design and support robust hybrid cloud setups connecting your on-premise infrastructure with Azure securely and efficiently.",
    },
    {
      question: "How is Azure consulting priced?",
      answer:
        "Pricing depends on the size and complexity of your environment. Contact us for a custom quote after a brief initial assessment.",
    },
    {
      question: "Can you help migrate from AWS to Azure or vice versa?",
      answer:
        "Yes, we handle seamless cross-cloud migrations as part of our comprehensive Cloud Migration services with zero data loss.",
    },
  ];

  return (
    <div className="azureconsultcont">
      {/* HERO IMAGE & MAIN H1 */}
      <div className="azureconsultcont__hero">
        <div className="azureconsultcont__imageWrap">
          <img
            src={serviceImg}
            alt="Microsoft Azure Consulting Services in Mumbai by CloudXSecure"
          />
        </div>
        <h1 className="azureconsultcont__h1">Azure Consulting Services</h1>
      </div>

      {/* MAIN INTRO SECTION */}
      <section className="azureconsultcont__intro">
        <h2 className="azureconsultcont__title">
          Build a Reliable, Cost-Efficient Azure Environment
        </h2>
        <p className="azureconsultcont__text">
          Azure offers powerful tools and enterprise capabilities, but without the right architecture, businesses often end up with unnecessary costs, unoptimized resources, and security gaps.
        </p>
        <p className="azureconsultcont__text">
          At <strong>CloudXSecure</strong>, we provide practical, hands-on <strong>Azure consulting in Mumbai</strong> to help you architect, secure, and optimize your cloud infrastructure. From initial deployment to enterprise governance, we ensure your Azure setup runs smoothly and aligns directly with your business goals.
        </p>
      </section>

      {/* PROCESS & SCOPE CARDS */}
      <div className="azureconsultcont__cards">
        {/* WHAT OUR AZURE CONSULTING COVERS */}
        <div className="azureconsultcont__card">
          <h3>What Our Azure Consulting Covers</h3>
          <p>
            We provide strategic guidance and direct operational assistance across key Azure capabilities:
          </p>
          <ul className="azureconsultcont__list">
            <li><span className="azureconsultcont__arrow">→</span> Azure architecture planning, design, and structural review</li>
            <li><span className="azureconsultcont__arrow">→</span> Cost management, billing analysis, and resource optimization</li>
            <li><span className="azureconsultcont__arrow">→</span> Identity and access management (Azure AD / Microsoft Entra ID)</li>
            <li><span className="azureconsultcont__arrow">→</span> Network security configuration, firewalls, and Virtual WAN setup</li>
            <li><span className="azureconsultcont__arrow">→</span> Governance, policy enforcement, and compliance management</li>
          </ul>
        </div>

        {/* WHO NEEDS AZURE CONSULTING */}
        <div className="azureconsultcont__card azureconsultcont__card--highlight">
          <img
            src={iconImg}
            alt="CloudXSecure Azure consulting icon"
            className="azureconsultcont__customIcon"
          />
          <h3>Who Needs Azure Consulting</h3>
          <p>
            Our Azure specialization is ideal for organizations seeking tailored Microsoft cloud guidance:
          </p>
          <ul className="azureconsultcont__list">
            <li><span className="azureconsultcont__arrow">→</span> <strong>Microsoft-Centric Businesses:</strong> Companies running Office 365, Dynamics, or on-premise Windows Server environments looking to expand to Azure seamlessly.</li>
            <li><span className="azureconsultcont__arrow">→</span> <strong>Growing Enterprises:</strong> Businesses already on Azure needing cost reduction, enhanced security policies, or hybrid connectivity.</li>
          </ul>
        </div>
      </div>

      {/* WHY CLOUDXSECURE SECTION */}
      <section className="azureconsultcont__whyUs">
        <h2>Why CloudXSecure for Azure Consulting?</h2>
        <blockquote className="azureconsultcont__quote">
          <p>
            We bring the same security-first mindset to Microsoft Azure as we do AWS. Our specialists ensure your Azure infrastructure is not only scalable and high-performing, but fully secure and budget-optimized from day one.
          </p>
        </blockquote>
      </section>

      {/* INTERNAL LINKS / NAVIGATION HUB */}
      <section className="azureconsultcont__servicesNav">
        <h3>Explore Our Cloud Solutions</h3>
        <p>Looking for specialized assistance? Discover how we help businesses scale:</p>
        <div className="azureconsultcont__links">
          <a href="/cloud-migration">Cloud Migration</a>
          <a href="/managed-cloud-services">Managed Cloud Services</a>
          <a href="/cloud-security">Cloud Security</a>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="azureconsultcont__ctaBox">
        <h3>Ready to Optimize Your Azure Cloud?</h3>
        <p>Talk to an Azure specialist today — quick response guaranteed.</p>
        <a href="/contact" className="azureconsultcont__ctaBtn">Contact Us →</a>
      </div>

      {/* FAQ SECTION */}
      <div className="azureconsultcont__faq">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, i) => (
          <div key={i} className="azureconsultcont__faqItem">
            <div
              className="azureconsultcont__faqHeader"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
            >
              <span>{item.question}</span>
              <FiPlus
                className={`azureconsultcont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`azureconsultcont__faqBody ${active === i ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AzureConsultingCont;