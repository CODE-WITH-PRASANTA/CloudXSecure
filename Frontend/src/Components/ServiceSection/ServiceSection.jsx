import React, { useState } from "react";
import "./ServiceSection.css";

import serviceIcon1 from "../../assets/service1.svg";
import serviceIcon2 from "../../assets/service2.svg";
import serviceIcon3 from "../../assets/service3.svg";
import chatPerson from "../../assets/chartperson.png";

const services = [
  {
    id: 1,
    icon: serviceIcon1,
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud environments built for speed, reliability, and business growth.",
  },
  {
    id: 2,
    icon: serviceIcon2,
    title: "Web Design & Development",
    desc: "High-performance websites designed to engage users and convert visitors into customers.",
  },
  {
    id: 3,
    icon: serviceIcon3,
    title: "App Development",
    desc: "Custom mobile and web apps built for seamless experiences and long-term scalability.",
  },
];

const Services = () => {
  const [active, setActive] = useState(3);

  return (
    <section className="Hosting-cx-services">
      <div className="Hosting-cx-container">

        <div className="Hosting-cx-header">
          <span>OUR SERVICES</span>
          <h2>Smart Cloud & Digital Solutions <br /> That Power Your Growth</h2>

          <p>
            CloudXSecure delivers secure cloud services, modern web design, scalable app development, and complete cloud solutions to help businesses grow faster, stay protected, and perform at scale.
          </p>
        </div>

        <div className="Hosting-cx-grid">

          <div className="Hosting-cx-cards">
            {services.map((item) => (
              <div
                key={item.id}
                className={`Hosting-cx-card ${active === item.id ? "active" : ""}`}
                onMouseEnter={() => setActive(item.id)}
              >
                <div className="Hosting-cx-icon">
                  <img src={item.icon} alt="" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button>
                  Read more <span>››</span>
                </button>
              </div>
            ))}
          </div>

          <div className="Hosting-cx-image">
            <img src={chatPerson} alt="chat" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
