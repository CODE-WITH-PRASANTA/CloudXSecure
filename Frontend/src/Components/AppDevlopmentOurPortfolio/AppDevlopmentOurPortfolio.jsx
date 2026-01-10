import React, { useEffect, useRef, useState } from "react";
import "./AppDevlopmentOurPortfolio.css";

const portfolioData = [
  { title: "Digital Product Design", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
  { title: "Enterprise Web Solutions", img: "https://images.unsplash.com/photo-1552664730-d307ca884978" },
  { title: "Cloud-Based Platforms", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7" },
  { title: "AI Driven Applications", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c" },
  { title: "Startup MVP Development", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
  { title: "E-Commerce Systems", img: "https://images.unsplash.com/photo-1557821552-17105176677c" },
  { title: "Business Automation Tools", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
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
