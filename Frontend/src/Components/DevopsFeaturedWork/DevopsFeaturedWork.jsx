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
            Dive into our portfolio to see how we have helped businesses like
            yours overcome challenges, achieve their goals, and thrive in todays
            digital landscape robust cybersecurity solutions.
          </p>

          <a href="/" className="tx-work-btn">
            View Our Work <span>↗</span>
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div className="tx-work-content">
          <span className="tx-work-tag">How It Works</span>

          <h2 className="tx-work-title">
            See Our Work in Action <br />
            <span>Featured Projects</span>
          </h2>

          <p className="tx-work-desc">
            Explore our diverse portfolio of successful projects and client
            engagements. From implementing robust cybersecurity solutions to
            developing cutting-edge software applications and optimizing
            network infrastructure
          </p>

          <div className="tx-work-list">
            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Highlighted Engagements</h4>
                <p>
                  Dive into our portfolio to see how we've helped businesses
                  like yours overcome challenges, achieve their goals,& thrive
                  in today's landscape.
                </p>
              </div>
            </div>

            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Our Track Record Showcase</h4>
                <p>
                  From implementing robust cybersecurity solutions to
                  developing cutting-edge software applications and optimizing
                  network.
                </p>
              </div>
            </div>

            <div className="tx-work-item">
              <span className="tx-check">✓</span>
              <div>
                <h4>Past Achievements Featured</h4>
                <p>
                  Each project exemplifies our dedication to delivering
                  innovative IT solutions that drive tangible results.
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
