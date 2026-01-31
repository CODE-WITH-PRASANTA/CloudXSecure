import React from "react";
import "./ConsultRequest.css";

import bgImg from "../../assets/const-request_bg.webp";

const RequestSchedule = () => {
  return (
    <section
      className="request-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Floating white bulb */}
      <span className="floating-bulb"></span>

      <div className="request-container">
        <h2>
         Schedule Your Free Cloud  <br />
           & Digital Transformation Consultation 
        </h2>

        <div className="request-actions">
          {/* Hotline */}
          <div className="hotline">
            <span className="call-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V21A2 2 0 0120.18 23C9.4 22.32 1.68 14.6 1 3.82A2 2 0 013 2h4.09a2 2 0 012 1.72c.12.9.32 1.77.59 2.6a2 2 0 01-.45 2.11L8 9a16 16 0 007 7l.57-.23a2 2 0 012.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0122 16.92z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <div>
              <span>Supporting Line</span>
              <strong>7666488777</strong>
            </div>
          </div>

          {/* Button */}
          <button className="request-btn-fixed">
  Request a Free Consultation
  <span className="request-arrow">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5L15 12L8 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>

        </div>
      </div>
    </section>
  );
};

export default RequestSchedule;
