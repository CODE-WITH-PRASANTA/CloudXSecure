import React, { useEffect, useState } from "react";
import "./CloudMaigrationtest.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Albert Flores",
      role: "Medical Assistant",
      text:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam eget maecenas.",
      img: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      name: "Kathryn Murphy",
      role: "Web Designer",
      text:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam eget maecenas.",
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "UI Designer",
      text:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam eget maecenas.",
      img: "https://i.pravatar.cc/100?img=45",
    },
    {
      id: 4,
      name: "Jane Cooper",
      role: "Developer",
      text:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est porta pretium metus aliquam eget maecenas.",
      img: "https://i.pravatar.cc/100?img=56",
    },
  ];

  const [index, setIndex] = useState(0);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0
        ? testimonials.length - 2
        : prev - 2
    );
  };

  // pick 2 visible cards
  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="ts-wrap">
      <div className="ts-container">
        <span className="ts-tag">TESTIMONIALS</span>
        <h2 className="ts-title">People Who Already Love Us</h2>

        {/* SLIDER */}
        <div className="ts-slider-area">
          {/* LEFT ARROW */}
          <button className="ts-arrow ts-left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          {/* CARDS */}
          <div className="ts-slider">
            {visible.map((item) => (
              <div className="ts-card active" key={item.id}>
                <div className="ts-card-header">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>

                    {/* STARS */}
                    <div className="ts-stars">
                      {[...Array(4)].map((_, s) => (
                        <FaStar key={s} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="ts-text">{item.text}</p>
                <div className="ts-quote">“</div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button className="ts-arrow ts-right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="ts-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`ts-dot ${
                i === index ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
