import React from "react";
import "./BDFinanceHero.css";
import bgImage from "../../assets/choose_bg.jpg";

const progressData = [
  { title: "Consulting", value: 85 },
  { title: "Investment", value: 76 },
  { title: "Business", value: 90 },
];

const BDFinanceHero = () => {
  return (
    <section
      className="finance-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="finance-overlay"></div>

      <div className="finance-container">
        {/* LEFT CONTENT */}
        <div className="finance-left">
          <h1>
            We'll Ensure You Always Get <br />
            the Best Guidance.
          </h1>
          <p>
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita
            Florai Psum Dolor Sit Amet, Consecteture Borem.
          </p>

          <div className="finance-video">
            <div className="play-btn">▶</div>
            <span>Watch Video</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="finance-card">
          <span className="badge">WHY WE ARE THE BEST</span>
          <h2>
            Smart Great Finance <br /> For you Solutions
          </h2>
          <p>
            Morem Ipsum Dolor Sit Amet Consectedipiscing Elita
            Florai Psum Dolor Sit Amonsectet Borem Ipsum Consectetur.
          </p>

          {progressData.map((item, index) => (
            <div className="progress-box" key={index}>
              <div className="progress-title">
                <span>{item.title}</span>
                <span className="progress-value">{item.value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BDFinanceHero;
