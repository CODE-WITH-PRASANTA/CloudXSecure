import React, { useEffect, useRef, useState } from "react";
import "./CloudMaigrationachievement.css";
import { FaUsers, FaCheckCircle, FaUserTie, FaBullhorn } from "react-icons/fa";

// right side background image
import rightBg from "../../assets/achiv-shape.webp";

/* MOVE STATS OUTSIDE COMPONENT */
const statsData = [
  { id: 1, icon: <FaUsers />, number: 5561, label: "Happy Clients Worldwide" },
  { id: 2, icon: <FaCheckCircle />, number: 600, label: "Cloud & Digital Projects Delivered" },
  { id: 3, icon: <FaUserTie />, number: 250, label: "Certified Cloud & Tech Experts" },
  { id: 4, icon: <FaBullhorn />, number: 590, label: "Successful Deployments & Launches" },
];

export default function AchievementSection() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  /* ---------------- SCROLL REVEAL ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------------- COUNT UP ---------------- */
  useEffect(() => {
    if (!visible) return;

    const duration = 1500;
    let start = null;
    let rafId;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);

      setCounts(
        statsData.map((s) => Math.floor(progress * s.number))
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [visible]);

  return (
    <section className="ach-wrap" ref={sectionRef}>
      <div className="ach-container">
        <div className={`ach-banner ${visible ? "ach-show" : ""}`}>

          {/* LEFT CONTENT */}
          <div className="ach-left">
            <span className="ach-tag">ACHIEVEMENT</span>
            <h2 className="ach-title">
              Driving Business Growth With Secure Cloud & <br />
              Digital Solutions
            </h2>
          </div>

          {/* CENTER STATS */}
          <div className="ach-stats">
            {statsData.map((item, i) => (
              <div className="ach-stat-box" key={item.id}>
                <div className="ach-icon-wrap">
                  <span className="ach-icon-num">{item.id}</span>
                  <div className="ach-icon">{item.icon}</div>
                </div>

                <h3>{counts[i].toLocaleString()}+</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          {/* RIGHT BG IMAGE */}
          <div
            className="ach-right-bg"
            style={{ backgroundImage: `url(${rightBg})` }}
          >
            <div className="ach-right-overlay"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
