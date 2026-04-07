import React, { useState } from "react";
import "./CloudMigrationCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const CloudMigrationCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="cloudmicont">

      {/* IMAGE */}
      <div className="cloudmicont__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      <h2 className="cloudmicont__title">
        Best Solutions for App Development
      </h2>

      {/* TEXT */}
      <p className="cloudmicont__text">
        Alternative innovation to ethical network environmental whiteboard pursue
        compelling results for premier methods empowerment.
      </p>

      <p className="cloudmicont__text">
        Continually fashion orthogonal leadership skills whereas wireless metrics.
        Globally enhance fully tested meta-services rather than pandemic solutions.
      </p>

      {/* CARDS */}
      <div className="cloudmicont__cards">

        {/* LEFT CARD */}
        <div className="cloudmicont__card">
          <h3>Why Choose Us</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results.
          </p>

          <ul className="cloudmicont__list">
            <li><span className="cloudmicont__arrow">→</span> Success Stories</li>
            <li><span className="cloudmicont__arrow">→</span> Success service</li>
            <li><span className="cloudmicont__arrow">→</span> Success store</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="cloudmicont__card cloudmicont__card--highlight">
          <img src={iconImg} alt="icon" className="cloudmicont__customIcon" />
          <h3>Empowering Your Success</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results for premier methods empowerment forward.
          </p>
        </div>

      </div>

      {/* FAQ */}
      <div className="cloudmicont__faq">
        <h2>Frequently Asked Questions</h2>

        {[0, 1, 2].map((item, i) => (
          <div key={i} className="cloudmicont__faqItem">

            <div
              className="cloudmicont__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>
                {i === 0 && "What Medical Services Do You Provide?"}
                {i === 1 && "What is your customer geography?"}
                {i === 2 && "What are the main industries we serve?"}
              </span>

              <FiPlus
                className={`cloudmicont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`cloudmicont__faqBody ${
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

export default CloudMigrationCont;