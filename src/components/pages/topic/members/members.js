import React from "react";
import blueWoman from "../images/blue-woman.png";
import casualBoy from "../images/casualBoy.png";
import womanBlack from "../images/womanBlack.png";
import womanGlasses from "../images/womanGlasses.png";
import "./members.css";

function Members() {
  return (
    <section className="member-container">
      <header className="member-header">
        Top members to meet<div className="underline"></div>
      </header>

      <div className="member-details big-screen">
        <div className="details">
          <img src={blueWoman} alt="blueWoman" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>

        <div className="details">
          <img src={casualBoy} alt="casualBoy" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>

        <div className="details red-detail">
          <div className="inner-detail">
            <div className="front">+</div>
            <div className="back">Join us</div>
          </div>
        </div>

        <div className="details ">
          <img src={womanBlack} alt="womanBlack" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>

        <div className="details">
          <img src={womanGlasses} alt="womanGlasses" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>
      </div>

      <div className="member-details small-screen">
        <div className="details">
          <img src={blueWoman} alt="blueWoman" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>

        <div className="member-details-flex">
          <div className="details">
            <img src={casualBoy} alt="casualBoy" />
            <header>Asya</header>

            <p>
              <span>#cook</span>
              <span>#Finland</span>
            </p>
          </div>

          <div className="details">
            <div className="red-circle">+</div>
          </div>

          <div className="details ">
            <img src={womanBlack} alt="womanBlack" />
            <header>Asya</header>

            <p>
              <span>#cook</span>
              <span>#Finland</span>
            </p>
          </div>
        </div>

        <div className="details">
          <img src={womanGlasses} alt="womanGlasses" />
          <header>Asya</header>

          <p>
            <span>#cook</span>
            <span>#Finland</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Members;
