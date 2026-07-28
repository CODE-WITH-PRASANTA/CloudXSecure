import React, { useState } from "react";
import "./CloudMigrationSidebar.css";
import { useNavigate } from "react-router-dom";

import categoryIcon from "../../assets/category-icon.png";

import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { BsFileEarmarkPdf } from "react-icons/bs";

const services = [
  
  {name: "AWS CONSULTING", path: "/services/aws-consulting"},
  { name: "AZURE CONSULTING", path: "/services/azure-consulting" },
  { name: "WEB DEVELOPMENT", path: "/services/web-development" },
  { name: "MOBILE APP DEVELOPMENT", path: "/services/mobile-app-development" },
  { name: "MANAGED CLOUD SERVICES", path: "/services/managed-cloud" },
  { name: "CLOUD SECURITY", path: "/services/cloud-security" },
  { name: "AI DEVELOPMENT", path: "/services/ai-development" },
  { name: "CLOUD MIGRATION", path: "/services/migration" },
  { name: "DEVOPS SERVICES", path: "/services/devops" },
  { name: "CUSTOM SOFTWARE DEVELOPMENT", path: "/cloudconsult/service/details" },
  { name: "IT INFRASTRUCTURE CONSULTING", path: "/services/it-infrastructure-consulting" },
  
];

const CloudMigrationSidebar = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate(); // ✅ use it

  return (
    <div className="cloudmisd">
      {/* MAIN SERVICES */}
      <div className="cloudmisd__box">
        <h3 className="cloudmisd__title">Main Services</h3>

        <div className="cloudmisd__list">
          {services.map((item, i) => (
            <div
              key={i}
              className={`cloudmisd__item ${active === i ? "active" : ""}`}
              onClick={() => {
                setActive(i);
                navigate(item.path); // ✅ redirect
              }}
            >
              <div className="cloudmisd__left">
                <img src={categoryIcon} alt="" />
                <span>{item.name}</span> {/* ✅ FIX */}
              </div>

              <FiArrowRight className="cloudmisd__arrow" />
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="cloudmisd__box">
        <h3 className="cloudmisd__title">Downloads</h3>

        <div className="cloudmisd__download cloudmisd__download--dark">
          <div>
            <BsFileEarmarkPdf />
            <span>SERVICE REPORT</span>
          </div>
          <FiDownload />
        </div>

        <div className="cloudmisd__download cloudmisd__download--orange">
          <div>
            <BsFileEarmarkPdf />
            <span>DOWNLOAD LISTS</span>
          </div>
          <FiDownload />
        </div>
      </div>

      {/* CONTACT */}
      <div className="cloudmisd__contactBox">
        <h4>Call Us Anytime</h4>

        <h2>766488777</h2>

        <p>
          <FiMail /> cloudxsecure@gmail.com
        </p>

        <button
          className="cloudmisd__btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CloudMigrationSidebar;
