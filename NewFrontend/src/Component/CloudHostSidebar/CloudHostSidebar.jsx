import React, { useState } from "react";
import "./CloudHostSidebar.css";
import { useNavigate } from "react-router-dom";

import categoryIcon from "../../assets/category-icon.png";

import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { BsFileEarmarkPdf } from "react-icons/bs";

const services = [
  
  {name: "IT MANAGEMENT", path: "/it/service/details"},
  { name: "DIGITAL MARKETING", path: "/digital/service/details" },
  { name: "MANAGED CLOUD SERVICES", path: "/managecloud/service/details" },
  { name: "CLOUD SECURITY", path: "/cloudsecurity/service/details" },
  { name: "CLOUD HOSTING", path: "/cloudhosting/service/details" },
  { name: "CLOUD MIGRATION", path: "/cloudmigration/service/details" },
  { name: "DEVOPS & AUTOMATION", path: "/devops/details" },
  { name: "MONITORING", path: "/monitoring/service/details" },
  { name: "BACKUP & DISASTER RECOVERY", path: "/backup/service/details" },
  { name: "CLOUD CONSULTING", path: "/cloudconsult/service/details" },
  { name: "WEB DEVELOPMENT SERVICE", path: "/web-development" },
  { name: "APPLICATION SERVICE", path: "/app-development" },
];

const CloudHostSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate(); // ✅ use it

  return (
    <div className="chsdsidebar">
      {/* MAIN SERVICES */}
      <div className="chsdsidebar__box">
        <h3 className="chsdsidebar__title">Main Services</h3>

        <div className="chsdsidebar__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`chsdsidebar__item ${active === i ? "active" : ""}`}
              onClick={() => {
                setActive(i);
                navigate(item.path); // ✅ redirect
              }}
            >
              <div className="chsdsidebar__left">
                <img src={categoryIcon} alt="" />
                <span>{item.name}</span> {/* ✅ FIX */}
              </div>

              <FiArrowRight className="chsdsidebar__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="chsdsidebar__box">
        <h3 className="chsdsidebar__title">Downloads</h3>

        <div className="chsdsidebar__download chsdsidebar__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="chsdsidebar__download chsdsidebar__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="chsdsidebar__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>766488777</h2>

        <p>
          <FiMail /> cloudxsecure@gmail.com
        </p>

        <button
          className="chsdsidebar__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CloudHostSidebar;
