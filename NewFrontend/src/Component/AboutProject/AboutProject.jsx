import React, { useEffect, useMemo, useState } from "react";
import "./AboutProject.css";

import brandImg from "../../assets/brand-img.webp";
import brandImg1 from "../../assets/brand-img1.webp";
import brandImg2 from "../../assets/brand-img2.webp";
import brandImg3 from "../../assets/brand-img3.webp";
import brandImg4 from "../../assets/brand-img4.webp";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AboutProject = () => {
  const aboutProjectCards = useMemo(
    () => [
      {
        id: 1,
        title: "Digital Product Design",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 2,
        title: "Software Development",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 3,
        title: "CMC Softwar Solution",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 4,
        title: "App Development",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 5,
        title: "Corporate Research",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 6,
        title: "Project for Marketing",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 7,
        title: "Business Analytics",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 8,
        title: "Creative Brand Planning",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 9,
        title: "Mobile App Strategy",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 10,
        title: "Product Growth System",
        category: "SOFTWARE",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );

  const aboutProjectLogos = useMemo(
    () => [
      { id: 1, image: brandImg, alt: "Technology Logo" },
      { id: 2, image: brandImg1, alt: "Grameen" },
      { id: 3, image: brandImg2, alt: "Walmart" },
      { id: 4, image: brandImg3, alt: "Deluxon" },
      { id: 5, image: brandImg4, alt: "Arounds" },
    ],
    []
  );

  const aboutProjectCardsLoop = useMemo(
    () => [...aboutProjectCards, ...aboutProjectCards, ...aboutProjectCards],
    [aboutProjectCards]
  );

  const [aboutProjectIndex, setAboutProjectIndex] = useState(
    aboutProjectCards.length
  );
  const [aboutProjectTransition, setAboutProjectTransition] = useState(true);

  useEffect(() => {
    const aboutProjectInterval = setInterval(() => {
      setAboutProjectTransition(true);
      setAboutProjectIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(aboutProjectInterval);
  }, []);

  const handleAboutProjectPrev = () => {
    setAboutProjectTransition(true);
    setAboutProjectIndex((prev) => prev - 1);
  };

  const handleAboutProjectNext = () => {
    setAboutProjectTransition(true);
    setAboutProjectIndex((prev) => prev + 1);
  };

  const handleAboutProjectTransitionEnd = () => {
    if (aboutProjectIndex >= aboutProjectCards.length * 2) {
      setAboutProjectTransition(false);
      setAboutProjectIndex(aboutProjectCards.length);
    }

    if (aboutProjectIndex <= aboutProjectCards.length - 1) {
      setAboutProjectTransition(false);
      setAboutProjectIndex(aboutProjectCards.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!aboutProjectTransition) {
      const aboutProjectTimeout = setTimeout(() => {
        setAboutProjectTransition(true);
      }, 60);

      return () => clearTimeout(aboutProjectTimeout);
    }
  }, [aboutProjectTransition]);

  return (
    <section className="aboutProject">
      <div className="aboutProject__bg" />

      <div className="aboutProject__inner">
        <div className="aboutProject__topRow">
          <div className="aboutProject__headingSide">
            <div className="aboutProject__badge">
              <span className="aboutProject__badgeLine" />
              <span className="aboutProject__badgeText">SOLUTEK PROJECT</span>
            </div>

            <div className="aboutProject__titleRow">
              <h2 className="aboutProject__title">
                Explore Our Recent <span>Projects.</span>
              </h2>
              <div className="aboutProject__titleLine" />
            </div>
          </div>

          <div className="aboutProject__arrows">
            <button
              type="button"
              className="aboutProject__arrowBtn"
              onClick={handleAboutProjectPrev}
              aria-label="Previous"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              className="aboutProject__arrowBtn"
              onClick={handleAboutProjectNext}
              aria-label="Next"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="aboutProject__slider">
          <div
            className="aboutProject__track"
            onTransitionEnd={handleAboutProjectTransitionEnd}
            style={{
              transform: `translateX(calc(-${aboutProjectIndex} * (var(--aboutProject-card-width) + var(--aboutProject-card-gap))))`,
              transition: aboutProjectTransition
                ? "transform 1.2s ease"
                : "none",
            }}
          >
            {aboutProjectCardsLoop.map((item, index) => (
              <article className="aboutProject__card" key={`${item.id}-${index}`}>
                <div className="aboutProject__cardImageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aboutProject__cardImage"
                  />
                </div>

                <div className="aboutProject__cardContent">
                  <h3 className="aboutProject__cardTitle">{item.title}</h3>
                  <button type="button" className="aboutProject__cardTag">
                    {item.category}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="aboutProject__brandBar">
          <div className="aboutProject__brandTrack">
            {[...aboutProjectLogos, ...aboutProjectLogos, ...aboutProjectLogos].map(
              (logo, index) => (
                <div className="aboutProject__brandItem" key={`${logo.id}-${index}`}>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="aboutProject__brandImage"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;