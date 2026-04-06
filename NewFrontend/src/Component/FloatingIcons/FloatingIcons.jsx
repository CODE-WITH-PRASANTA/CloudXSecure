import React, { useEffect, useState } from "react";
import "./FloatingIcons.css";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

const FloatingIcons = () => {
  const [showTop, setShowTop] = useState(false);

  // Show scroll-to-top after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-icons">

      {/* Call */}
      <a href="tel:+919999999999" className="icon call">
        <Phone size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="icon whatsapp"
      >
        <MessageCircle size={20} />
      </a>

      {/* Scroll To Top */}
      {showTop && (
        <button className="icon top" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
};

export default FloatingIcons;