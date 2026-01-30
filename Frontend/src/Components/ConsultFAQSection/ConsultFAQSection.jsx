import React, { useState } from "react";
import "./ConsultFaqSection.css";

import gridImg from "../../assets/about-one-shape-1.png";
import mainImg from "../../assets/const-faq_img01.webp";
import statImg from "../../assets/const-faq_img02.webp";
import blueBg from "../../assets/const-faq_shape01.webp";
import faqBg from "../../assets/const-faq_shape02.webp";

const ConsultFaqSection = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "What cloud services does CloudXSecure provide?",
      a: "CloudXSecure offers end-to-end cloud solutions including cloud architecture design, migration, server management, DevOps automation, monitoring, and security—helping businesses achieve high availability, performance, and cost efficiency."
    },
    {
      q: "Do you build websites and mobile applications?",
      a: "Yes. We design and develop modern, responsive websites and high-performance mobile applications focused on user experience, speed, and conversions—tailored to your business goals and brand identity."
    },
    {
      q: "How does CloudXSecure ensure security and uptime?",
      a: "We implement enterprise-grade security, automated backups, continuous monitoring, and scalable cloud infrastructure to protect your data and guarantee maximum uptime for your applications and services."
    }
  ];

  return (
    <section className="consult-faq-section">
      <div className="consult-wrapper">

        {/* LEFT */}
        <div className="consult-left">
          <img src={blueBg} alt="" className="blue-bg" />

          <div className="image-wrap">
            <img src={mainImg} alt="consult" className="main-img" />
            <img src={statImg} alt="stats" className="stat-card" />
            <img src={gridImg} alt="grid" className="grid-float" />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="consult-right"
          style={{ backgroundImage: `url(${faqBg})` }}
        >
          <span className="section-tag">OUR SERVICE BENEFITS</span>
          <h2>
            Keep Your Business Safe Ensure <br /> High Availability Cloud Solutions
          </h2>
          <p className="section-desc">
            CloudXSecure helps businesses modernize their digital presence with secure cloud infrastructure, custom web and mobile app development, and fully managed cloud solutions. Our expert team delivers scalable, high-performance systems designed to improve reliability, enhance user experience, and accelerate business growth—while keeping your data protected around the clock.
          </p>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="faq-question">
                  {item.q}
                  <span>{active === index ? "−" : "+"}</span>
                </div>
                {active === index && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultFaqSection;
