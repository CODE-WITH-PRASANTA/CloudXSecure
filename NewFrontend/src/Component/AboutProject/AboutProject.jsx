import React, { useEffect, useMemo, useState } from "react";
import "./AboutProject.css";

import brandImg from "../../assets/brand-img.webp";
import brandImg1 from "../../assets/brand-img1.webp";
import brandImg2 from "../../assets/brand-img2.webp";
import brandImg3 from "../../assets/brand-img3.webp";
import brandImg4 from "../../assets/brand-img4.webp";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AboutProject = () => {

  // ✅ REAL PROJECT DATA (SEO FRIENDLY)
  const aboutProjectCards = useMemo(
    () => [
      {
        id: 1,
        title: "Learning Step School Website Development",
        category: "VIEW PROJECT",
        link: "https://learningstepschool.in/",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 2,
        title: "Bright Stars Montessori School Website",
        category: "VIEW PROJECT",
        link:
          "https://www.justdial.com/Bhubaneshwar/Bright-Stars-Montessori-Naharakanta/0674PX674-X674-230518005607-T9M5_BZDET",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 3,
        title: "Tezz Dimag Coaching Institute Website",
        category: "VIEW PROJECT",
        link: "https://www.tezzdimagbhubaneswar.in/",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
      },

      // ✅ repeat for slider smooth loop
      {
        id: 4,
        title: "Learning Step School Digital Platform",
        category: "VIEW PROJECT",
        link: "https://learningstepschool.in/",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 5,
        title: "Bright Stars Montessori Web Presence",
        category: "VIEW PROJECT",
        link:
          "https://www.justdial.com/Bhubaneshwar/Bright-Stars-Montessori-Naharakanta/0674PX674-X674-230518005607-T9M5_BZDET",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 6,
        title: "Tezz Dimag Online Learning Website",
        category: "VIEW PROJECT",
        link: "https://www.tezzdimagbhubaneswar.in/",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    []
  );

  const aboutProjectLogos = useMemo(
    () => [
      { id: 1, image: brandImg, alt: "CloudXSecure Partner" },
      { id: 2, image: brandImg1, alt: "Client Brand" },
      { id: 3, image: brandImg2, alt: "Business Partner" },
      { id: 4, image: brandImg3, alt: "Technology Partner" },
      { id: 5, image: brandImg4, alt: "Global Client" },
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
    const interval = setInterval(() => {
      setAboutProjectTransition(true);
      setAboutProjectIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setAboutProjectTransition(true);
    setAboutProjectIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setAboutProjectTransition(true);
    setAboutProjectIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
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
      const timeout = setTimeout(() => {
        setAboutProjectTransition(true);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [aboutProjectTransition]);

  // ✅ OPEN PROJECT LINK
  const openProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="aboutProject">
      <div className="aboutProject__bg" />

      <div className="aboutProject__inner">
        <div className="aboutProject__topRow">
          <div className="aboutProject__headingSide">
            <div className="aboutProject__badge">
              <span className="aboutProject__badgeLine" />
              <span className="aboutProject__badgeText">
                CLOUDXSECURE PROJECTS
              </span>
            </div>

            <div className="aboutProject__titleRow">
              <h2 className="aboutProject__title">
                Our Latest <span>Web Development Projects</span>
              </h2>
              <div className="aboutProject__titleLine" />
            </div>
          </div>

          <div className="aboutProject__arrows">
            <button className="aboutProject__arrowBtn" onClick={handlePrev}>
              <FiArrowLeft />
            </button>
            <button className="aboutProject__arrowBtn" onClick={handleNext}>
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="aboutProject__slider">
          <div
            className="aboutProject__track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(-${aboutProjectIndex} * (var(--aboutProject-card-width) + var(--aboutProject-card-gap))))`,
              transition: aboutProjectTransition
                ? "transform 1.2s ease"
                : "none",
            }}
          >
            {aboutProjectCardsLoop.map((item, index) => (
              <article className="aboutProject__card" key={index}>
                <div className="aboutProject__cardImageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aboutProject__cardImage"
                  />
                </div>

                <div className="aboutProject__cardContent">
                  <h3 className="aboutProject__cardTitle">{item.title}</h3>

                  {/* ✅ CLICKABLE BUTTON */}
                  <button
                    className="aboutProject__cardTag"
                    onClick={() => openProject(item.link)}
                  >
                    {item.category}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BRAND STRIP */}
        <div className="aboutProject__brandBar">
          <div className="aboutProject__brandTrack">
            {[...aboutProjectLogos, ...aboutProjectLogos].map((logo, i) => (
              <div className="aboutProject__brandItem" key={i}>
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="aboutProject__brandImage"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;