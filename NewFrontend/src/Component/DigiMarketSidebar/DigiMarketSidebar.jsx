import React, { useState } from "react";
import "./DigiMarketSidebar.css";

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

const DigiMarketSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="dms">

      {/* MAIN SERVICES */}
      <div className="dms__box">
        <h3 className="dms__title">Main Services</h3>

        <div className="dms__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`dms__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="dms__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="dms__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="dms__box">
        <h3 className="dms__title">Downloads</h3>

        <div className="dms__download dms__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="dms__download dms__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="dms__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="dms__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default DigiMarketSidebar;