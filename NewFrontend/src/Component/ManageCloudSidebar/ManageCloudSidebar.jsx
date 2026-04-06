import React, { useState } from "react";
import "./ManageCloudSidebar.css";

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

const ManageCloudSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="mcs">

      {/* MAIN SERVICES */}
      <div className="mcs__box">
        <h3 className="mcs__title">Main Services</h3>

        <div className="mcs__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`mcs__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="mcs__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="mcs__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="mcs__box">
        <h3 className="mcs__title">Downloads</h3>

        <div className="mcs__download mcs__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="mcs__download mcs__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="mcs__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="mcs__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default ManageCloudSidebar;