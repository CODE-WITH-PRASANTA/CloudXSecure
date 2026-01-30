import React from "react";
import "./ConsultCounter.css";
import bgImg from "../../assets/const_counter_bg.webp";

export default function ConsultCounter() {
  return (
    <section
      className="counter-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* floating bulbs */}
      <span className="bulb pink b1"></span>
      <span className="bulb pink b2"></span>
      <span className="bulb green b3"></span>
      <span className="bulb blue b4"></span>

      <div className="counter-container">
        <div className="counter-box">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

        <div className="counter-box">
          <h2>0K</h2>
          <p>Complete Projects</p>
        </div>

        <div className="counter-box">
          <h2>0K</h2>
          <p>Satisfied Clients</p>
        </div>

        <div className="counter-box">
          <h2>0K</h2>
          <p>Trade In The World</p>
        </div>
      </div>
    </section>
  );
}
