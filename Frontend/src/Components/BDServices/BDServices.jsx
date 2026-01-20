import React from "react";
import "./BDServices.css";
import { FaArrowRight } from "react-icons/fa";
import { FaPiggyBank, FaFileInvoiceDollar, FaLightbulb, FaShieldAlt } from "react-icons/fa";

// SERVICE IMAGES
import img1 from "../../assets/h2_services_img01.jpg";
import img2 from "../../assets/h2_services_img02.jpg";
import img3 from "../../assets/h2_services_img03.jpg";
import img4 from "../../assets/h2_services_img02.jpg";

// BACKGROUND
import bgWave from "../../assets/services_bg02.jpg";

const services = [
  {
    title: "Finance Planning",
    img: img1,
    icon: <FaPiggyBank />,
  },
  {
    title: "Tax File Audit",
    img: img2,
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Investment Idea",
    img: img3,
    icon: <FaLightbulb />,
  },
  {
    title: "Risk Management",
    img: img4,
    icon: <FaShieldAlt />,
  },
];

const BDServices = () => {
  return (
    <section
      className="sv-section"
      style={{ backgroundImage: `url(${bgWave})` }}
    >
      <div className="sv-container">
        {/* HEADER */}
        <div className="sv-header">
          <div>
            <span className="sv-badge">WHAT WE DO FOR YOU</span>
            <h2>
              We can inspire and Offer <br />
              Different Services
            </h2>
          </div>

          <button className="sv-btn">
            See All Service <FaArrowRight />
          </button>
        </div>

        {/* CARDS */}
        <div className="sv-grid">
          {services.map((item, i) => (
            <div className="sv-card" key={i}>
              <div className="sv-img-wrap">
                <img src={item.img} alt={item.title} />
                <div className="sv-overlay" />
              </div>

              <div className="sv-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDServices;
