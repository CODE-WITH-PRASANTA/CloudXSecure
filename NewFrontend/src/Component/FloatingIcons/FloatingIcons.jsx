import React, { useEffect, useState } from "react";
import "./FloatingIcons.css";
import {
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

import API from "../../api/axios";

const FloatingIcons = () => {
  const [showTop, setShowTop] =
    useState(false);

  const [contact, setContact] =
    useState({
      phone: "",
      email: "",
      office: "",
      website: "",
    });

  // ================= FETCH CONTACT =================
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await API.get(
          "/contact"
        );

        if (res.data.success) {
          setContact(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchContact();
  }, []);

  // ================= SHOW TOP BUTTON =================
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // ================= SCROLL TOP =================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-icons">

      {/* ================= CALL ================= */}
      <a
        href={`tel:${contact.phone}`}
        className="icon call"
      >
        <Phone size={20} />
      </a>

      {/* ================= WHATSAPP ================= */}
      <a
        href={`https://wa.me/${contact.phone}`}
        target="_blank"
        rel="noreferrer"
        className="icon whatsapp"
      >
        <MessageCircle size={20} />
      </a>

      {/* ================= SCROLL TOP ================= */}
      {showTop && (
        <button
          className="icon top"
          onClick={scrollToTop}
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
};

export default FloatingIcons;