import React, { useState } from "react";
import "./BackupSidebar.css";
import { useNavigate } from "react-router-dom";

import categoryIcon from "../../assets/category-icon.png";

import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { BsFileEarmarkPdf } from "react-icons/bs";

const services = [
  {
    name: "DATABASE SECURITY",
    path: "/cloudsecurity/service/details",
  },
  {
    name: "IT SOLUTION",
    path: "/it/service/details",
  },
  {
    name: "TECHNOLOGY CONSULT",
    path: "/cloudconsult/service/details",
  },
  {
    name: "APP DEVELOPMENT",
    path: "/app-development",
  },
  {
    name: "UI/UX DESIGN",
    path: "/services",
  },
  {
    name: "CYBER SECURITY",
    path: "/cloudsecurity/service/details",
  },
];

const BackupSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (index, path) => {
    setActive(index);
    navigate(path);
  };

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
              onClick={() => handleServiceClick(i, item.path)}
            >
              <div className="backup-sd__left">
                <img src={categoryIcon} alt="service icon" />
                <span>{item.name}</span>
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

        <h2>+91 766488777</h2>

        <p>
          <FiMail /> cloudxsecure@gmail.com
        </p>

        <button
          className="backup-sd__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BackupSidebar;