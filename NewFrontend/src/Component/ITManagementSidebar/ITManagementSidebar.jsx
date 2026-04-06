import React, { useState } from "react";
import "./ITManagementSidebar.css";

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

const ITManagementSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="itmsidebar">

      {/* MAIN SERVICES */}
      <div className="itmsidebar__box">
        <h3 className="itmsidebar__title">Main Services</h3>

        <div className="itmsidebar__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`itmsidebar__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="itmsidebar__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="itmsidebar__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="itmsidebar__box">
        <h3 className="itmsidebar__title">Downloads</h3>

        <div className="itmsidebar__download itmsidebar__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="itmsidebar__download itmsidebar__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="itmsidebar__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="itmsidebar__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default ITManagementSidebar;