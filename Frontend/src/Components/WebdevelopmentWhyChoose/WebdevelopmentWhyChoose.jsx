import React, { useEffect, useRef } from "react";
import "./WebdevelopmentWhyChoose.css";

import img1 from "../../assets/choose-1.png";
import img2 from "../../assets/choose-2.png";
import img3 from "../../assets/choose-3.png";
import img4 from "../../assets/choose-4.png";

const cards = [
  {
    title: "Mobile Apps",
    text: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore.",
    img: img1,
  },
  {
    title: "Branding Strategy",
    text: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore.",
    img: img2,
  },
  {
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore.",
    img: img3,
  },
  {
    title: "Search Optimization",
    text: "Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore.",
    img: img4,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-header reveal">
        <span className="why-tag">WHY CHOOSE US</span>

        <h2 className="why-title">
          We Help You To <span>Increase</span> Your <br />
          Sale Through Solutions
        </h2>

        <p className="why-desc">
          We are leading technology solutions providing company all over the
          world doing over 40 years lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="why-grid">
        {cards.map((item, i) => (
          <div
            key={i}
            className="why-card reveal"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="icon-box">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
