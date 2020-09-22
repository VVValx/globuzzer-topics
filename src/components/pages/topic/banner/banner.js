import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="b-center">
        <header className="b-header">
          <h1>Accomodation in Helsinki</h1>
          <p>Explore different kinds of information</p>
        </header>

        <button>Join us</button>

        <h2>
          I am a{" "}
          <select>
            <option>Person who will stay for a long term</option>
            <option>Person who will stay for a short term</option>
            <option>Person who is a student</option>
          </select>
        </h2>
      </div>
    </div>
  );
}

export default Banner;
