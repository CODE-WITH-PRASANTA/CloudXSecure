import React, { useEffect, useState } from "react";
import "./AppDevlopmentOurService.css";
import {
  FaChartLine,
  FaCode,
  FaShieldAlt,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights.",
    points: ["Business intelligence", "Real-time analytics", "Predictive models"],
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    desc: "Scalable custom software solutions.",
    points: ["Web & mobile apps", "API integration", "Agile development"],
  },
  {
    icon: <FaShieldAlt />,
    title: "Risk Management",
    desc: "Identify and mitigate potential risks.",
    points: ["Security audits", "Compliance", "Threat monitoring"],
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "User-centered digital experiences.",
    points: ["User research", "Wireframes", "Design systems"],
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "High-performance modern websites.",
    points: ["Responsive design", "SEO optimization", "Fast performance"],
  },
  {
    icon: <FaChartLine />,
    title: "Cloud Solutions",
    desc: "Secure & scalable cloud services.",
    points: ["Cloud migration", "DevOps", "Cost optimization"],
  },
];

const AppDevlopmentOurService = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 4;

  // Desktop auto-slide only
  useEffect(() => {
    if (window.innerWidth <= 576) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > services.length - visibleCards ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="app-service">
      <div className="app-service-container">
        <div className="app-service-header">
          <span className="app-service-tag">OUR SERVICES</span>
          <h2>
            Innovative IT Services <br />
            Tailored <span>For Your Success.</span>
          </h2>
          <p className="app-service-subtext">
            Scalable, secure, and innovative IT services designed for growth.
          </p>
        </div>

        <div className="service-carousel">
          <div
            className="service-track"
            style={
              window.innerWidth <= 576
                ? {} // 🔥 Disable transform on mobile
                : { transform: `translateX(-${index * 25}%)` }
            }
          >
            {services.map((item, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="service-desc">{item.desc}</p>

                <ul className="service-list">
                  {item.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                <button className="service-btn">
                  Read More <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination (hidden on mobile via CSS) */}
        <div className="service-dots">
          {Array.from({ length: services.length - visibleCards + 1 }).map(
            (_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AppDevlopmentOurService;
