import { useEffect, useRef } from "react";
import "./OurServicesVision.css";

import vision1 from "../../assets/visiton-img1(OS).webp";
import vision2 from "../../assets/visiton-img2(OS).webp";
import vision3 from "../../assets/visiton-img3(OS).webp";

export default function Vision() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vision-reveal-active");
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
    <section className="ourservicesvision-section">
      <div className="ourservicesvision-container">
        {/* LEFT IMAGE GRID */}
        <div className="ourservicesvision-images">
          <img
            ref={(el) => (refs.current[0] = el)}
            src={vision1}
            alt="Team discussion"
            className="img-large vision-reveal"
          />

          <div className="img-row">
            <img
              ref={(el) => (refs.current[1] = el)}
              src={vision2}
              alt="Office teamwork"
              className="img-small vision-reveal"
              style={{ transitionDelay: "0.15s" }}
            />
            <img
              ref={(el) => (refs.current[2] = el)}
              src={vision3}
              alt="Business meeting"
              className="img-small vision-reveal"
              style={{ transitionDelay: "0.3s" }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          ref={(el) => (refs.current[3] = el)}
          className="ourservicesvision-content vision-reveal"
        >
          <span className="ourservicesvision-tag">Our Vision</span>

          <h2>
            Driving Innovation: Our Vision <br /> at CloudXSecure
          </h2>

          <p className="ourservicesvision-text">
            At CloudXSecure, our vision is to empower businesses through secure cloud services, innovative web design, intelligent app development, and end-to-end cloud solutions. We aim to be a trusted technology partner that helps organizations embrace digital transformation with confidence, scalability, and security.

We envision a future where businesses of all sizes leverage cloud technology and digital platforms to operate efficiently, innovate faster, and achieve sustainable growth in an increasingly connected world.
          </p>

          <div className="ourservicesvision-points">
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

          <button className="ourservicesvision-btn">Get In Touch →</button>
        </div>
      </div>
    </section>
  );
}
