import React, { useEffect, useRef } from "react";
import "./AboutOurMission.css";

// Images
import misssionimg1 from "../../assets/about-img13.webp";
import misssionimg2 from "../../assets/about-img14.webp";
import misssionimg3 from "../../assets/about-img15.webp";

// Icons
import Performanceicon from "../../assets/performace icon.svg";
import Networkicons from "../../assets/network-icon.svg";

// Decorative Element
import Circlelement from "../../assets/elements27.webp";

const AboutOurMission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("about-mission--active");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about-mission">
      <div className="about-mission-container">

        {/* LEFT CONTENT */}
        <div className="about-mission-left">
          <span className="about-mission-badge">OUR MISSION / VISION</span>

          <h2 className="about-mission-title">
            Driving Innovation: Our <br />
            Mission Vision at <span>CloudXSecure</span>
          </h2>

          <p className="about-mission-description">
           At CloudXSecure, our mission is to empower businesses through secure cloud services, intelligent web and app design, and scalable cloud solutions that drive innovation and long-term growth. We combine advanced technology with strategic thinking to help organizations operate smarter, faster, and more securely in a digital-first world.
          </p>

          {/* CARD 1 */}
          <div className="about-mission-card about-mission-card--delay1">
            <div className="about-mission-card-icon">
              <img src={Networkicons} alt="Network Infrastructure" />
            </div>
            <div className="about-mission-card-content">
              <h4>Network Infrastructure Solutions</h4>
              <p>
                In today’s fast-paced digital environment, cloud and network infrastructure form the backbone of successful businesses. CloudXSecure provides robust cloud infrastructure solutions designed to ensure high availability, performance, and security.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="about-mission-card about-mission-card--delay2">
            <div className="about-mission-card-icon">
              <img src={Performanceicon} alt="Performance Services" />
            </div>
            <div className="about-mission-card-content">
              <h4>Performance Tailored IT Services</h4>
              <p>
                Our performance-focused IT services are crafted to meet your unique business requirements. From cloud services to web and app design, CloudXSecure delivers solutions that are efficient, scalable, and aligned with your goals.
              </p>
            </div>
          </div>

          <button className="about-mission-button">
            See How We Can Help <span>↗</span>
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-mission-right">
          <div className="about-mission-image-main">
            <img src={misssionimg1} alt="Mission Team" />
          </div>

          <div className="about-mission-image-grid">
            <img src={misssionimg2} alt="Mission Work" />
            <img src={misssionimg3} alt="Mission Discussion" />
          </div>

          <img
            src={Circlelement}
            alt="Decorative Element"
            className="about-mission-decoration"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutOurMission;
