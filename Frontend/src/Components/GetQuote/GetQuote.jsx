import React, { useState } from "react";
import "./GetQuote.css";
import agentImg from "../../assets/agent.png";

const GetQuote = () => {
  const [activeTab, setActiveTab] = useState("Cloud Services");
  const [limit, setLimit] = useState(400000);

  const tabs = ["Cloud Services", "Web Design", "App Development", "All Cloud Solutions"];

  return (
    <section className="quote-section">
      <div className="quote-container">

        {/* LEFT FORM */}
        <div className="quote-left" data-aos="fade-right">
          <span className="quote-badge">FREE CLOUD CONSULTATION</span>

          <h2 className="quote-title">
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

            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Business Email Address" />
            <input type="tel" placeholder="Phone Number" />

            {/* Dynamic Fields */}
            {activeTab === "Cloud Services" && (
              <input type="text" placeholder="Describe Your Cloud Requirements" />
            )}

            {activeTab === "Web Design" && (
              <input type="text" placeholder="Type of Website You Need" />
            )}

            {activeTab === "App Development" && (
              <input type="text" placeholder="Tell Us About Your App Idea" />
            )}

            {/* BUDGET SLIDER */}
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
        <div className="quote-right" data-aos="fade-left">
          <img src={agentImg} alt="Cloud Expert" />
        </div>

      </div>
    </section>
  );
};

export default GetQuote;
