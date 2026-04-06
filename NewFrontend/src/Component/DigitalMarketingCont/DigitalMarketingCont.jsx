import React, { useState } from "react";
import "./DigitalMarketingCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const DigitalMarketingCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="dmc">

      {/* IMAGE */}
      <div className="dmc__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      <h2 className="dmc__title">
        Best Solutions for App Development
      </h2>

      {/* TEXT */}
      <p className="dmc__text">
        Alternative innovation to ethical network environmental whiteboard pursue
        compelling results for premier methods empowerment.
      </p>

      <p className="dmc__text">
        Continually fashion orthogonal leadership skills whereas wireless metrics.
        Globally enhance fully tested meta-services rather than pandemic solutions.
      </p>

      {/* CARDS */}
      <div className="dmc__cards">

        {/* LEFT CARD */}
        <div className="dmc__card">
          <h3>Why Choose Us</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results.
          </p>

          <ul className="dmc__list">
            <li><span className="dmc__arrow">→</span> Success Stories</li>
            <li><span className="dmc__arrow">→</span> Success service</li>
            <li><span className="dmc__arrow">→</span> Success store</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="dmc__card dmc__card--highlight">
          <img src={iconImg} alt="icon" className="dmc__customIcon" />
          <h3>Empowering Your Success</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results for premier methods empowerment forward.
          </p>
        </div>

      </div>

      {/* FAQ */}
      <div className="dmc__faq">
        <h2>Frequently Asked Questions</h2>

        {[0, 1, 2].map((item, i) => (
          <div key={i} className="dmc__faqItem">

            <div
              className="dmc__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>
                {i === 0 && "What Medical Services Do You Provide?"}
                {i === 1 && "What is your customer geography?"}
                {i === 2 && "What are the main industries we serve?"}
              </span>

              <FiPlus
                className={`dmc__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`dmc__faqBody ${
                active === i ? "open" : ""
              }`}
            >
              <p>
                Appropriately promote enterprise-wide vortals through innovative
                information evolve go forward markets whereas synergistic applications.
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default DigitalMarketingCont;