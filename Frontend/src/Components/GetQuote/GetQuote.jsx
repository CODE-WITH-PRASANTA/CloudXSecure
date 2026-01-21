import React, { useState } from "react";
import "./GetQuote.css";
import agentImg from "../../assets/agent.png";

const GetQuote = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [limit, setLimit] = useState(400000);

  const tabs = ["Home", "Vehicles", "Health", "Life"];

  return (
    <section className="quote-section">
      <div className="quote-container">

        {/* LEFT FORM */}
        <div className="quote-left">
          <span className="quote-badge">GET A FREE ESTIMATE</span>

          <h2>
            Get an insurance quote <br />
            From Our Expertise
          </h2>

          {/* TABS */}
          <div className="quote-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FORM */}
          <form className="quote-form">

            {/* COMMON FIELDS */}
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Phone" />

            {/* TAB BASED FIELDS */}
            {activeTab === "Vehicles" && (
              <input type="text" placeholder="Vehicle Number" />
            )}

            {activeTab === "Health" && (
              <input type="text" placeholder="Number of Family Members" />
            )}

            {activeTab === "Life" && (
              <input type="text" placeholder="Annual Income" />
            )}

            {/* SLIDER */}
            <div className="slider-box">
              <div className="slider-label">
                <span>Limits Of Balance:</span>
                <strong>${limit}</strong>
              </div>

              <input
                type="range"
                min="100000"
                max="1000000"
                step="50000"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              />
            </div>

            <button className="quote-btn">GET A QUOTE NOW</button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="quote-right">
          <img src={agentImg} alt="Insurance Expert" />
        </div>

      </div>
    </section>
  );
};

export default GetQuote;
