import React, { useEffect, useRef, useState } from "react";
import "./AppDevlopmentOurPortfolio.css";
import img1 from "../../assets/project-1-1.jpg";
import img2 from "../../assets/project-1-2.jpg";
import img3 from "../../assets/project-1-3.jpg";
import img4 from "../../assets/project-1-4.jpg";

const portfolioData = [
  { title: "Digital Product Design", img: img1 },
  { title: "Enterprise Web Solutions", img: img2 },
  { title: "Cloud-Based Platforms", img: img3 },
  { title: "AI Driven Applications", img: img4 },
  { title: "Startup MVP Development", img: img1 },
  { title: "E-Commerce Systems", img: img2 },
  { title: "Business Automation Tools", img: img3 },
];

const AppDevlopmentOurPortfolio = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);

  const total = portfolioData.length;

  // Detect mobile properly
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop auto-scroll ONLY
  useEffect(() => {
    if (paused || isMobile) return;

    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, [paused, isMobile]);

  // Infinite reset (desktop only)
  useEffect(() => {
    if (!isMobile && index === total) {
      trackRef.current.style.transition = "none";
      setIndex(0);
      requestAnimationFrame(() => {
        trackRef.current.style.transition = "transform 0.6s ease";
      });
    }
  }, [index, total, isMobile]);

  return (
    <section className="portfolio-section">
      <p className="portfolio-subtitle">PORTFOLIO</p>
      <h2 className="portfolio-title">
        Explore Our Recent <span>Projects</span>
      </h2>

      <div
        className="carousel-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className={`carousel-track ${isMobile ? "mobile" : ""}`}
          style={
            isMobile
              ? {} // 🔥 NO TRANSFORM AT ALL
              : { transform: `translateX(-${index * 25}%)` }
          }
        >
          {[...portfolioData, ...portfolioData].map((item, i) => (
            <div className="portfolio-card" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`dot ${index % 3 === i ? "active" : ""}`} />
        ))}
      </div>
    </section>
  );
};

export default AppDevlopmentOurPortfolio;
