import React from "react";
import "./Cloudexpert.css";

// BACKGROUND
import bgImage from "../../assets/tt1.png";

// TEAM IMAGES
import person1 from "../../assets/tt2.png";
import person2 from "../../assets/tt3.png";
import person3 from "../../assets/tt4.png";
import person4 from "../../assets/tt5.png";

const teamData = [
  {
    img: person1,
    name: "Masirul Islam",
    role: "Manager Assistant",
    delay: "0s",
  },
  {
    img: person2,
    name: "Jenny Wilson",
    role: "Web Designer",
    delay: "1.5s",
  },
  {
    img: person3,
    name: "Floyd Miles",
    role: "Head Assistant",
    delay: "3s",
  },
  {
    img: person4,
    name: "Wade Warren",
    role: "Medical Assistant",
    delay: "4.5s",
  },
];

const TeamExpert = () => {
  return (
    <section
      className="expertTeamSectionUnique"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* HEADER */}
      <div className="expertTeamHeaderUnique">
        <span className="expertTeamBadgeUnique">
          ← OUR EXPERT →
        </span>
        <h2 className="expertTeamTitleUnique">
          See Our Skilled Expert Team
        </h2>
      </div>

      {/* TEAM CARDS */}
      <div className="expertTeamGridUnique">
        {teamData.map((item, index) => (
          <div
            key={index}
            className="expertTeamCardUnique"
            style={{ animationDelay: item.delay }}
          >
            <div className="expertTeamImageWrapUnique">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="expertTeamInfoUnique">
              <h4>{item.name}</h4>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamExpert;
