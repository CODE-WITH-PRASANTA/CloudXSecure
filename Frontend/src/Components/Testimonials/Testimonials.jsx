import { useState } from "react";
import "./Testimonials.css";
import testimonialImg from "../../assets/doctors.webp";

const DATA = [
  {
    id: 1,
    name: "Ben Stokes",
    role: "Owner, Taxfirm",
    text: "Partnering with ETech has transformed our IT Solution. Their tailored solutions help streamline our operations, improve cybersecurity, and drive efficiency across the board. We've experienced fewer disruptions, faster answers.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "CTO, Fintechly",
    text: "ETech delivered a seamless migration with zero downtime. Their proactive support and deep expertise gave us confidence from day one.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "James Cooper",
    role: "Founder, DevCore",
    text: "Their team feels like an extension of ours. Reliable, secure, and incredibly fast execution.",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Product Lead, Startify",
    text: "We scaled faster with ETech's infrastructure solutions. Outstanding experience overall.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(DATA[0]);

  return (
    <section className="Testimonials-container">
      <div className="Testimonials-header">
        <span className="Testimonials-badge">TESTIMONIALS</span>
        <h2>
          Experience the Difference
          <br />
          Through Our Clients' Eyes
        </h2>
      </div>

      <div className="Testimonials-layout">
        {/* LEFT IMAGE */}
        <div className="Testimonials-image">
          <div className="image-wrapper">
            <img src={testimonialImg} alt="Team discussion" />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="Testimonials-card">
          <div className="card-glow"></div>
          <div className="Testimonials-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>

          <p className="Testimonials-text">"{active.text}"</p>

          <div className="Testimonials-user">
            <div className="avatar-ring">
              <img src={active.avatar} alt={active.name} />
            </div>
            <div className="user-info">
              <h4>{active.name}</h4>
              <span>{active.role}</span>
            </div>
          </div>

          <span className="Testimonials-quote">"</span>
        </div>

        {/* AVATAR SWITCH */}
        <div className="Testimonials-switch">
          {DATA.map((item) => (
            <button
              key={item.id}
              className={`Testimonials-switchItem ${
                active.id === item.id ? "active" : ""
              }`}
              onClick={() => setActive(item)}
            >
              <div className="avatar-indicator"></div>
              <img src={item.avatar} alt={item.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}