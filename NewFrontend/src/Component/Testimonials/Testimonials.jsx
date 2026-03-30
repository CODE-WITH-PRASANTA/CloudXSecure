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
    role: "DEVELOPER",
    image: avatar1,
    text: "Paradigms. Monotonectally extend open-source ideas via competitive methods of empowerment and revolutionize standard business solutions.",
  },
  {
    id: 2,
    name: "Hosain Al-Amin",
    role: "DESIGNER",
    image: avatar2,
    text: "Completely transform intuitive platforms with focused collaboration and create meaningful customer experiences through creative execution.",
  },
  {
    id: 3,
    name: "M. Kamrul Islam",
    role: "DEVELOPER",
    image: avatar3,
    text: "Professionally redefine scalable systems while delivering premium user-centered solutions for modern digital business growth.",
  },
  {
    id: 4,
    name: "Sophia Turner",
    role: "MARKETER",
    image: avatar1,
    text: "Their service was smooth, professional, and highly effective. The team delivered quality results that exceeded our expectations.",
  },
  {
    id: 5,
    name: "Daniel Brooks",
    role: "UI/UX DESIGNER",
    image: avatar2,
    text: "The entire process felt seamless. Their creativity, attention to detail, and commitment to excellence truly stood out for us.",
  },
  {
    id: 6,
    name: "Emily Watson",
    role: "PROJECT MANAGER",
    image: avatar3,
    text: "We were impressed by the communication, speed, and polished final output. It helped us build more confidence in our brand.",
  },
  {
    id: 7,
    name: "Michael Jordan",
    role: "ENTREPRENEUR",
    image: avatar1,
    text: "Fantastic experience overall. The team understood our needs quickly and delivered a solution that felt both modern and reliable.",
  },
];

const Testimonials = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 767) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 991) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(testimonialData.length / cardsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [cardsPerPage, currentPage]);

  const totalPages = Math.ceil(testimonialData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentTestimonials = testimonialData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="testimonials-overlay">
        <div className="testimonials-container">
          <p className="testimonials-subtitle">TESTIMONIALS</p>

          <h2 className="testimonials-title">
            What Our Customer <span>Says</span>
          </h2>

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
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-pagination">
            <button
              className="testimonials-pageArrow"
              onClick={handlePrev}
              aria-label="Previous page"
            >
              ‹
            </button>

            <div className="testimonials-pageNumbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`testimonials-pageBtn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="testimonials-pageArrow"
              onClick={handleNext}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;