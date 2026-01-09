import React, { useEffect, useRef, useState } from "react";
import "./CloudMaigrationimage.css";

export default function LoopingKeywords() {
  const words = [
    "Solution",
    "Technology",
    "Data Security",
    "Cyber Security",
    "IT Solution",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);

  const wrapRef = useRef(null);

  /* -------- SCROLL REVEAL -------- */
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

    if (wrapRef.current) observer.observe(wrapRef.current);
  }, []);

  /* -------- AUTO LOOP (pause on hover) -------- */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className={`lk-wrap ${visible ? "lk-show" : ""}`}
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="lk-line">
        {words.map((word, index) => (
          <span
            key={index}
            className={`lk-item ${
              index === activeIndex ? "lk-active" : ""
            }`}
            style={{
              transform: `translateY(${(index - activeIndex) * 100}%)`,
            }}
          >
            {word}
            <span className="lk-star">✱</span>
          </span>
        ))}
      </div>
    </div>
  );
}
