import React, { useRef } from "react";
import "./ExpertTeamSection.css";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";

// Import your team images from assets
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";

const teamMembers = [
  { id: 1, name: "Kathryn Murphy", role: "Physiotherapist", img: team1 },
  { id: 2, name: "Darlene Robertson", role: "Web Designer", img: team2 },
  { id: 3, name: "Leslie Alexander", role: "Nursing Assistant", img: team3 },
  { id: 4, name: "Masirul", role: "President Of Sales", img: team4 },
];

const ExpertTeamSection = () => {
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
      <div className="team-header">
        <h2>See Our Skilled Expert Team</h2>
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

export default ExpertTeamSection;
