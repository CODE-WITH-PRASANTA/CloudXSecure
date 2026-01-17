import React from "react";
import "./AppDevlopmentWhyChooseUs.css";
import { FaPhoneAlt } from "react-icons/fa";

import imgMain from "../../assets/why-choose-one-img-1.jpg";
import imgSmall from "../../assets/why-choose-one-img-2.jpg";

const AppDevlopmentWhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-choose-container">

        {/* LEFT CONTENT */}
        <div className="why-choose-content">
          <span className="why-tag">WHY CHOOSE US</span>

          <h2 className="why-title">
            Elevate Growth With Our IT <br />
            Solutions <span>For Success.</span>
          </h2>

          <p className="why-desc">
           CloudXSecure delivers secure, scalable IT and cloud solutions that help businesses grow with confidence. We focus on performance, security, and long-term value.
          </p>

          {/* PROGRESS BARS */}
          <div className="progress-group">
            <div className="progress-item">
              <div className="progress-label">
                <span>Business Grow</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: "90%" }}></span>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Quality Products</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">
                <span>Innovation Design</span>
                <span>96%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: "96%" }}></span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="why-footer">
            <button className="why-btn">Learn More →</button>

            <div className="why-call">
              <span className="call-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <small>Call Us Any Time</small>
                <strong>088 (246) 642-27-10</strong>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="why-images">
          <div className="img-box main">
            <img src={imgMain} alt="Team Meeting" />
          </div>

          <div className="img-box small">
            <img src={imgSmall} alt="Support" />
          </div>

          <div className="badge top">
            <h4>13K</h4>
            <p>Active Clients</p>
          </div>

          <div className="badge bottom">
            <p>24/7 Customer Service</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppDevlopmentWhyChooseUs;
