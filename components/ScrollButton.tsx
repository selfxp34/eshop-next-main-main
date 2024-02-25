"use client";
import React, { useState, useEffect } from "react";
import "./css/ScrollButton.css";

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-button-container">
      <button
        className={`scroll-button ${showButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <span>&#8593;</span> {/* Стрелочка вверх */}
      </button>
    </div>
  );
}
