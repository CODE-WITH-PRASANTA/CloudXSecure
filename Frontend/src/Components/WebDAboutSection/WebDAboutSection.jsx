import React, { useEffect, useRef } from "react";
import "./WebDAboutSection.css";

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
              Your Business Growth with Our <br />
              <span>Cutting-Edge IT Solutions</span>
            </h2>

            <p className="about-desc">
              Transform your business with our innovative IT solutions,
              tailored to address your unique challenges and drive growth
              in today’s digital landscape.
            </p>

            <div className="feature-grid">
              <div><FaCheckCircle /> Innovative IT Solutions Expert Support & Consulting</div>
              <div><FaCheckCircle /> Seamless Digital Transformation AI-Driven</div>
              <div><FaCheckCircle /> Cloud Solutions for Modern Enterprises</div>

              <div className="founder">
                <img src={thomas} alt="Thomas Alison" />
                <div>
                  <h4>Thomas Alison</h4>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>

            <ul className="points">
              <li><FaCheckCircle /> Professional User Experience & Interface researching</li>
              <li><FaCheckCircle /> We provide 24/7 monitoring and support</li>
              <li><FaCheckCircle /> Dramatically re-engineer value-added IT systems</li>
            </ul>

            <div className="action">
              <button className="discover-btn">Discover More →</button>

              <div className="call-box">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <span>Call to Anytime</span>
                  <strong>1 (550) 250 5260</strong>
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
          <span>WEBSITE DESIGN</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span><span className="star">★</span>
          <span>UI / UX DESIGN</span>

          <span className="star">★</span>
          <span>BRANDING</span><span className="star">★</span>
          <span>CYBER SECURITY</span><span className="star">★</span>
          <span>WEBSITE DESIGN</span><span className="star">★</span>
          <span>DIGITAL MARKETING</span><span className="star">★</span>
          <span>UI / UX DESIGN</span>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
