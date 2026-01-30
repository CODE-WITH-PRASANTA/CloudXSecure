import React from "react";
import "./RunningServices.css";

const services = [
  "Cloud Solution",
  "Cyber Security",
  "Data Analytics",
  "Manage IT Services",
  "Network Solution",
  "Consulting Service",
  "Software Development",
];

const RunningServices = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...services, ...services].map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-icon">✳</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningServices;
