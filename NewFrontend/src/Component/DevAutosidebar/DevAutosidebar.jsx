import React, { useState } from "react";
import "./DevAutosidebar.css";
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

const DevAutosidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index, path) => {
    setActive(index);
    navigate(path); // 🔥 navigate to page
  };

  return (
    <div className="dev-auto-ssd">

      {/* MAIN SERVICES */}
      <div className="dev-auto-ssd__box">
        <h3 className="dev-auto-ssd__title">Main Services</h3>

        <div className="dev-auto-ssd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`dev-auto-ssd__item ${active === i ? "active" : ""}`}
              onClick={() => handleClick(i, item.path)}
            >
              <div className="dev-auto-ssd__left">
                <img src={categoryIcon} alt="service icon" />
                <span>{item.name}</span>
              </div>

              <FiArrowRight className="dev-auto-ssd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="dev-auto-ssd__box">
        <h3 className="dev-auto-ssd__title">Downloads</h3>

        <div className="dev-auto-ssd__download dev-auto-ssd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="dev-auto-ssd__download dev-auto-ssd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="dev-auto-ssd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>766488777</h2>

        <p>
          <FiMail />cloudxsecure@gmail.com
        </p>

        <button
          className="dev-auto-ssd__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default DevAutosidebar;