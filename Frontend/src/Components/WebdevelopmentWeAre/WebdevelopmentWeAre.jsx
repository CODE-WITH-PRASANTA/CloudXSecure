import React, { useEffect, useRef } from "react";
import "./WebdevelopmentWeAre.css";
import mainImg from "../../assets/about-1 .png";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="who-section">
      <div ref={sectionRef} className="who-container reveal">
        {/* LEFT IMAGE */}
        <div className="who-image-wrapper">
          <img src={mainImg} alt="Team working" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="who-content">
          <span className="who-tag">WHO WE ARE</span>

          <h2>
            We Are All In One IT Solution <br /> & Technology Company
          </h2>

          <p>
            We are leading technology solutions providing company all over the
            world doing over 40 years lorem ipsum dolor sit amet.
          </p>

          <p>
            We are leading technology solutions providing company all over the
            world doing over 40 years. Lorem ipsum dolor sit amet consectetur
            sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore.
          </p>

          <button className="who-btn">Know More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
