import React, { useState } from "react";
import "./MonitoringCont.css";
import { FiPlus } from "react-icons/fi";

import serviceImg from "../../assets/service-details.webp";
import iconImg from "../../assets/det-icon.png"; 

const MonitoringCont = () => {
  const [active, setActive] = useState(2);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <div className="monitor-cont">

      {/* IMAGE */}
      <div className="monitor-cont__imageWrap">
        <img src={serviceImg} alt="service" />
      </div>

      {/* TITLE */}
      <h2 className="monitor-cont__title">
        Best Solutions for App Development
      </h2>

      {/* TEXT */}
      <p className="monitor-cont__text">
        Alternative innovation to ethical network environmental whiteboard pursue
        compelling results for premier methods empowerment.
      </p>

      <p className="monitor-cont__text">
        Continually fashion orthogonal leadership skills whereas wireless metrics.
        Globally enhance fully tested meta-services rather than pandemic solutions.
      </p>

      {/* CARDS */}
      <div className="monitor-cont__cards">

        {/* LEFT CARD */}
        <div className="monitor-cont__card">
          <h3>Why Choose Us</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results.
          </p>

          <ul className="monitor-cont__list">
            <li><span className="monitor-cont__arrow">→</span> Success Stories</li>
            <li><span className="monitor-cont__arrow">→</span> Success service</li>
            <li><span className="monitor-cont__arrow">→</span> Success store</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="monitor-cont__card monitor-cont__card--highlight">
          <img src={iconImg} alt="icon" className="monitor-cont__customIcon" />
          <h3>Empowering Your Success</h3>

          <p>
            Alternative innovation to ethical network environmental whiteboard
            pursue compelling results for premier methods empowerment forward.
          </p>
        </div>

      </div>

      {/* FAQ */}
      <div className="monitor-cont__faq">
        <h2>Frequently Asked Questions</h2>

        {[0, 1, 2].map((item, i) => (
          <div key={i} className="monitor-cont__faqItem">

            <div
              className="monitor-cont__faqHeader"
              onClick={() => toggle(i)}
            >
              <span>
                {i === 0 && "What Medical Services Do You Provide?"}
                {i === 1 && "What is your customer geography?"}
                {i === 2 && "What are the main industries we serve?"}
              </span>

              <FiPlus
                className={`monitor-cont__plus ${active === i ? "active" : ""}`}
              />
            </div>

            <div
              className={`monitor-cont__faqBody ${
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

export default MonitoringCont;