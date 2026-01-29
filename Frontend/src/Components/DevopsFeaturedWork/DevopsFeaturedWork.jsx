import React from "react";
import "./DevopsFeaturedWork.css";

import workImg from "../../assets/devops-work-image.webp";

const FeaturedWork = () => {
  return (
    <section className="tx-work-section">
      <div className="tx-work-container">
        {/* LEFT IMAGE */}
        <div className="tx-work-img">
          <img src={workImg} alt="work" />
          <div className="tx-work-img-overlay"></div>

          <p className="tx-work-img-text">
            CloudXSecure provides secure cloud solutions, modern web design, and scalable app development to help businesses grow faster with reliable, performance-driven technology.
          </p>

          <a href="/" className="tx-work-btn">
            View Our Work <span>↗</span>
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div className="tx-work-content">
          <span className="tx-work-tag">How It Works</span>

          <h2 className="tx-work-title">
           See Our Work in Action — <br />
            <span>Featured CloudXSecure Projects </span>
          </h2>

          <p className="tx-work-desc">
            Explore CloudXSecure’s portfolio of successful cloud solutions, web design, and mobile app development projects. From secure cloud infrastructure and DevOps automation to modern websites and scalable applications, we help businesses transform digitally with reliable, high-performance IT solutions.
          </p>

          <div className="tx-work-list">
            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Highlighted Engagements</h4>
                <p>
                  Discover how CloudXSecure delivers cloud services, custom web design, and app development that drive growth, improve security, and streamline operations.
                </p>
              </div>
            </div>

            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Proven Track Record</h4>
                <p>
                  Our experts build secure cloud platforms, responsive websites, and powerful mobile apps—helping startups and enterprises achieve measurable results.
                </p>
              </div>
            </div>

            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Real Business Outcomes</h4>
                <p>
                  Every project reflects our commitment to scalable cloud solutions, user-focused design, and performance-driven development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
