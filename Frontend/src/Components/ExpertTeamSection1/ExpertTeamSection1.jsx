import React, { useRef } from "react";
import "./ExpertTeamSection1.css";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Updated People Images
import people1 from "../../assets/people1.jpg";
import people2 from "../../assets/people2.jpg";
import people3 from "../../assets/people3.jpg";
import people4 from "../../assets/people4.jpg";

const teamMembers = [
  { id: 1, name: "Kathryn Murphy", role: "Senior Cloud Engineer", img: people1 },
  { id: 2, name: "Darlene Robertson", role: "UI/UX & Frontend Expert", img: people2 },
  { id: 3, name: "Leslie Alexander", role: "Full-Stack App Engineer", img: people3 },
  { id: 4, name: "Masirul", role: "Cloud Security Consultant", img: people4 },
];

const ExpertTeamSection1 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -350, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="expert-team-section">
      
      {/* Heading Section */}
      <div className="team-heading">
        <span className="team-badge">OUR EXPERT TEAM</span>
        <h2 className="team-title">Dedicated CloudXSecure Team Members Powering Your Digital Success</h2>
        <p className="team-subtitle">
          At CloudXSecure, our certified cloud architects, web designers, app developers, and DevOps specialists work together to deliver secure, scalable, and future-ready digital solutions for businesses worldwide.
        </p>
      </div>

      <div className="team-header">
        <h2>Meet Our Skilled Cloud & Digital Experts</h2>
        <div className="arrow-controls">
          <button className="arrow-btn" onClick={() => scroll("left")}>
            <FaArrowLeft />
          </button>
          <button className="arrow-btn active" onClick={() => scroll("right")}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="team-container" ref={scrollRef}>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.img} alt={member.name} className="team-image" />
              <button className="share-btn">
                <FaShareAlt />
              </button>
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeamSection1;
