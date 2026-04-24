import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaPlus } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ICONS */
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";

const servicesData = [
  { id: 1, title: "Cloud Infrastructure", desc: "Deploy scalable cloud environments.", icon: icon1 },
  { id: 2, title: "Cloud Security", desc: "Protect systems with advanced security.", icon: icon2 },
  { id: 3, title: "Cloud Storage", desc: "Secure and reliable storage solutions.", icon: icon3 },
  { id: 4, title: "Cloud Automation", desc: "Automate workflows efficiently.", icon: icon4 },
  { id: 5, title: "Web Development", desc: "Modern websites with best UI/UX.", icon: icon1 },
  { id: 6, title: "IT Management", desc: "Manage infrastructure smoothly.", icon: icon2 },
  { id: 7, title: "Digital Marketing", desc: "Grow your online presence.", icon: icon3 },
  { id: 8, title: "App Development", desc: "High-performance mobile apps.", icon: icon4 },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) setCardsPerPage(1);
      else if (window.innerWidth <= 992) setCardsPerPage(2);
      else setCardsPerPage(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(servicesData.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="services">
      <div className="services-container">

        <p className="tag">• CLOUDXSECURE IT SOLUTIONS</p>

        <h2 className="services-title">
          Reliable Cloud Services to Grow Your <br />
          <span>Digital Business Securely</span>
        </h2>

        <div className="services-slider">

          {/* LEFT BUTTON */}
          <button className="nav-btn left" onClick={handlePrev}>
            <FiChevronLeft />
          </button>

          {/* SLIDER TRACK */}
          <div
            className="services-track"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * cardsPerPage;
              const currentCards = servicesData.slice(start, start + cardsPerPage);

              return (
                <div className="services-slide" key={pageIndex}>
                  <div className="services-grid">
                    {currentCards.map((item) => (
                      <div
                        key={item.id}
                        className={`service-card ${
                          activeCard === item.id ? "active" : ""
                        }`}
                        onClick={() => setActiveCard(item.id)}
                      >
                        <div className="icon">
                          <img src={item.icon} alt={item.title} />
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                        <button className="read-more">
                          <span className="plus"><FaPlus /></span>
                          READ MORE
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <button className="nav-btn right" onClick={handleNext}>
            <FiChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Services;