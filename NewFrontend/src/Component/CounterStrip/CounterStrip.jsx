import React, { useEffect, useRef, useState } from "react";
import "./CounterStrip.css";

import bgWave from "../../assets/counter-two-bg-shape.webp";

import { FaTrophy, FaUsers, FaStar, FaSmile } from "react-icons/fa";

const counters = [
  { icon: <FaTrophy />, value: 120, label: "Award Winning" },
  { icon: <FaUsers />, value: 99, suffix: "%", label: "Satisfied Client" },
  { icon: <FaStar />, value: 10, suffix: "M", label: "Worldwide Reviews" },
  { icon: <FaSmile />, value: 200, label: "Happy Clients" },
];

const CounterStrip = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    if (!start) return;

    const intervals = counters.map((item, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[index] < item.value) {
            updated[index] += Math.ceil(item.value / 60);
          } else {
            updated[index] = item.value;
          }
          return updated;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [start]);

  return (
    <section className="counter2-section" ref={sectionRef}>
      {/* Moving Background */}
      <div
        className="counter2-bg"
        style={{ backgroundImage: `url(${bgWave})` }}
      ></div>

      <div className="counter2-container">
        {counters.map((item, i) => (
          <div className="counter2-box" key={i}>
            <div className="counter2-icon">
              {item.icon}
            </div>

            <h3 className="counter2-number">
              {counts[i]}
              {item.suffix || ""}
            </h3>

            <p className="counter2-text">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterStrip;
