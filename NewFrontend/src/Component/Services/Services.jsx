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
    desc: "At CloudXsecure, we build fast, secure, and scalable websites tailored to your business goals. Our web development solutions focus on performance, user experience, and SEO optimization to help your brand grow online.",
    icon: icon1,
  },
  {
    id: 2,
    title: "IT Management",
    desc: "Our IT management services ensure your business runs smoothly with reliable infrastructure, proactive monitoring, and data security. CloudXsecure helps you reduce downtime, improve efficiency, and stay protected from cyber threats.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "We help businesses increase visibility and generate quality leads through result-driven digital marketing strategies. From SEO and content marketing to social media campaigns, CloudXsecure delivers measurable growth.",
    icon: icon3,
  },
  {
    id: 4,
    title: "App Development",
    desc: "CloudXsecure designs and develops user-friendly mobile applications for Android and iOS platforms. Our apps are built with modern technology, high security standards, and seamless performance in mind.",
    icon: icon4,
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* SEO Tagline */}
        <p className="tag">• CLOUDXSECURE IT SOLUTIONS</p>

        {/* SEO Heading */}
        <h2 className="services-title">
          Reliable IT Services to Grow Your <br />
          <span>Digital Business Securely</span>
        </h2>

        {/* SERVICES GRID */}
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
                <img src={item.icon} alt={`${item.title} services by CloudXsecure`} />
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