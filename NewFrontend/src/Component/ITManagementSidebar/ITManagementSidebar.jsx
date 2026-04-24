import React, { useState } from "react";
import "./ITManagementSidebar.css";
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

const ITManagementSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate(); // ✅ use it

  return (
    <div className="itmsidebar">
      {/* MAIN SERVICES */}
      <div className="itmsidebar__box">
        <h3 className="itmsidebar__title">Main Services</h3>

        <div className="itmsidebar__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`itmsidebar__item ${active === i ? "active" : ""}`}
              onClick={() => {
                setActive(i);
                navigate(item.path); // ✅ redirect
              }}
            >
              <div className="itmsidebar__left">
                <img src={categoryIcon} alt="" />
                <span>{item.name}</span> {/* ✅ FIX */}
              </div>

              <FiArrowRight className="itmsidebar__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="itmsidebar__box">
        <h3 className="itmsidebar__title">Downloads</h3>

        <div className="itmsidebar__download itmsidebar__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="itmsidebar__download itmsidebar__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="itmsidebar__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>766488777</h2>

        <p>
          <FiMail /> cloudxsecure@gmail.com
        </p>

        <button
          className="itmsidebar__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ITManagementSidebar;
