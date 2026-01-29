import React, { useState } from "react";
import "./GetQuote.css";
import agentImg from "../../assets/agent.png";

const GetQuote = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [limit, setLimit] = useState(400000);

  const tabs = ["Cloud Services", "Web Design", "App Development", "All Cloud Solutions"];

  return (
    <section className="quote-section">
      <div className="quote-container">

        {/* LEFT FORM */}
        <div className="quote-left">
          <span className="quote-badge">FREE CLOUD CONSULTATION</span>

          <h2>
            Get a Free Cloud & Digital Solutions Quote <br />
            from CloudXSecure Experts
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
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Business Email Address" />
            <input type="tel" placeholder="Phone Number" />

            {/* TAB BASED FIELDS */}
            {activeTab === "Vehicles" && (
              <input type="text" placeholder="Tell Us About Your Project" />
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
                <span>Estimated Project Budget:</span>
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

            <button className="quote-btn">Start Your Free Consultation</button>
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
