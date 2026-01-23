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
      q: "Interdum et malesuada fames ac ante ipsum",
      a: "Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes."
    },
    {
      q: "Interdum et malesuada fames ac ante ipsum",
      a: "Consulting slogans are often hard to craft but play a vital role in branding."
    },
    {
      q: "Interdum et malesuada fames ac ante ipsum",
      a: "A strong consulting slogan builds trust and credibility instantly."
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
            Keep Your Business Safe Ensure <br /> High Availability.
          </h2>
          <p className="section-desc">
            Ever find yourself staring at your computer’s good consulting slogan
            to come to mind? Oftentimes.
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
