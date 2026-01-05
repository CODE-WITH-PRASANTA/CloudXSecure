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
  "Cloud Solution",
];

const RunningServices = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {/* duplicate list for seamless loop */}
        {[...services, ...services].map((item, index) => (
          <span key={index} className="marquee-item">
            ✳ {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningServices;
