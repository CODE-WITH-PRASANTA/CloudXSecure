import React, { useEffect, useRef } from "react";
import "./AboutEitechITSolution.css";
import img1 from "../../assets/female.jpg";
import img2 from "../../assets/female.jpg";
import img3 from "../../assets/female.jpg";

const AboutEitechITSolution = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="AbouteitechITSolution">
      <div className="AbouteitechITSolution-container">

        {/* LEFT IMAGE LAYOUT (MATCHES REFERENCE) */}
        <div className="AbouteitechITSolution-images">

          {/* MAIN IMAGE */}
          <div className="image-main reveal delay-1">
            <img src={img1} alt="Professional at work" />

            {/* FLOATING BADGE */}
            <div className="experience-card reveal delay-2">
              <span className="check">✓</span>
              <div className="text">
                <strong>15+ Years Experience</strong>
                <p>IT solution help community</p>
              </div>
            </div>
          </div>

          {/* RIGHT STACKED IMAGES */}
          <div className="image-stack">
            <div className="image-small reveal delay-3">
              <img src={img2} alt="Team collaboration" />
            </div>
            <div className="image-small reveal delay-4">
              <img src={img3} alt="Office discussion" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (UNCHANGED) */}
        <div className="AbouteitechITSolution-content">
          <span className="AbouteitechITSolution-badge-top reveal delay-1">
            ABOUT EITECH IT SOLUTION
          </span>

          <h2 className="reveal delay-2">
            Unlock Business Potential <br />
            with Tailored IT Services
          </h2>

          <p className="AbouteitechITSolution-desc reveal delay-3">
            At Eitech, we understand that every business is unique, which is why
            we deliver scalable, secure, and innovative IT services designed to
            accelerate long-term growth.
          </p>

          <div className="AbouteitechITSolution-stats reveal delay-4">
            <div className="AbouteitechITSolution-stat">
              <div className="circle">96%</div>
              <div>
                <h4>IT Solution Excellence</h4>
                <span>Industry-leading delivery</span>
              </div>
            </div>

            <div className="AbouteitechITSolution-stat">
              <div className="circle">97%</div>
              <div>
                <h4>Cyber Security</h4>
                <span>Enterprise-grade protection</span>
              </div>
            </div>
          </div>

          <div className="AbouteitechITSolution-quote reveal delay-5">
            “The right IT solutions don’t just support your business — they
            transform it.”
          </div>

          <button className="AbouteitechITSolution-btn reveal delay-6">
            See How We Can Help <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutEitechITSolution;
