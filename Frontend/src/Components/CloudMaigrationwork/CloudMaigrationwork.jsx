import React, { useEffect } from "react";
import "./CloudMaigrationwork.css";
import { FaClipboardList, FaTasks, FaUsersCog, FaHandshake } from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    {
      id: 1,
      title: "Choose A Service",
      text: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaClipboardList />,
      pos: "up",
    },
    {
      id: 2,
      title: "Define Requirements",
      text: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaTasks />,
      pos: "down",
    },
    {
      id: 3,
      title: "Request A Meeting",
      text: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaUsersCog />,
      pos: "up",
    },
    {
      id: 4,
      title: "Final Solution",
      text: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaHandshake />,
      pos: "down",
    },
  ];

  // Scroll reveal
  useEffect(() => {
    const items = document.querySelectorAll(".cloudmigration-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("cloudmigration-show"));
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cloudmigration-wrap">
      <div className="cloudmigration-container">

        {/* HEADER */}
        <div className="cloudmigration-header cloudmigration-reveal">
          <span className="cloudmigration-tag">HOW IT WORK</span>
          <h2 className="cloudmigration-title">Standard Work Process</h2>
        </div>

        {/* STEPS */}
        <div className="cloudmigration-steps">

          {/* CURVED ZIG-ZAG CONNECTORS */}
          <svg
            className="cloudmigration-connectors"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
          >
            {/* 1 → 2 */}
            <path
              d="M150 70 C 300 160, 450 160, 600 120"
              className="cloudmigration-curve"
            />
            {/* 2 → 3 */}
            <path
              d="M600 120 C 750 20, 900 20, 1050 70"
              className="cloudmigration-curve"
            />
            {/* 3 → 4 */}
            <path
              d="M1050 70 C 1200 160, 1350 160, 1500 120"
              className="cloudmigration-curve"
            />
          </svg>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`cloudmigration-step-card cloudmigration-reveal cloudmigration-${step.pos}`}
            >
              <div className="cloudmigration-icon-wrap">
                <span className="cloudmigration-step-num">{step.id}</span>
                <div className="cloudmigration-icon">{step.icon}</div>
              </div>

              <h4 className="cloudmigration-step-title">{step.title}</h4>
              <p className="cloudmigration-step-text">{step.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
