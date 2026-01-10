import React, { useEffect, useRef, useState } from "react";
import "./CloudMaigrationachievement.css";
import { FaUsers, FaCheckCircle, FaUserTie, FaBullhorn } from "react-icons/fa";

// right side background image
import rightBg from "../../assets/achiv-shape.webp";

export default function AchievementSection() {
  const stats = [
    { id: 1, icon: <FaUsers />, number: 5561, label: "Satisfied Clients" },
    { id: 2, icon: <FaCheckCircle />, number: 600, label: "Finished Projects" },
    { id: 3, icon: <FaUserTie />, number: 250, label: "Skilled Experts" },
    { id: 4, icon: <FaBullhorn />, number: 590, label: "Media Posts" },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  /* ---------------- SCROLL REVEAL ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  /* ---------------- COUNT UP ---------------- */
  useEffect(() => {
    if (!visible) return;

    const duration = 1500;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(stats.map((s) => Math.floor(progress * s.number)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <section className="ach-wrap" ref={sectionRef}>
      <div className="ach-container">

        <div className={`ach-banner ${visible ? "ach-show" : ""}`}>

          {/* LEFT CONTENT */}
          <div className="ach-left">
            <span className="ach-tag">ACHIEVEMENT</span>
            <h2 className="ach-title">
              We Are Increasing Business <br /> Success
            </h2>
          </div>

          {/* CENTER STATS */}
          <div className="ach-stats">
            {stats.map((item, i) => (
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

          {/* RIGHT BG IMAGE (BACKGROUND MODE) */}
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
