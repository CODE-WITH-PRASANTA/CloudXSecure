import React, { useEffect, useRef } from "react";
import "./CloudMaigrationteam.css";
import {
  FaShareAlt,
  FaArrowLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

// replace with your real images
import team1 from "../../assets/card-10.webp";
import team2 from "../../assets/card-11.webp";
import team3 from "../../assets/card-11.webp";
import team4 from "../../assets/card-13.webp";

export default function TeamMembers() {
  const cardsRef = useRef([]);

  const members = [
    { id: 1, img: team1, name: "Masirul Islam", role: "UI/UX & Web Designer" },
    { id: 2, img: team2, name: "Jessica Mardol", role: "Cloud & Cyber Security Expert" },
    { id: 3, img: team3, name: "Arnold Hemingway", role: "Full-Stack Web Developer" },
    { id: 4, img: team4, name: "Shikon Haque", role: "Cloud Data Analyst" },
  ];

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("tm-show");
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tm-wrap">
      {/* decorative arrow */}
      <div className="tm-decorative-arrow">
        <FaArrowLeft />
      </div>

      <div className="tm-container">
        <div className="tm-header">
          <span className="tm-tag">TEAM MEMBERS</span>
          <h2 className="tm-title">Meet Our Cloud, Web & App Technology Experts</h2>

          {/* ALL MEMBERS BUTTON */}
          <div className="tm-all-btn">
            <span>All Members</span>
            <FaArrowRight />
          </div>
        </div>

        <div className="tm-grid">
          {members.map((m, i) => (
            <article
              className="tm-card"
              key={m.id}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="tm-card-media">
                <img src={m.img} alt={m.name} className="tm-img" />
              </div>

              <div className="tm-card-info">
                {/* SHARE + SOCIAL */}
                <div className="tm-social-wrap">
                  <div className="tm-card-share">
                    <span className="tm-ripple"></span>
                    <FaShareAlt />
                  </div>

                  {/* SOCIAL ICONS — GO UP */}
                  <div className="tm-social-icons">
                    <a href="#" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <h3 className="tm-name">{m.name}</h3>
                <p className="tm-role">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
