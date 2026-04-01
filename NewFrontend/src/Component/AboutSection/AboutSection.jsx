import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

import mainImg from "../../assets/about-three-img.webp";
import overlayImg from "../../assets/about-three-img-1.webp";

import small1 from "../../assets/small-img-1.webp";
import small2 from "../../assets/small-img-2.webp";
import small3 from "../../assets/small-img-3.webp";

import thomas from "../../assets/about-three-points-list-img.webp";

import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

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

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about" ref={sectionRef}>
        <div className="about-container">

          {/* LEFT */}
          <div className="about-left reveal-left">
            <div className="image-box">
              <img src={mainImg} alt="About" className="main-img" />
              <img src={overlayImg} alt="Team" className="overlay-img" />

              <div className="experience-box reveal-left-delay">
                <h2>25</h2>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="client-box reveal-left-delay">
              <div className="client-images">
                <img src={small1} alt="" />
                <img src={small2} alt="" />
                <img src={small3} alt="" />
              </div>
              <p><strong>120K</strong> Satisfied Client</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-right reveal-right">
            <span className="about-tag">ABOUT US</span>

            <h2 className="about-title">
              Driving Business Growth with Our <br />
              <span>Advanced Web Development Solutions</span>
            </h2>

            <p className="about-desc">
              At CloudXsecure, we provide secure, scalable and high-performance
              web development services designed to help businesses thrive in a
              competitive digital environment. Our solutions combine modern
              technologies, cloud infrastructure, UX-focused design, and a
              results-driven development approach that aligns perfectly with your
              long-term business goals.
            </p>

            <div className="feature-grid">
              <div>
                <FaCheckCircle /> Custom Website Development & Technical Consulting
              </div>
              <div>
                <FaCheckCircle /> AI-Enabled Digital Transformation & Automation
              </div>
              <div>
                <FaCheckCircle /> Cloud-Integrated Web Solutions for Modern Enterprises
              </div>

              <div className="founder">
                <img src={thomas} alt="davis paker" />
                <div>
                  <h4>davis Paker</h4>
                  <span>Founder & CEO – CloudXsecure</span>
                </div>
              </div>
            </div>

            <ul className="points">
              <li>
                <FaCheckCircle /> Human-Centered UI/UX Design Focused on Conversion & Engagement
              </li>
              <li>
                <FaCheckCircle /> 24/7 Website Support, Security Monitoring & Maintenance
              </li>
              <li>
                <FaCheckCircle /> Modernization & Re-engineering of Legacy Web Systems
              </li>
            </ul>

            <div className="action">
              <button className="discover-btn">Discover More →</button>

              <div className="call-box">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span>Speak With Our Team</span>
                  <strong>7666488777</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MOVING BANNER */}
      <div className="moving-banner">
        <div className="banner-track">
          <span>BRANDING</span><span className="star">★</span>
          <span>CYBER SECURITY</span><span className="star">★</span>
          <span>WEBSITE DEVELOPMENT</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span><span className="star">★</span>
          <span>UI / UX DESIGN</span>

          <span className="star">★</span>
          <span>BRANDING</span><span className="star">★</span>
          <span>CYBER SECURITY</span><span className="star">★</span>
          <span>WEBSITE DEVELOPMENT</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span><span className="star">★</span>
          <span>UI / UX DESIGN</span>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
