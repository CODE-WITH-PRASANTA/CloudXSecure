import React, { useRef, useEffect, useCallback } from "react";
import "./Cloudservice.css";

import icon1 from "../../assets/service1.webp";
import icon2 from "../../assets/service2.webp";
import icon3 from "../../assets/service3.webp";
import icon4 from "../../assets/service4.webp";

const services = [
  {
    icon: icon1,
    title: "App Design & Development",
    desc: "Custom web and mobile apps designed for performance, scalability, and user experience.",
  },
  {
    icon: icon2,
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud services to optimize performance and reduce costs.",
  },
  {
    icon: icon3,
    title: "Web Design & Development",
    desc: "Responsive, SEO-optimized websites built for speed and strong brand presence.",
  },
  {
    icon: icon4,
    title: "Cybersecurity & Data Protection",
    desc: "Advanced security solutions to protect your data and infrastructure.",
  },
];

const Cloudservice = () => {
  const base = "cloudservice";
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

        // loop effect (because we duplicate services)
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
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      slider.removeEventListener("mouseenter", handleEnter);
      slider.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  }, []);

  const handleContact = (serviceTitle) => {
    // you can replace this with navigation or open modal
    console.log("Contact for:", serviceTitle);
  };

  return (
    <section className={`${base} ${base}__section`}>
      <div className={`${base}__header`}>
        <span className={`${base}__sub`}>← OUR SERVICES →</span>
        <h2 className={`${base}__title`}>CloudXSecure Professional IT Services</h2>

        <div className={`${base}__arrows`}>
          <button type="button" onClick={scrollLeft} aria-label="Scroll left">
            ←
          </button>
          <button type="button" onClick={scrollRight} aria-label="Scroll right">
            →
          </button>
        </div>
      </div>

      <div className={`${base}__slider`} ref={sliderRef}>
        {[...services, ...services].map((item, index) => (
          <div className={`${base}__card`} key={index}>
            <div className={`${base}__icon`}>
              <img src={item.icon} alt={item.title} />
            </div>

            <h3 className={`${base}__cardTitle`}>{item.title}</h3>
            <p className={`${base}__desc`}>{item.desc}</p>

            {/* ✅ Updated button */}
            <button
              type="button"
              className={`${base}__cta`}
              onClick={() => handleContact(item.title)}
            >
              Contact Us <span className={`${base}__ctaArrow`}>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloudservice;