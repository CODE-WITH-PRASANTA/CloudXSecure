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
    const items = document.querySelectorAll(".wp-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("wp-show"));
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wp-wrap">
      <div className="wp-container">

        {/* HEADER */}
        <div className="wp-header wp-reveal">
          <span className="wp-tag">HOW IT WORK</span>
          <h2 className="wp-title">Standard Work Process</h2>
        </div>

        {/* STEPS */}
        <div className="wp-steps">

          {/* CURVED ZIG-ZAG CONNECTORS */}
          <svg
            className="wp-connectors"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
          >
            {/* 1 → 2 */}
            <path
              d="M150 70 C 300 160, 450 160, 600 120"
              className="wp-curve"
            />
            {/* 2 → 3 */}
            <path
              d="M600 120 C 750 20, 900 20, 1050 70"
              className="wp-curve"
            />
            {/* 3 → 4 */}
            <path
              d="M1050 70 C 1200 160, 1350 160, 1500 120"
              className="wp-curve"
            />
          </svg>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`wp-step-card wp-reveal wp-${step.pos}`}
            >
              <div className="wp-icon-wrap">
                <span className="wp-step-num">{step.id}</span>
                <div className="wp-icon">{step.icon}</div>
              </div>

              <h4 className="wp-step-title">{step.title}</h4>
              <p className="wp-step-text">{step.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
