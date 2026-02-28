import { useState, useEffect } from "react";
import "./Testimonials.css";
import testimonialImg from "../../assets/dr-pi1.webp";
import API, { IMAGE_URL } from "../../api/axios";

export default function Testimonials() {
  const [DATA, setDATA] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonials?status=published");
      const testimonials = res.data.data || [];

      setDATA(testimonials);

      if (testimonials.length > 0) {
        setActive(testimonials[0]);
      }
    } catch (err) {
      console.error("FETCH TESTIMONIAL ERROR:", err);
    }
  };

  if (!active) return null;

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
            {[...Array(active.rating || 5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>

          <p className="Testimonials-text">"{active.message}"</p>

          <div className="Testimonials-user">
            <div className="avatar-ring">
              <img
                src={
                  active.image
                    ? `${IMAGE_URL}${active.image}`
                    : "https://via.placeholder.com/100"
                }
                alt={active.name}
              />
            </div>
            <div className="user-info">
              <h4>{active.name}</h4>
              <span>
                {active.designation}
                {active.company && `, ${active.company}`}
              </span>
            </div>
          </div>

          <span className="Testimonials-quote">"</span>
        </div>

        {/* AVATAR SWITCH */}
        <div className="Testimonials-switch">
          {DATA.map((item) => (
            <button
              key={item._id}
              className={`Testimonials-switchItem ${
                active._id === item._id ? "active" : ""
              }`}
              onClick={() => setActive(item)}
            >
              <div className="avatar-indicator"></div>
              <img
                src={
                  item.image
                    ? `${IMAGE_URL}${item.image}`
                    : "https://via.placeholder.com/100"
                }
                alt={item.name}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}