import React, { useRef, useEffect } from "react";
import "./Cloudservice.css";

import icon1 from "../../assets/service1.webp";
import icon2 from "../../assets/service2.webp";
import icon3 from "../../assets/service3.webp";
import icon4 from "../../assets/service4.webp";

const services = [
  { icon: icon1, title: "App Design & Development", desc: "Custom web and mobile apps designed for performance, scalability, and user experience." },
  { icon: icon2, title: "Cloud Solutions", desc: "Secure and scalable cloud services to optimize performance, reduce costs, and support business growth." },
  { icon: icon3, title: "Web Design & Development", desc: "Responsive, SEO-optimized websites built for speed, usability, and strong brand presence." },
  { icon: icon4, title: "Cybersecurity & Data Protection", desc: "Advanced security solutions to protect your data, systems, and cloud infrastructure." },
];

const Cloudservice = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  /* START AUTO SCROLL */
  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 30);
  };

  /* STOP AUTO SCROLL */
  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    startAutoScroll();

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  /* ARROW CONTROLS */
  const scrollLeft = () => {
    stopAutoScroll();
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    setTimeout(startAutoScroll, 800);
  };

  const scrollRight = () => {
    stopAutoScroll();
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    setTimeout(startAutoScroll, 800);
  };

  return (
    <section className="clo-services-section">
      <div className="clo-services-header">
        <span className="clo-services-sub">← OUR SERVICES →</span>
        <h2>CloudXSecure Professional IT Services</h2>

        <div className="clo-services-arrows">
          <button className="arrow-btn" onClick={scrollLeft}>←</button>
          <button className="arrow-btn active" onClick={scrollRight}>→</button>
        </div>
      </div>

      <div className="clo-services-slider" ref={sliderRef}>
        {[...services, ...services].map((item, index) => (
          <div className="clo-service-card" key={index}>
            <div className="icon-box">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="read-btn">Read more »</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloudservice;
