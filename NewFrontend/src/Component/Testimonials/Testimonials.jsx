import React, { useEffect, useState } from "react";
import "./Testimonials.css";

// avatar images
import avatar1 from "../../assets/testi-1.webp";
import avatar2 from "../../assets/testi-2.webp";
import avatar3 from "../../assets/testi-3.webp";

// background image
import bg from "../../assets/testi-bg.png";

const testimonialData = [
  {
    id: 1,
    name: "Alberta Infantino",
    role: "Software Engineer",
    image: avatar1,
    text:
      "CloudXsecure delivered a secure and high-performance web solution that improved our workflow and system efficiency. Their technical expertise made a real difference.",
  },
  {
    id: 2,
    name: "Hosain Al-Amin",
    role: "UI/UX Designer",
    image: avatar2,
    text:
      "The team at CloudXsecure combines design and development perfectly. They helped us build a modern, responsive platform with excellent usability and performance.",
  },
  {
    id: 3,
    name: "M. Kamrul Islam",
    role: "Project Manager",
    image: avatar3,
    text:
      "We trusted CloudXsecure for cloud and DevOps solutions, and they delivered scalable, reliable systems with strong support throughout the project.",
  },
  {
    id: 4,
    name: "Sophia Turner",
    role: "Marketing Specialist",
    image: avatar1,
    text:
      "Professional team with clear communication and strong execution. The results exceeded our expectations and helped us improve our digital presence.",
  },
  {
    id: 5,
    name: "Daniel Brooks",
    role: "UI/UX Designer",
    image: avatar2,
    text:
      "From concept to delivery, everything was smooth. Their attention to detail and creative approach really stood out.",
  },
  {
    id: 6,
    name: "Emily Watson",
    role: "Project Manager",
    image: avatar3,
    text:
      "CloudXsecure delivered on time with excellent quality. Their solutions helped us scale our operations efficiently.",
  },
];

const Testimonials = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 767) setCardsPerPage(1);
      else if (window.innerWidth <= 991) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalPages = Math.ceil(testimonialData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentTestimonials = testimonialData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section
      className="testimonials"
      id="testimonials"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="testimonials-overlay">
        <div className="testimonials-container">

          {/* SUBTITLE */}
          <p className="testimonials-subtitle">
            CLOUDXSECURE TESTIMONIALS
          </p>

          {/* TITLE */}
          <h2 className="testimonials-title">
            Trusted by Businesses for Reliable <span>IT & Cloud Solutions</span>
          </h2>

          {/* GRID */}
          <div className="testimonials-grid">
            {currentTestimonials.map((item) => (
              <div key={item.id} className="testimonials-card">

                <div className="testimonials-quote">❝</div>

                <p className="testimonials-text">{item.text}</p>

                <div className="testimonials-divider"></div>

                <div className="testimonials-stars">★★★★★</div>

                <h4 className="testimonials-name">
                  {item.name} <span>{item.role}</span>
                </h4>

                <div className="testimonials-avatarWrapper">
                  <div className="testimonials-line"></div>
                  <img
                    src={item.image}
                    alt={`${item.name} testimonial for CloudXsecure`}
                  />
                </div>

              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="testimonials-pagination">
            <button onClick={() => setCurrentPage(currentPage - 1 || totalPages)}>
              ‹
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button onClick={() => setCurrentPage(currentPage + 1 > totalPages ? 1 : currentPage + 1)}>
              ›
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;