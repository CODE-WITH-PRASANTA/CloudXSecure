import React, { useState } from "react";
import "./MonitoringSidebar.css";

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

const MonitoringSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="monitor-sd">

      {/* MAIN SERVICES */}
      <div className="monitor-sd__box">
        <h3 className="monitor-sd__title">Main Services</h3>

        <div className="monitor-sd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`monitor-sd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="monitor-sd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="monitor-sd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="monitor-sd__box">
        <h3 className="monitor-sd__title">Downloads</h3>

        <div className="monitor-sd__download monitor-sd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="monitor-sd__download monitor-sd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="monitor-sd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="monitor-sd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default MonitoringSidebar;