import React, { useState } from "react";
import "./MonitoringTestimonial.css";
import LeftImage from "../../assets/market5.png"; 
import QuoteIcon from "../../assets/quote-single.svg"; // ADD YOUR SINGLE QUOTE ICON HERE

const MonitoringTestimonial = () => {
  const testimonials = [
    {
      text: "CloudXSecure completely transformed our digital infrastructure. Their cloud services helped us migrate smoothly, improve security, and scale effortlessly. The web design team delivered a modern, SEO-optimized website, while their app developers built a fast, user-friendly mobile application. Truly a one-stop solution for cloud and digital growth.",
      name: "Mr. Robey Alexa",
      title: "CEO, Gerow Agency",
    },
    {
      text: "Working with CloudXSecure has been an outstanding experience. From cloud architecture and DevOps automation to professional web and app development, their team delivered everything on time and beyond expectations. Their managed cloud solutions significantly improved our performance, security, and customer engagement.",
      name: "Ms. Alisha Brown",
      title: "Founder, TechNova",
    },
    {
      text: "CloudXSecure helped us modernize our entire digital ecosystem. From secure cloud deployment and scalable infrastructure to responsive web design and custom mobile app development, their end-to-end cloud solutions accelerated our business growth. Their expertise in cloud security and performance optimization truly sets them apart.",
      name: "Mr. David Wilson",
      title: "Manager, Bright Ventures",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { text, name, title } = testimonials[index];

  return (
    <section className="monitoring-testimonial-section">
      <div className="monitoring-testimonial-container">

        {/* LEFT SIDE IMAGE WITH BACKGROUND DESIGN + QUOTE ICON OVERLAY */}
        <div className="mt-left">
          <div className="mt-img-wrapper">
            
            {/* Decorative background circle */}
            <div className="mt-bg-circle"></div>

            {/* Main Image */}
            <img src={LeftImage} alt="testimonial visual" className="mt-left-img" />

            {/* Quote icon overlay */}
            <img src={QuoteIcon} alt="quote icon" className="mt-quote-icon" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="mt-right">
          <div className="mt-stars">{"★".repeat(5)}</div>

          <p className="mt-text">“ {text} ”</p>

          <div className="mt-user-info">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>

          <div className="mt-controls">
            <button onClick={prevSlide} className="mt-control-btn">←</button>
            <button onClick={nextSlide} className="mt-control-btn">→</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MonitoringTestimonial;
