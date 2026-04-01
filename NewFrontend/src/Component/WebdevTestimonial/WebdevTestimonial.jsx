import React, { useEffect, useState } from "react";
import "./WebdevTestimonial.css";

import img1 from "../../assets/testimonial-three-1-1.webp";
import img2 from "../../assets/testimonial-three-1-2.webp";
import img3 from "../../assets/testimonial-three-1-3.webp";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    img: img1,
    name: "Alisha Martin",
    role: "Senior Marketing Manager",
    text:
      "Open gathering they are nights multiple brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
  },
  {
    img: img2,
    name: "Kevin Martin",
    role: "Senior Marketing Manager",
    text:
      "Open gathering they are nights multiple brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
  },
  {
    img: img3,
    name: "Jessica Brown",
    role: "Senior Marketing Manager",
    text:
      "Open gathering they are nights multiple brings living abundantly cent that may be wonor wasinton created shell first two beginning beast all airot you ando divide subdue one herb light",
  },
];

const WebdevTestimonial = () => {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="wt-section">
      <div className="wt-wrapper">
        {/* LEFT CONTENT */}
        <div className="wt-content">
          <div className="wt-quote">
            <FaQuoteLeft />
          </div>

          <p className="wt-text slide">{testimonials[active].text}</p>

          <h4 className="wt-name slide">{testimonials[active].name}</h4>
          <span className="wt-role">{testimonials[active].role}</span>

          <div className="wt-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <div className="wt-arrows">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="wt-main-img slide">
          <img src={testimonials[active].img} alt="" />
        </div>

        {/* THUMB CIRCLES */}
        <div className="wt-thumbs">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`wt-thumb ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebdevTestimonial;
