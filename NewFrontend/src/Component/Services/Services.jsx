import React, { useState } from "react";
import "./Services.css";
import { FaPlus } from "react-icons/fa";

/* IMPORT ICON IMAGES */
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: icon1,
  },
  {
    id: 2,
    title: "IT Management",
    desc: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: icon3,
  },
  {
    id: 4,
    title: "App Development",
    desc: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: icon4,
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="services">
      <div className="services-container">

        <p className="tag">• SOLUTEK COMPANY</p>

        <h2 className="services-title">
          How Professional IT Services <br />
          Can Drive <span>Success.</span>
        </h2>

        <div className="services-grid">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className={`service-card ${
                activeCard === item.id ? "active" : ""
              }`}
              onClick={() => setActiveCard(item.id)}
            >
              {/* ICON */}
              <div className="icon">
                <img src={item.icon} alt={item.title} />
              </div>

              {/* CONTENT */}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {/* BUTTON */}
              <button className="read-more">
                <span className="plus">
                  <FaPlus />
                </span>
                READ MORE
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;