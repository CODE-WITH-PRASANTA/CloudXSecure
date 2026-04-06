import React, { useState } from "react";
import "./ServiceSidebar.css";

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

const ServiceSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="ssd">

      {/* MAIN SERVICES */}
      <div className="ssd__box">
        <h3 className="ssd__title">Main Services</h3>

        <div className="ssd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`ssd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="ssd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="ssd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="ssd__box">
        <h3 className="ssd__title">Downloads</h3>

        <div className="ssd__download ssd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="ssd__download ssd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="ssd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="ssd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default ServiceSidebar;