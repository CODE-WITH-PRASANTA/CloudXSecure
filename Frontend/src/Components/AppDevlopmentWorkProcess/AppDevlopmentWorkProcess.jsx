import React, { useState } from "react";
import "./AppDevlopmentWorkProcess.css";
import {
  FaRegFileAlt,
  FaChartPie,
  FaTasks,
  FaChartLine
} from "react-icons/fa";

const steps = [
  {
    icon: <FaRegFileAlt />,
    title: "Choose a project",
    desc: "Once the strategy is in place, we move to designing and developing your vision."
  },
  {
    icon: <FaChartPie />,
    title: "Project analysis",
    desc: "Once the strategy is in place, we move to designing and developing your vision."
  },
  {
    icon: <FaTasks />,
    title: "Plan Execute",
    desc: "Once the strategy is in place, we move to designing and developing your vision."
  },
  {
    icon: <FaChartLine />,
    title: "Deliver result",
    desc: "Once the strategy is in place, we move to designing and developing your vision."
  }
];

const AppDevlopmentWorkProcess = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="work-process">
      <div className="work-process-container">

        {/* HEADER */}
        <div className="work-process-header">
          <span className="process-tag">WORKING PROCESS</span>
          <h2>
            How To Work <span>It</span>
          </h2>
        </div>

        {/* PROCESS */}
        <div className="process-wrapper">
          <div
            className="process-grid"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DOT PAGINATION (MOBILE) */}
        <div className="process-dots">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`dot ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {/* ===============================
          INFINITE SERVICE LINE (MERGED)
      =============================== */}
      <div className="infinite-line">
        <div className="infinite-track">
          <span>PRODUCT DESIGN</span><span className="star">★</span>
          <span>WEB DEVELOPMENT</span><span className="star">★</span>
          <span>BRANDING</span><span className="star">★</span>
          <span>CYBER SECURITY</span><span className="star">★</span>
          <span>WEBSITE DESIGN</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span>

          {/* DUPLICATE FOR LOOP */}
          <span className="star">★</span>
          <span>PRODUCT DESIGN</span><span className="star">★</span>
          <span>WEB DEVELOPMENT</span><span className="star">★</span>
          <span>BRANDING</span><span className="star">★</span>
          <span>CYBER SECURITY</span><span className="star">★</span>
          <span>WEBSITE DESIGN</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span>
        </div>
      </div>

    </section>
  );
};

export default AppDevlopmentWorkProcess;
