import React, { useState } from "react";
import "./DevAutosidebar.css";

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

const DevAutosidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="dev-auto-ssd">

      {/* MAIN SERVICES */}
      <div className="dev-auto-ssd__box">
        <h3 className="dev-auto-ssd__title">Main Services</h3>

        <div className="dev-auto-ssd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`dev-auto-ssd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="dev-auto-ssd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="dev-auto-ssd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="dev-auto-ssd__box">
        <h3 className="dev-auto-ssd__title">Downloads</h3>

        <div className="dev-auto-ssd__download dev-auto-ssd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="dev-auto-ssd__download dev-auto-ssd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="dev-auto-ssd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="dev-auto-ssd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default DevAutosidebar;