import React from "react";
import "./HeroSection.css";
import {
  FiChevronDown,
  FiPlay,
  FiShield,
  FiMonitor,
  FiMessageSquare,
  FiCloud,
  FiSettings,
} from "react-icons/fi";

import heroBg from "../../assets/hero-bg.png";
import heroShape from "../../assets/hero-shape.png";
import heroThumb from "../../assets/hero-thumb.webp";
import cardBg from "../../assets/Card-bg-1.png";

const HeroSection = () => {
  const heroSectionCards = [
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
  ];

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
              <span className="heroSection__badgeText">SOLUTEK IT SERVICES</span>
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
        <div className="heroSection__cards">
          {heroSectionCards.map((card) => (
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
    </section>
  );
};

export default HeroSection;