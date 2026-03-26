import React from "react";
import "./Topbar.css";
import {
  FiMapPin,
  FiMail,
  FiClock,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Topbar = () => {
  const topbarInfo = [
    {
      id: 1,
      icon: <FiMapPin />,
      text: "New market Sandigo - California",
    },
    {
      id: 2,
      icon: <FiMail />,
      text: "example@gmail.com",
    },
    {
      id: 3,
      icon: <FiClock />,
      text: "9.00 am - 5.00 pm",
    },
  ];

  const topbarSocialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "#",
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      link: "#",
      label: "Twitter",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      link: "#",
      label: "LinkedIn",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      link: "#",
      label: "Instagram",
    },
  ];

  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__left">
          {topbarInfo.map((item, index) => (
            <div className="topbar__infoItem" key={item.id}>
              <span className="topbar__infoIcon">{item.icon}</span>
              <span className="topbar__infoText">{item.text}</span>

              {index !== topbarInfo.length - 1 && (
                <span className="topbar__divider">/</span>
              )}
            </div>
          ))}
        </div>

        <div className="topbar__right">
          {topbarSocialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="topbar__socialLink"
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;