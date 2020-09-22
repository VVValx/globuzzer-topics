import React from "react";
import Article from "../video_articles/video_articles";
import other1 from "../images/other-1.png";
import other2 from "../images/other-2.png";
import "./body.css";

function Body() {
  return (
    <div className="container">
      <Article />
      <section className="other-topics">
        <header>Other topics</header>

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
    </div>
  );
}

export default Body;
