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
      { threshold: 0.2 }
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
  }, []);

  return (
    <div
      className={`lk-wrap ${visible ? "lk-show" : ""}`}
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`lk-ticker ${paused ? "lk-paused" : ""}`}>
        <div className="lk-track">
          {/* duplicate list for seamless loop */}
          {[...words, ...words].map((word, index) => (
            <span className="lk-item" key={index}>
              {word}
              <span className="lk-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
