import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

import mainImg from "../../assets/about-three-img.webp";
import overlayImg from "../../assets/about-three-img-1.webp";

import small1 from "../../assets/small-img-1.webp";
import small2 from "../../assets/small-img-2.webp";
import small3 from "../../assets/small-img-3.webp";

import thomas from "../../assets/about-three-points-list-img.webp";

import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("active");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // WhatsApp handler
  const handleWhatsApp = () => {
    window.open("https://wa.me/917666488777", "_blank");
  };

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left reveal-left">
          <div className="image-box">
            <img src={mainImg} alt="CloudXSecure Web Development" className="main-img" />
            <img src={overlayImg} alt="Web Development Team" className="overlay-img" />

            <div className="experience-box reveal-left-delay">
              <h2>10+</h2>
              <span>Years of Web Development Experience</span>
            </div>
          </div>

          <div className="client-box reveal-left-delay">
            <div className="client-images">
              <img src={small1} alt="client" />
              <img src={small2} alt="client" />
              <img src={small3} alt="client" />
            </div>
            <p><strong>5,000+</strong> Happy Clients Worldwide</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right reveal-right">
          <span className="about-tag">WEB DEVELOPMENT - CLOUDXSECURE</span>

          <h2 className="about-title">
            Professional Web Development Services <br />
            <span>Built for Performance, Security & Growth</span>
          </h2>

          <p className="about-desc">
            CloudXSecure delivers high-quality web development solutions tailored
            to modern business needs. We design and develop fast, secure, and scalable
            websites that not only look professional but also perform efficiently.
            Our focus is on building digital platforms that improve user experience,
            strengthen online presence, and support long-term business growth.
          </p>

          <div className="feature-grid">
            <div>
              <FaCheckCircle /> Custom Website Development for Businesses & Startups
            </div>
            <div>
              <FaCheckCircle /> SEO-Optimized and Mobile-Responsive Web Design
            </div>
            <div>
              <FaCheckCircle /> Secure, Cloud-Integrated Web Applications
            </div>

            <div className="founder">
              <img src={thomas} alt="Shahbaaz Sayed" />
              <div>
                <h4>Shahbaaz Sayed</h4>
                <span>Director – CloudXSecure</span>
              </div>
            </div>
          </div>

          <ul className="points">
            <li>
              <FaCheckCircle /> Fast-loading websites designed for better search engine rankings
            </li>
            <li>
              <FaCheckCircle /> Ongoing support, website maintenance, and security monitoring
            </li>
            <li>
              <FaCheckCircle /> Upgrade and redesign of outdated or slow-performing websites
            </li>
          </ul>

          <div className="action">
            <button className="discover-btn" onClick={handleWhatsApp}>
              Contact Us →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;