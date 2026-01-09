import React from "react";
import "./WorkProcessSection.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import workprocess from "../../assets/workprocess.png";
import workprocesshand from "../../assets/workprocesshand.png";

const WorkProcessSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section className="workprocess-section">
      {/* LEFT SIDE CONTENT */}
      <div className="workprocess-left">
        <div className="workprocess-header">
          {/* SUBTITLE WITH ARROWS */}
          <div className="howwe-do">
            <FaArrowLeft className="howwe-arrow" />
            <span className="howwe-text">HOW WE DO</span>
            <FaArrowRightLong className="howwe-arrow" />
          </div>

          {/* MAIN TITLE */}
          <h2 className="title">Amazing Solutions For Business</h2>
          <p className="description">
            We don't believe in a one-size-fits-all approach. Our services are
            carefully customized to suit your specific needs, ensuring you
            achieve your goals.
          </p>

          {/* BUTTON */}
          <button className="cta-btn" onClick={handleNavigate}>
            HOW IT WORKS <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="workprocess-right">
        <div className="image-wrapper">
          <img
            src={workprocess}
            alt="Work Process"
            className="workprocess-image"
          />
        </div>
      </div>

      {/* HAND IMAGE AT BOTTOM */}
      <img
        src={workprocesshand}
        alt="Hand Illustration"
        className="hand-image"
      />
    </section>
  );
};

export default WorkProcessSection;
