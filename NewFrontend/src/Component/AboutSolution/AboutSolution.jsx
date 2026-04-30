import React from "react";
import "./AboutSolution.css";
import { FiPlay } from "react-icons/fi";
import { RiCustomerService2Line } from "react-icons/ri";

import aboutMain from "../../assets/About-main.webp";
import aboutSmall from "../../assets/About-main.webp";
import arrowShape from "../../assets/Bg-icon-2.webp";

const AboutSolution = () => {

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917666488777", "_blank");
  };

  return (
    <section className="aboutSolution">
      <div className="aboutSolution__container">
        <div className="aboutSolution__content">
          <div className="aboutSolution__subTitle">
            <span className="aboutSolution__subTitleLine"></span>
            <span className="aboutSolution__subTitleText">
              CLOUDXSECURE IT SOLUTIONS
            </span>
          </div>

          <h2 className="aboutSolution__title">
            Delivering Reliable IT Services
            <br />
            Built Around Your <span>Business Needs</span>
          </h2>

          <p className="aboutSolution__desc">
            At CloudXSecure, we focus on providing practical and secure IT
            solutions that help businesses operate smoothly in a digital
            environment. Our team works closely with clients to understand their
            challenges and deliver systems that are dependable, scalable, and
            built for long-term performance.
          </p>

          <ul className="aboutSolution__list">
            <li className="aboutSolution__listItem">
              <span className="aboutSolution__dot"></span>
              <span>
                End-to-end IT solutions including cloud, security, and
                development services
              </span>
            </li>

            <li className="aboutSolution__listItem">
              <span className="aboutSolution__dot"></span>
              <span>
                Dedicated support with fast response and consistent service
                quality
              </span>
            </li>
          </ul>

          <div className="aboutSolution__bottom">
            <button 
              className="aboutSolution__btn"
              onClick={handleWhatsAppClick}
            >
              CONTACT US
            </button>

            <div className="aboutSolution__counterCard">
              <div className="aboutSolution__counterIcon">
                <RiCustomerService2Line />
              </div>
              <h3 className="aboutSolution__counterNumber">800+</h3>
              <p className="aboutSolution__counterText">
                CLIENTS TRUST OUR SERVICES
              </p>
            </div>
          </div>
        </div>

        <div className="aboutSolution__media">
          <div className="aboutSolution__mainWrap">
            <span className="aboutSolution__accentBar"></span>
            <img
              src={aboutMain}
              alt="CloudXSecure IT Solutions"
              className="aboutSolution__mainImage"
            />

            <div className="aboutSolution__arrowShape">
              <img src={arrowShape} alt="decorative arrow" />
            </div>
          </div>

          <div className="aboutSolution__sideWrap">
            <div className="aboutSolution__videoCard">
              <button
                className="aboutSolution__videoBtn"
                aria-label="Watch CloudXSecure overview video"
              >
                <span className="aboutSolution__videoInner">
                  <FiPlay />
                </span>
              </button>
              <span className="aboutSolution__videoText">
                WATCH OUR STORY
              </span>
            </div>

            <div className="aboutSolution__smallImageWrap">
              <img
                src={aboutSmall}
                alt="CloudXSecure team working on IT solutions"
                className="aboutSolution__smallImage"
              />
              <div className="aboutSolution__smallOverlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution;