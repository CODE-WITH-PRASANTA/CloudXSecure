import React, { useEffect, useMemo, useState } from "react";
import "./ServicesMember.css";

const servicesMemberData = [
  {
    id: 1,
    name: "Cameron William",
    role: "UI/UX DESIGNER",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "WEB DEVELOPER",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "MARKETING EXPERT",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Daniel Robert",
    role: "APP DESIGNER",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Olivia James",
    role: "GRAPHIC DESIGNER",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Noah Smith",
    role: "FRONTEND DEVELOPER",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Ava Johnson",
    role: "CONTENT STRATEGIST",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Liam Walker",
    role: "SEO SPECIALIST",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80",
  },
];

const ServicesMember = () => {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 767) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 1199) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(4);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = useMemo(() => {
    return Math.ceil(servicesMemberData.length / cardsPerPage);
  }, [cardsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, totalPages]);

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return servicesMemberData.slice(startIndex, startIndex + cardsPerPage);
  }, [currentPage, cardsPerPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <section className="servicesMember">
      <div className="servicesMember__container">
        <div className="servicesMember__header">
          <div className="servicesMember__badge">
            <span className="servicesMember__badgeLine"></span>
            <span className="servicesMember__badgeText">OUR TEAM MEMBER</span>
          </div>

          <h2 className="servicesMember__title">Dedicated Team Members</h2>
        </div>

        <div className="servicesMember__grid">
          {currentCards.map((item) => (
            <article key={item.id} className="servicesMember__card">
              <div className="servicesMember__imageWrap">
                <div className="servicesMember__topLine">
                  <span className="servicesMember__topLineOrange"></span>
                  <span className="servicesMember__topLineNavy"></span>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="servicesMember__image"
                />

                <div className="servicesMember__overlay">
                  <div className="servicesMember__overlayDark"></div>

                  <div className="servicesMember__overlayOrange">
                    <h3 className="servicesMember__name">{item.name}</h3>
                    <p className="servicesMember__role">{item.role}</p>
                  </div>

                  <div className="servicesMember__overlaySocial">
                    <a href="/" className="servicesMember__socialLink">
                      FACEBOOK
                    </a>
                    <a href="/" className="servicesMember__socialLink">
                      TWITTER
                    </a>
                    <a
                      href="/"
                      className="servicesMember__socialLink servicesMember__socialLink--active"
                    >
                      BEHANCE
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="servicesMember__pagination">
          <button
            className="servicesMember__paginationArrow"
            onClick={handlePrev}
            aria-label="Previous page"
          >
            ‹
          </button>

          <div className="servicesMember__paginationNumbers">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`servicesMember__paginationButton ${
                  currentPage === index + 1
                    ? "servicesMember__paginationButton--active"
                    : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="servicesMember__paginationArrow"
            onClick={handleNext}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesMember;