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
    role: "Marketing Manager",
    text:
      "CloudXSecure delivered exactly what we needed — a fast, clean, and professional website. Their team understood our business and built a solution that improved both our visibility and user engagement.",
  },
  {
    img: img2,
    name: "Kevin Martin",
    role: "Business Owner",
    text:
      "We were looking for a reliable web development partner, and CloudXSecure exceeded expectations. The website is fast, secure, and easy to manage. Their support team is also very responsive.",
  },
  {
    img: img3,
    name: "Jessica Brown",
    role: "Startup Founder",
    text:
      "The team at CloudXSecure helped us launch our platform smoothly. Their attention to detail and focus on performance made a big difference in how our users interact with the website.",
  },

  // NEW TESTIMONIALS
  {
    img: img1,
    name: "Rahul Verma",
    role: "E-commerce Owner",
    text:
      "Our online store performance improved significantly after working with CloudXSecure. The website is now faster, more secure, and optimized for conversions.",
  },
  {
    img: img2,
    name: "Priya Sharma",
    role: "Digital Consultant",
    text:
      "What I liked most is their practical approach. No unnecessary complexity — just clean development, proper structure, and strong SEO fundamentals.",
  },
  {
    img: img3,
    name: "Amit Patel",
    role: "IT Manager",
    text:
      "CloudXSecure built a scalable system for our business that handles traffic efficiently. Their technical expertise and communication were both excellent.",
  },
  {
    img: img1,
    name: "Sneha Kapoor",
    role: "Brand Manager",
    text:
      "They transformed our outdated website into a modern, user-friendly platform. The design and performance improvements were clearly noticeable.",
  },
  {
    img: img2,
    name: "Vikram Singh",
    role: "Entrepreneur",
    text:
      "From planning to execution, everything was handled professionally. The final website reflects our brand perfectly and performs well across devices.",
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
          <img src={testimonials[active].img} alt="Client testimonial" />
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
              <img src={item.img} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebdevTestimonial;