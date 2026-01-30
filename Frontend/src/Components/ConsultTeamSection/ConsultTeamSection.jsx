import React from "react";
import "./ConsultTeamSection.css";

import bgImg from "../../assets/const-team_bg.webp";
import img1 from "../../assets/const-team_img01.webp";
import img2 from "../../assets/const-team_img02.webp";
import img3 from "../../assets/const-team_img03.webp";
import img4 from "../../assets/const-team_img04.webp";

const team = [
  { img: img1, name: "Brooklyn Simmons", role: "Cloud Solutions Architect" },
  { img: img2, name: "Guy Hawkins", role: "Web & UI/UX Designer" },
  { img: img3, name: "Savannah Nguyen", role: "DevOps & Cloud Operations Lead" },
  { img: img4, name: "Kristin Watson", role: "Web & UI/UX Designer" },
];

const TeamGerow = () => {
  return (
    <section
      className="gerow-team"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="gerow-container">

        <div className="gerow-heading">
          <span>SKILLED TECHNOLOGY EXPERTS</span>
          <h2>Meet Our Dedicated Cloud & Development Team</h2>
          <p>
            Our experienced cloud engineers and developers create secure infrastructure, high-performance websites, and powerful mobile apps—providing end-to-end cloud solutions that drive real business growth.
          </p>
        </div>

        <div className="gerow-grid">
          {team.map((item, i) => (
            <div className="gerow-card" key={i}>
              
              <div className="gerow-img">
                <img src={item.img} alt={item.name} />

                <ul className="gerow-social">
                  <li><i className="fab fa-pinterest-p"></i></li>
                  <li><i className="fab fa-instagram"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-facebook-f"></i></li>
                </ul>
              </div>

              <div className="gerow-info">
                <h4>{item.name}</h4>
                <span></span>
                <p>{item.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamGerow;
