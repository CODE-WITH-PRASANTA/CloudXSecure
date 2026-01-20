import React from "react";
import "./BDOverview.css";
import {
  FaChartPie,
  FaTrophy,
  FaUsers
} from "react-icons/fa";

// IMAGES
import mainImg from "../../assets/h2_about_img01.jpg";

const BDOverview = () => {
  return (
    <section className="co-section">
      <div className="co-container">

        {/* LEFT IMAGE */}
        <div className="co-left">
          <div className="co-image-wrap">
            <img src={mainImg} alt="Business Expert" />

            {/* FLOAT ICON */}
            <div className="co-icon-badge">
              <FaChartPie />
            </div>

            {/* FLOAT STAT */}
            <div className="co-stat-card">
              <h4>98%</h4>
              <p>Business Goal</p>

              <div className="co-bars">
                <span className="b1" />
                <span className="b2" />
                <span className="b3" />
                <span className="b4" />
                <span className="b5" />
              </div>

              <small>Jan&nbsp;&nbsp;Feb&nbsp;&nbsp;Mar&nbsp;&nbsp;Apr&nbsp;&nbsp;May</small>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="co-right">
          <span className="co-badge">COMPANY OVERVIEW</span>

          <h2>
            Plan your business strategy <br />
            with Our Experts
          </h2>

          <p>
            We help organizations design data-driven strategies that improve
            performance, scalability, and long-term growth through expert
            financial and operational planning.
          </p>

          <p>
            Our approach combines insight, execution, and measurable outcomes
            tailored to modern business needs.
          </p>

          {/* METRICS */}
          <div className="co-metrics">
            <div className="co-metric">
              <FaTrophy />
              <div>
                <h3>235+</h3>
                <span>Best Award</span>
              </div>
            </div>

            <div className="co-metric">
              <FaUsers />
              <div>
                <h3>98k</h3>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BDOverview;
