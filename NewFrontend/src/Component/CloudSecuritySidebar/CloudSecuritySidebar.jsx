import React, { useState } from "react";
import "./CloudSecuritySidebar.css";

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

const CloudSecuritySidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="cldsecusidebar">

      {/* MAIN SERVICES */}
      <div className="cldsecusidebar__box">
        <h3 className="cldsecusidebar__title">Main Services</h3>

        <div className="cldsecusidebar__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`cldsecusidebar__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="cldsecusidebar__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="cldsecusidebar__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="cldsecusidebar__box">
        <h3 className="cldsecusidebar__title">Downloads</h3>

        <div className="cldsecusidebar__download cldsecusidebar__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="cldsecusidebar__download cldsecusidebar__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="cldsecusidebar__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="cldsecusidebar__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default CloudSecuritySidebar;