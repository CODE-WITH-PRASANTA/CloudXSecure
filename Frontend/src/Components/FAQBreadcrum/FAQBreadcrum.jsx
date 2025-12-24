import React, { useEffect, useRef } from "react";
import "./FAQBreadcrum.css";

import hand from "../../assets/elements16.webp";
import circles from "../../assets/elements5.webp";
import orbits from "../../assets/elements4.webp";
import moon from "../../assets/elements1.webp";

const Breadcrumb = () => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  /* ================= PARALLAX (NO GSAP) ================= */
  useEffect(() => {
    const wrapper = wrapperRef.current;

    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      wrapper.style.setProperty("--px", `${x}px`);
      wrapper.style.setProperty("--py", `${y}px`);
    };

    wrapper.addEventListener("mousemove", move);
    return () => wrapper.removeEventListener("mousemove", move);
  }, []);

  /* ================= STAR CANVAS ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 420;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6,
      s: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.9)";

      stars.forEach((s) => {
        s.y += s.s;
        if (s.y > h) s.y = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="faqbreadcrumb-wrapper" ref={wrapperRef}>
      <canvas ref={canvasRef} className="stars-canvas" />

      <div className="faqbreadcrumb-inner">
        {/* TEXT */}
        <div className="faqbreadcrumb-content">
          <h1>FAQ's</h1>
          <p>
            Home <span>&gt;</span> Pages <span>&gt;</span> FAQ's
          </p>
        </div>

        {/* DECOR */}
        <img src={circles} alt="" className="circle-decor" />
        <img src={orbits} alt="" className="orbit-decor" />
        <img src={hand} alt="" className="hand-decor" />

        {/* MOON */}
        <div className="moon-orbit">
          <img src={moon} alt="moon" />
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
