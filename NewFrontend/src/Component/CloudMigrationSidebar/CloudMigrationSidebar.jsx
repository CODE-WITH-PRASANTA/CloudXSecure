import React, { useState } from "react";
import "./CloudMigrationSidebar.css";

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

const CloudMigrationSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="cloudmisd">

      {/* MAIN SERVICES */}
      <div className="cloudmisd__box">
        <h3 className="cloudmisd__title">Main Services</h3>

        <div className="cloudmisd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`cloudmisd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="cloudmisd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="cloudmisd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="cloudmisd__box">
        <h3 className="cloudmisd__title">Downloads</h3>

        <div className="cloudmisd__download cloudmisd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="cloudmisd__download cloudmisd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="cloudmisd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="cloudmisd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default CloudMigrationSidebar;