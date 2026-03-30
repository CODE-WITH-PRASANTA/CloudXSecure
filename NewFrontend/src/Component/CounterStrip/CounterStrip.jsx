import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CounterStrip.css";

import bgWave from "../../assets/counter-two-bg-shape.webp";
import { FaTrophy, FaUsers, FaStar, FaSmile } from "react-icons/fa";

const counters = [
  { icon: <FaTrophy />, value: 120, label: "Award Winning" },
  { icon: <FaUsers />, value: 99, suffix: "%", label: "Satisfied Client" },
  { icon: <FaStar />, value: 10, suffix: "M", label: "Worldwide Reviews" },
  { icon: <FaSmile />, value: 200, label: "Happy Clients" },
];

const CounterStrip = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(counters.map(() => 0));
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 992) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(counters.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, currentPage]);

  useEffect(() => {
    if (!start) return;

    const intervals = counters.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.value) {
            updated[index] += Math.ceil(item.value / 60);
            if (updated[index] > item.value) {
              updated[index] = item.value;
            }
          } else {
            updated[index] = item.value;
          }
          return updated;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [start]);

  const totalPages = useMemo(() => {
    return Math.ceil(counters.length / itemsPerPage);
  }, [itemsPerPage]);

  const visibleCounters = useMemo(() => {
    if (itemsPerPage === 4) return counters;

    const startIndex = (currentPage - 1) * itemsPerPage;
    return counters.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const getOriginalIndex = (item) => counters.findIndex((c) => c.label === item.label);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <section className="counter2-section" ref={sectionRef}>
      <div
        className="counter2-bg"
        style={{ backgroundImage: `url(${bgWave})` }}
      ></div>

      <div className="counter2-container">
        {visibleCounters.map((item) => {
          const originalIndex = getOriginalIndex(item);

          return (
            <div className="counter2-box" key={item.label}>
              <div className="counter2-icon">{item.icon}</div>

              <h3 className="counter2-number">
                {counts[originalIndex]}
                {item.suffix || ""}
              </h3>

              <p className="counter2-text">{item.label}</p>
            </div>
          );
        })}
      </div>

      {itemsPerPage < 4 && (
        <div className="counter2-pagination">
          <button
            className="counter2-paginationArrow"
            onClick={handlePrev}
            aria-label="Previous page"
          >
            ‹
          </button>

          <div className="counter2-paginationDots">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`counter2-paginationDot ${
                  currentPage === index + 1 ? "counter2-paginationDot--active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="counter2-paginationArrow"
            onClick={handleNext}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default CounterStrip;