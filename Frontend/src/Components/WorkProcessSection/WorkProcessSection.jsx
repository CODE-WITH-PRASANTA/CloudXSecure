import React from "react";
import "./WorkProcessSection.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import workprocess from "../../assets/workprocess.png";
import workprocesshand from "../../assets/workprocesshand.png";

const WorkProcessSection = () => {
  const navigate = useNavigate();

  return (
    <section className="cx-workprocess">

      <div className="cx-container">

        {/* LEFT */}
        <div className="cx-left">

          <div className="cx-how">
            <FaArrowLeft />
            <span>HOW WE WORK</span>
            <FaArrowRightLong />
          </div>

          <h2>Smart Cloud & Digital Solutions for Modern Businesses</h2>

          <p>
            At CloudXSecure, we deliver secure cloud services, high-performance web design, scalable app development, and complete cloud solutions—customized to help your business grow faster, stay protected, and succeed digitally.
          </p>

          <button onClick={() => navigate("/contact")}>
            Explore How It Works <FaArrowRight />
          </button>

        </div>

        {/* RIGHT */}
        <div className="cx-right">

          <div className="cx-circle">

            <img src={workprocess} alt="" />

          </div>

        </div>

      </div>

      <img src={workprocesshand} className="cx-hand" alt="" />

    </section>
  );
};

export default WorkProcessSection;
