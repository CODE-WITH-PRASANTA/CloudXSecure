import React from "react";
import "./HowItsWork.css";

import centerImage from "../../assets/case-img4.webp";

const HowItsWork = () => {
  return (
    <section className="HowitsWork" id="how-it-works">
      <div className="HowitsWork-container">

        {/* HEADER */}
        <div className="HowitsWork-header">
          <span className="HowitsWork-badge">
            HOW CLOUDXSECURE WORKS
          </span>

          <h2 className="HowitsWork-title">
            A Simple, Transparent Process to Deliver <br />
            Secure & Scalable IT Solutions
          </h2>
        </div>

        {/* PROCESS CARD */}
        <div className="HowitsWork-card">

          {/* LEFT STEPS */}
          <div className="HowitsWork-steps left">

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">01</div>
              <div className="HowitsWork-step-box">
                <h4>Requirement Analysis & Consultation</h4>
                <p>
                  At CloudXsecure, we begin by understanding your business goals,
                  technical challenges, and growth plans. This helps us recommend
                  the right cloud, web, or app solution tailored to your needs.
                </p>
              </div>
            </div>

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">02</div>
              <div className="HowitsWork-step-box">
                <h4>Design, Development & Testing</h4>
                <p>
                  Our team designs user-focused interfaces and develops secure,
                  high-performance systems. Every solution goes through strict
                  testing to ensure reliability, speed, and data security.
                </p>
              </div>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="HowitsWork-center">
            <div className="HowitsWork-center-ring">
              <img
                src={centerImage}
                alt="CloudXsecure IT workflow process including development, cloud integration and deployment"
              />
            </div>
          </div>

          {/* RIGHT STEPS */}
          <div className="HowitsWork-steps right">

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">03</div>
              <div className="HowitsWork-step-box">
                <h4>Cloud Strategy & Deployment</h4>
                <p>
                  We implement customized cloud infrastructure and IT strategies
                  that support scalability, performance, and long-term business
                  growth while maintaining strong security standards.
                </p>
              </div>
            </div>

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">04</div>
              <div className="HowitsWork-step-box">
                <h4>Ongoing Support & Optimization</h4>
                <p>
                  CloudXsecure provides continuous monitoring, updates, and
                  technical support to ensure your systems stay secure,
                  optimized, and ready for future expansion.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItsWork;