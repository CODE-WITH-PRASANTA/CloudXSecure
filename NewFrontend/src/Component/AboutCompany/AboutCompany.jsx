import React, { useEffect, useRef } from "react";
import "./AboutCompany.css";

// Assets
import leftbg from "../../assets/elements9.webp";
import About1img from "../../assets/about-img1.webp";
import About2img from "../../assets/about-img2.webp";
import About3img from "../../assets/about-img3.webp";

const AboutCompany = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aboutco--visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutco" ref={sectionRef}>
      <div className="aboutco__container">
        {/* LEFT VISUAL */}
        <div className="aboutco__images">
          <img src={leftbg} alt="" className="aboutco__bg" />

          <div className="aboutco__img aboutco__img--large">
            <img src={About1img} alt="Team Work" />
          </div>

          <div className="aboutco__img aboutco__img--top">
            <img src={About2img} alt="Office Meeting" />
          </div>

          <div className="aboutco__img aboutco__img--bottom">
            <img src={About3img} alt="Team Discussion" />
          </div>

          <div className="aboutco__experience">
            <span>✔</span>
            <p>
              With <strong>15+ years</strong> of experience <br />
              IT solution help community.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutco__content">
          <span className="aboutco__badge">
            📘About CloudXSecure
          </span>

          <h2 className="aboutco__title">
           Unlock Business Potential <br />
            with Secure Cloud & Digital Solutions
          </h2>

          <p className="aboutco__desc">
            At CloudXSecure, we empower businesses to grow, scale, and innovate through secure cloud services, modern web design, mobile app development, and end-to-end cloud solutions. We understand that every organization has unique goals, which is why we deliver tailored IT and cloud solutions designed to improve performance, enhance security, and support long-term success.
          </p>

          <div className="aboutco__stats">
            <div className="aboutco__stat">
              <div className="aboutco__circle">96%</div>
              <div>
                <h4>IT Solution</h4>
                <p>Level Is High</p>
              </div>
            </div>

            <div className="aboutco__stat">
              <div className="aboutco__circle">97%</div>
              <div>
                <h4>Cyber Solution</h4>
                <p>#1 Best Of Solution</p>
              </div>
            </div>
          </div>

          <blockquote className="aboutco__quote">
            “Partner with CloudXSecure to build secure cloud infrastructure, powerful digital experiences, and scalable IT solutions that move your business forward.”
          </blockquote>

          <a href="#" className="aboutco__btn">
            See How We Can Help →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
