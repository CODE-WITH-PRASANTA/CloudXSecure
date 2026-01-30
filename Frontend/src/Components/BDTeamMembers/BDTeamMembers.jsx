import React from "react";
import "./BDTeamMembers.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import t1 from "../../assets/h2_team_img01.jpg";
import t2 from "../../assets/h2_team_img02.jpg";
import t3 from "../../assets/h2_team_img03.jpg";
import t4 from "../../assets/h2_team_img04.jpg";

const team = [
  { name: "Brooklyn Simmons", role: "Cloud Solutions Architect", img: t1 },
  { name: "Jenny Wilson", role: "Cyber Security Specialist", img: t2 },
  { name: "Wade Warren", role: "Web & App Development Lead", img: t3 },
  { name: "Marvin McKinney", role: "Backup & Recovery Engineer", img: t4 },
];

const BDTeamMembers = () => {
  return (
    <section className="bd-team">
      <div className="bd-team-container">
        {/* TOP CONTENT */}
        <div className="bd-team-left">
          <span className="bd-badge">CLOUDXSECURE EXPERT TEAM</span>
          <h2>
            Meet Our Cloud, Security & Digital Solution Experts
          </h2>
          <p>
            Our dedicated team at CloudXSecure brings together cloud engineers, cybersecurity specialists, web designers, and application developers to deliver secure, scalable, and high-performance digital solutions.
          </p>
        </div>

        {/* BOTTOM CARDS */}
        <div className="bd-team-right">
          {team.map((m, i) => (
            <div className="bd-team-card" key={i}>
              <div className="bd-team-info">
                <h3>{m.name}</h3>
                <span>{m.role}</span>
                <i></i>
              </div>

              <div className="bd-team-social">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>

              <img src={m.img} alt={m.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDTeamMembers;
