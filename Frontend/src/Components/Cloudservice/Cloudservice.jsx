import React, { useRef, useEffect } from "react";
import "./Cloudservice.css";

import icon1 from "../../assets/service1.webp";
import icon2 from "../../assets/service2.webp";
import icon3 from "../../assets/service3.webp";
import icon4 from "../../assets/service4.webp";

const services = [
  {
    icon: icon1,
    title: "App Design & Development",
    desc: "Custom web and mobile apps designed for performance, scalability, and user experience."
  },
  {
    icon: icon2,
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud services to optimize performance and reduce costs."
  },
  {
    icon: icon3,
    title: "Web Design & Development",
    desc: "Responsive, SEO-optimized websites built for speed and strong brand presence."
  },
  {
    icon: icon4,
    title: "Cybersecurity & Data Protection",
    desc: "Advanced security solutions to protect your data and infrastructure."
  }
];

const Cloudservice = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  /* ===== AUTO SCROLL USING requestAnimationFrame ===== */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let speed = 0.5;
    let isHovered = false;

    const animate = () => {
      if (!isHovered) {
        slider.scrollLeft += speed;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleEnter = () => (isHovered = true);
    const handleLeave = () => (isHovered = false);

    slider.addEventListener("mouseenter", handleEnter);
    slider.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      slider.removeEventListener("mouseenter", handleEnter);
      slider.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="servicePro-section">
      <div className="servicePro-header">
        <span className="servicePro-sub">← OUR SERVICES →</span>
        <h2>CloudXSecure Professional IT Services</h2>

        <div className="servicePro-arrows">
          <button onClick={scrollLeft}>←</button>
          <button onClick={scrollRight}>→</button>
        </div>
      </div>

      <div className="servicePro-slider" ref={sliderRef}>
        {[...services, ...services].map((item, index) => (
          <div className="servicePro-card" key={index}>
            <div className="servicePro-icon">
              <img src={item.icon} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="servicePro-read">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloudservice;
