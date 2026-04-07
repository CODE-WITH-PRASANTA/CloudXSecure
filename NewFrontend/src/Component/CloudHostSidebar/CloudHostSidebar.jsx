import React, { useState } from "react";
import "./CloudHostSidebar.css";

import categoryIcon from "../../assets/category-icon.png";

import { FiArrowRight } from "react-icons/fi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FiDownload, FiMail } from "react-icons/fi";

const services = [
  "DATABASE SECURITY",
  "IT SOLUTION",
  "TECHNOLOGY CONSULT",
  "APP DEVELOPMENT",
  "UI/UX DESIGN",
  "CYBER SECURITY",
];

const CloudHostSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="chsd">

      {/* MAIN SERVICES */}
      <div className="chsd__box">
        <h3 className="chsd__title">Main Services</h3>

        <div className="chsd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`chsd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="chsd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="chsd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="chsd__box">
        <h3 className="chsd__title">Downloads</h3>

        <div className="chsd__download chsd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="chsd__download chsd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="chsd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="chsd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default CloudHostSidebar;