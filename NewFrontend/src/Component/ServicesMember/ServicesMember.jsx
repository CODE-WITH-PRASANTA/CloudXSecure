import React, { useEffect, useMemo, useState } from "react";
import "./ServicesMember.css";
import API, { IMAGE_URL } from "../../api/axios";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ServicesMember = () => {
  const [members, setMembers] = useState([]);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/team");
      console.log("Fetched team members:", res.data.data); // ✅ debug log

      setMembers(res.data.data || []);
    } catch (err) {
      console.error("Team fetch error:", err);
    }
  };

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
    return Math.ceil(members.length / cardsPerPage) || 1;
  }, [members, cardsPerPage]);

  const currentCards = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return members.slice(startIndex, startIndex + cardsPerPage);
  }, [currentPage, cardsPerPage, members]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, totalPages]);

  const formatLink = (url) => {
    if (!url) return null;
    return url.startsWith("http") ? url : `https://${url}`;
  };

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
            <article key={item._id} className="servicesMember__card">
              <div className="servicesMember__imageWrap">
                <img
                  src={
                    item.image
                      ? item.image.startsWith("http")
                        ? item.image
                        : `${IMAGE_URL}${item.image}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={item.name}
                  className="servicesMember__image"
                />
                <div className="servicesMember__overlay">
                  <div className="servicesMember__overlayDark"></div>

                  <div className="servicesMember__overlayOrange">
                    <h3 className="servicesMember__name">{item.name}</h3>

                    <p className="servicesMember__role">
                      {item.role || item.designation}
                    </p>

                    {/* ✅ MOVE HERE */}
                    <div className="servicesMember__social">
                      {item.facebook && (
                        <a
                          href={formatLink(item.facebook)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      )}

                      {item.linkedin && (
                        <a
                          href={formatLink(item.linkedin)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}

                      {item.instagram && (
                        <a
                          href={formatLink(item.instagram)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
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
        )}
      </div>
    </section>
  );
};

export default ServicesMember;
