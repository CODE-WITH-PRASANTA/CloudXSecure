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
        title: "Data Security",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 2,
        icon: <FiMonitor />,
        title: "Digital Marketing",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 3,
        icon: <FiMessageSquare />,
        title: "IT Consultation",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 4,
        icon: <FiCloud />,
        title: "Cloud Services",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 5,
        icon: <FiSettings />,
        title: "Technology",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 6,
        icon: <FiDatabase />,
        title: "Data Analysis",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 7,
        icon: <FiCode />,
        title: "Web Development",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 8,
        icon: <FiSmartphone />,
        title: "App Development",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 9,
        icon: <FiGlobe />,
        title: "SEO Optimization",
        text: "Monotonectally solutek in fermentum quis",
      },
      {
        id: 10,
        icon: <FiLock />,
        title: "Cyber Protection",
        text: "Monotonectally solutek in fermentum quis",
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

  useEffect(() => {
   
  }, [cardsPerPage]);

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
          <div className="heroSection__left">
            <div className="heroSection__badge">
              <span className="heroSection__badgeLine"></span>
              <span className="heroSection__badgeText">Cloud X Secure IT SERVICES</span>
            </div>

            <h1 className="heroSection__title">
              The Beauty Behind
              <br />
              IT Services.
            </h1>

            <p className="heroSection__description">
              Where your interests international networks intersect provid
              custom software solutions for any value software.
            </p>

            <div className="heroSection__actions">
              <button className="heroSection__primaryButton">
                EXPLORE MORE
              </button>

              <div className="heroSection__videoWrap">
                <button className="heroSection__videoButton">
                  <FiPlay />
                </button>
                <button className="heroSection__videoText">WATCH VIDEO</button>
              </div>
            </div>
          </div>

          <div className="heroSection__right">
            <div className="heroSection__imageWrap">
              <img
                src={heroShape}
                alt="Hero Shape"
                className="heroSection__shape"
              />
              <img
                src={heroThumb}
                alt="Hero Person"
                className="heroSection__thumb"
              />
            </div>
          </div>
        </div>
      </div>

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
                          <span className="heroSection__cardIcon">{card.icon}</span>
                        </div>

                        <h3 className="heroSection__cardTitle">{card.title}</h3>
                        <p className="heroSection__cardText">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="heroSection__pagination">
            <button
              className="heroSection__paginationArrow"
              onClick={handlePrev}
              aria-label="Previous"
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
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              className="heroSection__paginationArrow"
              onClick={handleNext}
              aria-label="Next"
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