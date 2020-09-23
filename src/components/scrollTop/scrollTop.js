import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./scrollTop.css";

function ScrollTop() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 100) return setDisplay(true);

    setDisplay(false);
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="scrollTop"
      onClick={goTop}
      style={{ display: display && "block" }}
    >
      <AiOutlineArrowUp />
    </div>
  );
}

export default ScrollTop;
