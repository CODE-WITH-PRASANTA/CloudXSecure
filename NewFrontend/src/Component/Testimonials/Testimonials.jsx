import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import API, { IMAGE_URL } from "../../api/axios";
import bg from "../../assets/testi-bg.png";

const Testimonials = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonials");
      

      // ✅ only show active testimonials
      const active = res.data.data.filter((t) => t.status === "published");

      setTestimonials(active);
    } catch (error) {
      console.error("Fetch testimonials error:", error);
    }
  };

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

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage,
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
          <p className="testimonials-subtitle">CLOUDXSECURE TESTIMONIALS</p>

          {/* TITLE */}
          <h2 className="testimonials-title">
            Trusted by Businesses for Reliable <span>IT & Cloud Solutions</span>
          </h2>

          {/* GRID */}
          <div className="testimonials-grid">
            {currentTestimonials.map((item) => (
              <div key={item._id} className="testimonials-card">
                <div className="testimonials-quote">❝</div>

                <p className="testimonials-text">{item.message}</p>

                <div className="testimonials-divider"></div>

                <div className="testimonials-stars">★★★★★</div>

                <h4 className="testimonials-name">
                  {item.name} <br /> <span>{item.designation}</span>
                </h4>

                <div className="testimonials-avatarWrapper">
                  <div className="testimonials-line"></div>

                  <img
                    src={
                      item.image
                        ? `${IMAGE_URL}${item.image}` // ✅ correct
                        : avatar1
                    }
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="testimonials-pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1 || totalPages)}
            >
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

            <button
              onClick={() =>
                setCurrentPage(
                  currentPage + 1 > totalPages ? 1 : currentPage + 1,
                )
              }
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
