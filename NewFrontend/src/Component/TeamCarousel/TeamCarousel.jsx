import React, { useEffect, useRef, useState } from "react";
import "./TeamCarousel.css";

import img1 from "../../assets/team-2-1.webp";
import img2 from "../../assets/team-2-2.webp";
import img3 from "../../assets/team-2-3.webp";
import img4 from "../../assets/team-2-4.webp";
import img5 from "../../assets/team-2-5.webp";
import img6 from "../../assets/team-2-6.webp";

import {
  FaShareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const teamData = [
  { img: img1, name: "Alisha Martin", role: "Chief Expert" },
  { img: img2, name: "Devid Coper", role: "Product Designer" },
  { img: img3, name: "Naila Dev", role: "UI/UX Designer" },
  { img: img4, name: "Robert Martin", role: "CEO & Founder" },
  { img: img5, name: "Kevin Martis", role: "Chief Officer" },
  { img: img6, name: "Anila Koper", role: "Software Engineer" },
];

// duplicate for infinite loop
const loopData = [...teamData, ...teamData];

const TeamCarousel = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[0];
    const cardWidth = card.offsetWidth;

    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // seamless reset
    if (index === teamData.length) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        setIndex(0);
      }, 600);
    }
  }, [index]);

  return (
    <section className="teamx-section">
      <div className="teamx-container">
        <div className="teamx-viewport">
          <div className="teamx-track" ref={trackRef}>
            {loopData.map((item, i) => (
              <div className="teamx-card" key={i}>
                <div className="teamx-img-wrapper">
                  <img src={item.img} alt={item.name} />
                  <div className="teamx-overlay"></div>

                  <div className="teamx-share">
                    <FaShareAlt />
                    <div className="teamx-socials">
                      <a href="#"><FaFacebookF /></a>
                      <a href="#"><FaTwitter /></a>
                      <a href="#"><FaPinterestP /></a>
                      <a href="#"><FaLinkedinIn /></a>
                    </div>
                  </div>
                </div>

                <div className="teamx-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
