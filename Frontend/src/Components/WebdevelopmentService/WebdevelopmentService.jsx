import React, { useEffect, useRef } from "react";
import "./WebdevelopmentService.css";

import service1 from "../../assets/services-1.jpg";
import service2 from "../../assets/services-2.jpg";
import service3 from "../../assets/services-3.jpg";
import service4 from "../../assets/services-4.jpg";

import shape1 from "../../assets/services-shape-1.png";
import shape2 from "../../assets/slides-shape-2.png";
import shape3 from "../../assets/slides-shape-3.png";

const services = [
  {
    id: 1,
    title: "Software Development",
    desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed...",
    img: service1,
  },
  {
    id: 2,
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed...",
    img: service2,
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed...",
    img: service3,
  },
  {
    id: 4,
    title: "Analytic Solutions",
    desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed...",
    img: service4,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("reveal-active");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      {/* FLOATING SHAPES */}
      <img src={shape1} className="float-shape shape-1" alt="" />
      <img src={shape2} className="float-shape shape-2" alt="" />
      <img src={shape3} className="float-shape shape-3" alt="" />

      {/* HEADER */}
      <div className="services-header reveal-item">
        <span className="services-tag">SERVICES</span>
        <h2>
          We Provide the Best Quality <br />
          <span>Services</span>
        </h2>
        <p>
          We are technology solutions providing company all over the world doing
          over 40 years. Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* CARDS */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card reveal-item"
            key={service.id}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="service-link">View More</span>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="services-btn reveal-item">
        <button>Explore All Services</button>
      </div>
    </section>
  );
};

export default ServicesSection;
