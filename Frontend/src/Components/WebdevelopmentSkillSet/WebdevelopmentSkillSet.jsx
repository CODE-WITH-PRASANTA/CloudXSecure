import React, { useEffect, useRef } from "react";
import "./WebdevelopmentSkillSet.css";

// MAIN ILLUSTRATION
import skillImage from "../../assets/skill-1.png";

// FLOATING SHAPES
import shape1 from "../../assets/slides-shape-1.png";
import shape2 from "../../assets/slides-shape-2.png";
import shape3 from "../../assets/slides-shape-3.png";

const skills = [
  { title: "Software Development", percent: 92, color: "purple" },
  { title: "App Development", percent: 80, color: "pink" },
  { title: "Artificial Intelligence", percent: 70, color: "yellow" },
  { title: "Cyber Security", percent: 45, color: "violet" },
];

const SkillSet = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionRef.current
      .querySelectorAll(".reveal")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skillset-section" ref={sectionRef}>
      {/* FLOATING SHAPES */}
      <img src={shape1} className="float-shape shape-1" alt="" />
      <img src={shape2} className="float-shape shape-2" alt="" />
      <img src={shape3} className="float-shape shape-3" alt="" />

      <div className="skillset-wrapper">
        {/* LEFT CONTENT */}
        <div className="skillset-left reveal">
          <span className="skill-tag">SKILLSET</span>

          <h2 className="skill-title">
            We Have A Set Of Skill With <br />
            <span>High Quality</span>
          </h2>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-bar reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="skill-label">
                  <span>{skill.title}</span>
                  <span>{skill.percent}%</span>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${skill.color}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="skill-btn">Explore More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="skillset-right reveal">
          <img src={skillImage} alt="Skill Illustration" />
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
