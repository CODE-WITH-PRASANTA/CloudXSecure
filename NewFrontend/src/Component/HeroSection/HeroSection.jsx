import React, { useEffect, useMemo, useState } from "react";
import "./HeroSection.css";
import {
  FiChevronDown,
  FiPlay,
  FiShield,
  FiMonitor,
  FiMessageSquare,
  FiCloud,
  FiSettings,
  FiDatabase,
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiLock,
} from "react-icons/fi";

import heroBg from "../../assets/hero-bg.png";
import heroShape from "../../assets/hero-shape.png";
import heroThumb from "../../assets/hero-thumb.webp";
import cardBg from "../../assets/Card-bg-1.png";

const HeroSection = () => {
  const heroSectionCards = useMemo(
    () => [
      {
        id: 1,
        icon: <FiShield />,
        title: "Advanced Data Security",
        text: "Protect your business with enterprise-grade cybersecurity and data protection solutions.",
      },
      {
        id: 2,
        icon: <FiMonitor />,
        title: "Digital Marketing",
        text: "Grow your brand with data-driven digital marketing strategies and performance campaigns.",
      },
      {
        id: 3,
        icon: <FiMessageSquare />,
        title: "IT Consultation",
        text: "Expert IT consulting services to optimize your infrastructure and business workflows.",
      },
      {
        id: 4,
        icon: <FiCloud />,
        title: "Cloud Solutions",
        text: "Scalable and secure cloud services tailored to modern business needs.",
      },
      {
        id: 5,
        icon: <FiSettings />,
        title: "Technology Services",
        text: "Innovative technology solutions designed to improve efficiency and productivity.",
      },
      {
        id: 6,
        icon: <FiDatabase />,
        title: "Data Analytics",
        text: "Transform raw data into actionable insights with advanced analytics tools.",
      },
      {
        id: 7,
        icon: <FiCode />,
        title: "Web Development",
        text: "Build high-performance websites with modern technologies and best practices.",
      },
      {
        id: 8,
        icon: <FiSmartphone />,
        title: "App Development",
        text: "Custom mobile applications designed for seamless user experience.",
      },
      {
        id: 9,
        icon: <FiGlobe />,
        title: "SEO Optimization",
        text: "Improve your online visibility with proven search engine optimization strategies.",
      },
      {
        id: 10,
        icon: <FiLock />,
        title: "Cyber Protection",
        text: "Defend your systems against cyber threats with proactive security solutions.",
      },
    ],
    []
  );

  const [cardsPerPage, setCardsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 767) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 991) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(5);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(heroSectionCards.length / cardsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="heroSection">
      <div
        className="heroSection__main"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="heroSection__content">
          {/* LEFT */}
          <div className="heroSection__left">
            <div className="heroSection__badge">
              <span className="heroSection__badgeLine"></span>
              <span className="heroSection__badgeText">
                CLOUDXSECURE IT SOLUTIONS
              </span>
            </div>

            {/* ✅ SEO H1 */}
            <h1 className="heroSection__title">
              Secure, Scalable & Smart <br />
              IT Solutions for Modern Businesses
            </h1>

            {/* ✅ SEO paragraph */}
            <p className="heroSection__description">
              CloudXSecure delivers advanced cloud computing, cybersecurity,
              and IT consulting services to help businesses grow faster, stay
              secure, and operate efficiently in the digital world. We combine
              innovation, technology, and expertise to build reliable solutions
              tailored to your needs.
            </p>

            <div className="heroSection__actions">
              <button className="heroSection__primaryButton">
                Explore Services
              </button>

              <div className="heroSection__videoWrap">
                <button className="heroSection__videoButton">
                  <FiPlay />
                </button>
                <button className="heroSection__videoText">
                  Watch Overview
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="heroSection__right">
            <div className="heroSection__imageWrap">
              <img
                src={heroShape}
                alt="CloudXSecure background design"
                className="heroSection__shape"
              />
              <img
                src={heroThumb}
                alt="IT professional working on cloud security"
                className="heroSection__thumb"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES CARDS */}
      <div className="heroSection__cardsWrap">
        <div className="heroSection__slider">
          <div
            className="heroSection__track"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * cardsPerPage;
              const end = start + cardsPerPage;
              const pageCards = heroSectionCards.slice(start, end);

              return (
                <div className="heroSection__slide" key={pageIndex}>
                  <div
                    className={`heroSection__cards heroSection__cards--${cardsPerPage}`}
                  >
                    {pageCards.map((card) => (
                      <div
                        key={card.id}
                        className="heroSection__card"
                        style={{ backgroundImage: `url(${cardBg})` }}
                      >
                        <div className="heroSection__cardIconWrap">
                          <span className="heroSection__cardIcon">
                            {card.icon}
                          </span>
                        </div>

                        <h3 className="heroSection__cardTitle">
                          {card.title}
                        </h3>
                        <p className="heroSection__cardText">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* PAGINATION */}
          <div className="heroSection__pagination">
            <button
              className="heroSection__paginationArrow"
              onClick={handlePrev}
            >
              ‹
            </button>

            <div className="heroSection__paginationDots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`heroSection__paginationDot ${
                    currentPage === index ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>

            <button
              className="heroSection__paginationArrow"
              onClick={handleNext}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;