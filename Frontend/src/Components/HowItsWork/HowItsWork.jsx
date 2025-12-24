import React from "react";
import "./HowItsWork.css";

import centerImage from "../../assets/female.webp";

const HowItsWork = () => {
  return (
    <section className="HowitsWork">
      <div className="HowitsWork-container">

        {/* HEADER */}
        <div className="HowitsWork-header">
          <span className="HowitsWork-badge">HOW IT WORKS</span>
          <h2 className="HowitsWork-title">
            Expert IT Services Designed To <br />
            Elevate Your Business
          </h2>
        </div>

        {/* PROCESS CARD */}
        <div className="HowitsWork-card">

          {/* LEFT STEPS - First and Third (matching image layout) */}
          <div className="HowitsWork-steps left">

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">01</div>
              <div className="HowitsWork-step-box">
                <h4>Discovery Consultation</h4>
                <p>
                  With our intuitive interface and robust features, you buy, sell.
                </p>
              </div>
            </div>

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">02</div>
              <div className="HowitsWork-step-box">
                <h4>Quality Assurance</h4>
                <p>
                  Trusted partner in the world of crypto trading. Join us today.
                </p>
              </div>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="HowitsWork-center">
            <div className="HowitsWork-center-ring">
              <img src={centerImage} alt="IT Process" />
            </div>
          </div>

          {/* RIGHT STEPS - Second and Fourth (matching image layout) */}
          <div className="HowitsWork-steps right">

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">03</div>
              <div className="HowitsWork-step-box">
                <h4>Customized IT Strategy</h4>
                <p>
                  Plus, our commitment to the security means that PayCoin.
                </p>
              </div>
            </div>

            <div className="HowitsWork-step">
              <div className="HowitsWork-step-number">04</div>
              <div className="HowitsWork-step-box">
                <h4>24/7 Support</h4>
                <p>
                  Resources designed to help navigate best the dynamic.
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