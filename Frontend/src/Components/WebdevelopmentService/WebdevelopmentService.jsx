import React, { useEffect, useRef } from "react";
import "./WebdevelopmentService.css";

import service1 from "../../assets/webdevlopment-services-1.jpg";
import service2 from "../../assets/webdevlopment-services-2.jpg";
import service3 from "../../assets/webdevlopment-services-3.jpg";
import service4 from "../../assets/webdevlopment-services-4.jpg";

import shape1 from "../../assets/webdevlopment-services-shape-1.png";
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
          sectionRef.current.classList.add("webdevlopmentreveal-active");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="webdevlopment-services-section" ref={sectionRef}>
      {/* FLOATING SHAPES */}
      <img src={shape1} className="float-shape shape-1" alt="" />
      <img src={shape2} className="float-shape shape-2" alt="" />
      <img src={shape3} className="float-shape shape-3" alt="" />

      {/* HEADER */}
      <div className="webdevlopment-services-header webdevlopmentreveal-item">
        <span className="webdevlopment-services-tag">SERVICES</span>
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
      <div className="webdevlopment-services-grid">
        {services.map((service, index) => (
          <div
            className="service-card webdevlopmentreveal-item"
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
      <div className="webdevlopment-services-btn webdevlopmentreveal-item">
        <button>Explore All Services</button>
      </div>
    </section>
  );
};

export default ServicesSection;
