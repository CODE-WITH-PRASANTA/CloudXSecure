import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HostingHeroSection.css";
import mainImage from "../../assets/main-image.png";
import smallImage1 from "../../assets/small1.png";
import smallImage2 from "../../assets/small2.png";
import playButtonBg from "../../assets/play-bg.png";

const HostingHeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate(); // ✅ added navigation hook

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  // ✅ navigate to contact page
  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">Everything You Need To Create A Website</p>
        <h1 className="hero-title">
          Business Innovation With <br />
          <span>IT Services Expertise</span>
        </h1>
        <p className="hero-description">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters.
        </p>

        <div className="hero-buttons">
          {/* ✅ Added navigation on click */}
          <button className="btn-get-started" onClick={handleGetStarted}>
            Get Started →
          </button>
          <a href="#" className="view-case">
            View Case Study
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        {!showVideo ? (
          <>
            <img src={mainImage} alt="Team" className="hero-main-image" />
            <div className="play-button" onClick={handlePlayClick}>
              {/* ✅ play-bg now spins with CSS rotation */}
              <img src={playButtonBg} alt="Play background" className="play-bg rotating" />
            </div>
          </>
        ) : (
          <div className="video-wrapper">
            <button className="close-video-btn" onClick={handleCloseVideo}>
              ✕
            </button>
            <iframe
              ref={videoRef}
              className="hero-video"
              src="https://www.youtube.com/embed/f2Gzr8sAGB8?autoplay=1"
              title="Intro Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Decorative bottom images */}
        <img src={smallImage1} alt="Decor 1" className="small-img small-img-1" />
        <img src={smallImage2} alt="Decor 2" className="small-img small-img-2" />

        {/* Ratings section */}
        <div className="rating-section">
          <div className="rating-box left-box">
            <div className="rating-source">Trustpilot</div>
            <div className="rating-stars">
              <span>★★★★★</span>
              <p>450+ reviews</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="rating-box right-box">
            <div className="rating-source">Google</div>
            <div className="rating-stars">
              <span>★★★★★</span>
              <p>450+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingHeroSection;
