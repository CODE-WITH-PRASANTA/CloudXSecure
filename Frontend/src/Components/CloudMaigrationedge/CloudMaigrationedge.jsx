import React from "react";
import "./CloudMaigrationedge.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function ConnectBanner() {
  return (
    <section className="cb-wrap">
      <div className="cb-container">

        <div className="cb-banner">

          {/* LEFT TEXT */}
          <div className="cb-text">
            <h2>
              Stay Connected With <br />
              <span>Cutting Edge IT</span>
            </h2>
          </div>

          {/* MIDDLE CALL INFO */}
          <div className="cb-call">
            <div className="cb-call-icon">
              <FaPhoneAlt />
            </div>
            <div className="cb-call-info">
              <p>Call Us Now</p>
              <h4>+208-555-0112</h4>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div className="cb-action">
            <button className="cb-btn">
              Get A Quote <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
