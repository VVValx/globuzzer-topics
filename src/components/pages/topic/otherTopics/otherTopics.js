import React, { useState } from "react";
import { otherTopics } from "../../../../utils/data";
import "./otherTopics.css";

function OtherTopics() {
  const [data] = useState(otherTopics);

  const cardStyle = (d) => {
    if (window.innerWidth <= 500) {
      return {
        backgroundImage: `url(${d.img})`,
        height: "110px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    }
  };
  return (
    <section className="other-topics">
      <header className="other-topics-header">
        {window.innerWidth <= 500 ? "Related topics" : "Other topics"}

        <div className="underline"></div>
      </header>

      <div className="card-container">
        {data.map((d) => (
          <div className="card" key={d.id} style={cardStyle(d)}>
            <img src={d.img} alt={d.description} />
            <div className="card-items">
              <p className="card-items-top">{d.title}</p>
              <p className="card-items-bottom">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OtherTopics;
