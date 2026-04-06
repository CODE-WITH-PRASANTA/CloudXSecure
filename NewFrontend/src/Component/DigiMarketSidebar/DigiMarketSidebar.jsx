import React, { useState } from "react";
import "./DigiMarketSidebar.css";
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

const DigiMarketSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate(); // ✅ added

  return (
    <div className="dms">

      {/* MAIN SERVICES */}
      <div className="dms__box">
        <h3 className="dms__title">Main Services</h3>

        <div className="dms__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`dms__item ${active === i ? "active" : ""}`}
              onClick={() => {
                setActive(i);
                navigate(item.path); // ✅ redirect
              }}
            >
              <div className="dms__left">
                <img src={categoryIcon} alt="" />
                <span>{item.name}</span> {/* ✅ fixed */}
              </div>

              <FiArrowRight className="dms__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="dms__box">
        <h3 className="dms__title">Downloads</h3>

        <div className="dms__download dms__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="dms__download dms__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="dms__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>76664 88777</h2>

        <p>
          <FiMail /> cloudxsecure@gmail.com
        </p>

        <button
          className="dms__btn"
          onClick={() => navigate("/contact")} // ✅ added
        >
          Contact Us <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default DigiMarketSidebar;