import React, { useState } from "react";
import _ from "lodash";
import like from "../images/like.png";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { hotels } from "../../../../utils/data";
import "./hotels.css";

function Hotels() {
  const [data] = useState(hotels);
  const [select, setSelect] = useState("");
  const [showList, setShowList] = useState(false);

  const hotelPrice = (price) => {
    let string = "€";

    if (price < 50) string = string.repeat(2);
    if (price >= 50 && price < 80) string = string.repeat(3);
    if (price >= 80) string = string.repeat(4);

    return string;
  };

  const handleSelect = () => {
    setShowList(!showList);
  };

  const handleList = (e) => {
    setSelect(e.target.innerText);
    setShowList(false);
  };

  return (
    <section className="hotel">
      <header className="hotel-header">
        find suitable hotels
        <div className="underline"></div>
      </header>

      <header className="hotel-header hotel-header-small">
        Hotels {`&`} hostels
        <div className="underline"></div>
      </header>

      <div className="check">
        <div>
          <input type="date" placeholder="Check-in" />
        </div>

        <div>
          <input type="date" placeholder="Check-out" />
        </div>

        <div>
          <span>
            <input
              type="text"
              placeholder="Number of guests"
              value={select}
              readOnly={true}
              onClick={handleSelect}
            />

            <nav style={{ height: showList && "89px" }}>
              <ul>
                <li onClick={handleList}>1</li>
                <li onClick={handleList}>2</li>
                <li onClick={handleList}>3+</li>
              </ul>
            </nav>
          </span>

          <p className="form-select">
            <IconContext.Provider
              value={{
                className: "dropIcon",
                style: { transform: showList && "rotate(180deg)" },
              }}
            >
              <TiArrowSortedDown />
            </IconContext.Provider>
          </p>
        </div>
      </div>

      <div className="hotel-flex">
        <div className="hotel-list">
          {data.map((d) => (
            <div className="hotel-items" key={d.id}>
              <div className="hotel-left">
                <img src={d.img} alt={d.title} />
                {d.recommended && <p>{d.recommended}</p>}
              </div>
              <div className="hotel-right">
                <header>{d.title}</header>

                <div className="right-p">
                  <p>{d.distance} km from city center</p>
                  <p>Price: {hotelPrice(d.price)}</p>
                  <p>
                    {" "}
                    {_.range(d.rating).map((r) => (
                      <img src={like} alt="like" key={r} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="vimeo">
          <div className="vimeo-content">
            <header className="vimeo-header">Vimeo</header>

            <div className="vimeo-p">
              <p>customisable player</p>

              <p>a vimeo feature</p>
            </div>

            <div className="vimeo-btn">
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hotels;
