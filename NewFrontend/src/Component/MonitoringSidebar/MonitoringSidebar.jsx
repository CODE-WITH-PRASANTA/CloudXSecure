import React, { useState } from "react";
import "./MonitoringSidebar.css";
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

const MonitoringSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (index, path) => {
    setActive(index);
    navigate(path);
  };

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
              onClick={() => handleServiceClick(i, item.path)}
            >
              <div className="monitor-sd__left">
                <img src={categoryIcon} alt="service icon" />
                <span>{item.name}</span>
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

        <h2>+91 766488777</h2>

        <p>
          <FiMail />cloudxsecure@gmail.com
        </p>

        <button
          className="monitor-sd__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MonitoringSidebar;