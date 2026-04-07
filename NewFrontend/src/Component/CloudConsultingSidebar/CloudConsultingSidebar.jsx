import React, { useState } from "react";
import "./CloudConsultingSidebar.css";

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

const CloudConsultingSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="cloud-consult-sd">

      {/* MAIN SERVICES */}
      <div className="cloud-consult-sd__box">
        <h3 className="cloud-consult-sd__title">Main Services</h3>

        <div className="cloud-consult-sd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`cloud-consult-sd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="cloud-consult-sd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="cloud-consult-sd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="cloud-consult-sd__box">
        <h3 className="cloud-consult-sd__title">Downloads</h3>

        <div className="cloud-consult-sd__download cloud-consult-sd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="cloud-consult-sd__download cloud-consult-sd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="cloud-consult-sd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="cloud-consult-sd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default CloudConsultingSidebar;