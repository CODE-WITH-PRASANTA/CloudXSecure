import { useEffect, useRef } from "react";
import "./OurServicesVision.css";

import vision1 from "../../assets/visiton-img1(OS).png";
import vision2 from "../../assets/visiton-img2(OS).png";
import vision3 from "../../assets/visiton-img3(OS).png";

export default function Vision() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target); // 🔑 important
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section">
      <div className="vision-container">
        {/* LEFT IMAGE GRID */}
        <div className="vision-images">
          <img
            ref={(el) => (refs.current[0] = el)}
            src={vision1}
            alt="Team discussion"
            className="img-large reveal"
          />

          <div className="img-row">
            <img
              ref={(el) => (refs.current[1] = el)}
              src={vision2}
              alt="Office teamwork"
              className="img-small reveal"
              style={{ transitionDelay: "0.15s" }}
            />
            <img
              ref={(el) => (refs.current[2] = el)}
              src={vision3}
              alt="Business meeting"
              className="img-small reveal"
              style={{ transitionDelay: "0.3s" }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          ref={(el) => (refs.current[3] = el)}
          className="vision-content reveal"
        >
          <span className="vision-tag">Our Vision</span>

          <h2>
            Driving Innovation: Our Vision <br /> at CloudXSecure
          </h2>

          <p className="vision-text">
            At CloudXSecure, our vision is to be the leading force driving digital
            transformation and innovation worldwide. We envision a future where
            businesses of all sizes have the tools and expertise they need to
            thrive in an increasingly digital world.
          </p>

          <div className="vision-points">
            <div className="point">
              <span className="point-icon">📡</span>
              <div>
                <h4>Network Infrastructure Solutions</h4>
                <p>
                  Build a reliable and secure network infrastructure that
                  supports your business operations and enables seamless
                  connectivity.
                </p>
              </div>
            </div>

            <div className="point">
              <span className="point-icon">🛠️</span>
              <div>
                <h4>Managed IT Services</h4>
                <p>
                  Focus on your core business activities while we take care of
                  your IT needs with our managed IT services.
                </p>
              </div>
            </div>
          </div>

          <button className="vision-btn">Get In Touch →</button>
        </div>
      </div>
    </section>
  );
}
