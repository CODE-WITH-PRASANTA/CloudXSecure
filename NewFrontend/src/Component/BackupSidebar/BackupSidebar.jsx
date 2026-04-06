import React, { useState } from "react";
import "./BackupSidebar.css";

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

const BackupSidebar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="backup-sd">

      {/* MAIN SERVICES */}
      <div className="backup-sd__box">
        <h3 className="backup-sd__title">Main Services</h3>

        <div className="backup-sd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`backup-sd__item ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="backup-sd__left">
                <img src={categoryIcon} alt="" />
                <span>{item}</span>
              </div>

              <FiArrowRight className="backup-sd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="backup-sd__box">
        <h3 className="backup-sd__title">Downloads</h3>

        <div className="backup-sd__download backup-sd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="backup-sd__download backup-sd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="backup-sd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>+123 (4567) 890</h2>

        <p>
          <FiMail /> example@gmail.com
        </p>

        <button className="backup-sd__btn">
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default BackupSidebar;