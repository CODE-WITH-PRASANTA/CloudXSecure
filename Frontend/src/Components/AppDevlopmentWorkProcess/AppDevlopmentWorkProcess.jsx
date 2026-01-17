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
    desc: "We understand your business goals, challenges, and technical requirements to define the right solution."
  },
  {
    icon: <FaChartPie />,
    title: "Project analysis",
    desc: "Our experts analyze scope, security needs, timelines, and resources to create a clear execution plan."
  },
  {
    icon: <FaTasks />,
    title: "Plan Execute",
    desc: "We design, develop, and implement secure IT solutions using proven best practices and modern technologies."
  },
  {
    icon: <FaChartLine />,
    title: "Deliver result",
    desc: "We deliver high-quality, tested solutions with ongoing support to ensure long-term performance and success."
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
           How We Work 
          </h2>
          <p>A simple, transparent, and results-driven process to deliver secure and scalable IT solutions.</p>
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
