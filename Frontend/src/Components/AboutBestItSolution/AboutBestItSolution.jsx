import React, { useEffect, useRef } from "react";
import "./AboutBestItSolution.css";

// Assets
import rightsidebg from "../../assets/elements11.webp";
import roundshape from "../../assets/Round Img.webp";
import workingimg from "../../assets/work-img1.webp";
import workingimg2 from "../../assets/work-img2.webp";

const AboutBestItSolution = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bestit--visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bestit" ref={sectionRef}>
      <div className="bestit__container">

        {/* LEFT CONTENT */}
        <div className="bestit__content">
          <span className="bestit__badge">⭐ BEST IT SOLUTION</span>

          <h2 className="bestit__title">
           End-to-End Cloud & Digital Solutions for<br />
           Modern Businesses
          </h2>

          <p className="bestit__desc">
            CloudXSecure delivers scalable cloud services, secure web and app design, and end-to-end IT solutions that help businesses innovate, grow, and stay protected in a digital-first world. From cloud infrastructure to custom digital experiences, we ensure performance, security, and long-term success.
          </p>

          <div className="bestit__progress-box">
            <div className="bestit__progress">
              <div className="bestit__progress-head">
                <span>IT Solution</span>
                <span>98%</span>
              </div>
              <div className="bestit__progress-bar">
                <span style={{ width: "98%" }}></span>
              </div>
            </div>

            <div className="bestit__progress">
              <div className="bestit__progress-head">
                <span>Cloud Security</span>
                <span>99%</span>
              </div>
              <div className="bestit__progress-bar">
                <span style={{ width: "99%" }}></span>
              </div>
            </div>

            <div className="bestit__progress">
              <div className="bestit__progress-head">
                <span>DevOps & Automation</span>
                <span>99%</span>
              </div>
              <div className="bestit__progress-bar">
                <span style={{ width: "99%" }}></span>
              </div>
            </div>
          </div>

          <a href="#" className="bestit__btn">
            Discover Our Solutions →
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="bestit__images">
          <img src={rightsidebg} alt="" className="bestit__bg-shape" />
          <img src={roundshape} alt="" className="bestit__round-shape" />

          <div className="bestit__img img-one">
            <img src={workingimg} alt="Working Team" />
          </div>

          <div className="bestit__img img-two">
            <img src={workingimg2} alt="Business Meeting" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBestItSolution;
