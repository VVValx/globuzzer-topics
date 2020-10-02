import React from "react";
import other1 from "../images/other-1.png";
import other2 from "../images/other-2.png";
import "./otherTopics.css";

function OtherTopics() {
  return (
    <section className="other-topics">
      <header className="other-topics-header">
        {window.innerWidth < 481 ? "Related topics" : "Other topics"}

        <div className="underline"></div>
      </header>

      <div className="card-container">
        <div className="card">
          <img src={other1} alt="other1" />
          <div className="card-items">
            <p className="card-items-top">Attractions</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>
        <div className="card">
          <img src={other2} alt="other2" />
          <div className="card-items">
            <p className="card-items-top">Accomodation</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>
        <div className="card">
          <img src={other1} alt="other1" />
          <div className="card-items">
            <p className="card-items-top">Local Culture</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>

        <div className="card">
          <img src={other2} alt="other2" />
          <div className="card-items">
            <p className="card-items-top">Attractions</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>
        <div className="card">
          <img src={other1} alt="other1" />
          <div className="card-items">
            <p className="card-items-top">Attractions</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>
        <div className="card">
          <img src={other2} alt="other2" />
          <div className="card-items">
            <p className="card-items-top">Attractions</p>
            <p className="card-items-bottom">Helsinki</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherTopics;
