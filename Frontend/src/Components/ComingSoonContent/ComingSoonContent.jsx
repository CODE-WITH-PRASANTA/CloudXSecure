import React, { useEffect, useState } from "react";
import "./ComingSoonContent.css";
import bgImage from "../../assets/coming-soon-bg.webp";
import logo from "../../assets/cloud.png";

const ComingSoonContent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      return {
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((diff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="coming-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="coming-overlay" />

      <div className="coming-card">
        <img src={logo} alt="Logo" className="coming-logo" />

        <h1 className="coming-title">We Are Launching Soon!</h1>

        <div className="countdown">
          <div className="count-item">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="count-item">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="count-item">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="count-item">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonContent;
