import React, { useState } from "react";
import './ScrollButton.css';

const ScrollButton = () => {
    
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: visible ? "flex" : "none",
        height: 40,
        float: "right",
        backgroundImage: "none",
        margin: "10px",
      }}
      className="btn btn-custom btn-light scroll"
    >
      <i class="bi bi-caret-up-square" />
    </button>
  );
};

export default ScrollButton;
