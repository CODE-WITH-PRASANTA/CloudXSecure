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
    <section className="app-devlopment-our-service">
      <div className="app-devlopment-our-service-container">
        <div className="app-devlopment-our-service-header">
          <span className="app-devlopment-our-service-tag">OUR SERVICES</span>
          <h2>
            Innovative IT Services <br />
            Tailored <span>For Your Success.</span>
          </h2>
          <p className="app-devlopment-our-service-subtext">
            Scalable, secure, and innovative IT services designed for growth.
          </p>
        </div>

        <div className="app-devlopment-our-service-carousel">
          <div
            className="app-devlopment-our-service-track"
            style={
              window.innerWidth <= 576
                ? {}
                : { transform: `translateX(-${index * 25}%)` }
            }
          >
            {services.map((item, i) => (
              <div className="app-devlopment-our-service-card" key={i}>
                <div className="app-devlopment-our-service-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p className="app-devlopment-our-service-desc">{item.desc}</p>

                <ul className="app-devlopment-our-service-list">
                  {item.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>

                <button className="app-devlopment-our-service-btn">
                  Read More <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="app-devlopment-our-service-dots">
          {Array.from({ length: services.length - visibleCards + 1 }).map(
            (_, i) => (
              <span
                key={i}
                className={`app-devlopment-our-service-dot ${
                  i === index ? "active" : ""
                }`}
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
