import React, { useState, useEffect } from "react";
import { city } from "../../../../utils/data";
import { IconContext } from "react-icons";
import { IoIosArrowDropleft } from "react-icons/io";
import "./city.css";

function City({ history, match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setCity();
    // eslint-disable-next-line
  }, []);

  const setCity = () => {
    const cityName = match.params.city;
    const country = city.filter((c) => c.name === cityName);

    setData(country[0].details);
  };

  return (
    <div className="city_container">
      <div className="goBack" onClick={() => history.goBack()}>
        <IconContext.Provider value={{ className: "backIcon" }}>
          <IoIosArrowDropleft />
        </IconContext.Provider>
        <span>Back</span>
      </div>

      <div className="city_content">
        <header>
          <p>
            <span>$20 per month </span>
            <span className="city_name">for {match.params.city}</span>
          </p>
        </header>

        <div className="city">
          {data.map((city) => (
            <div className="city_card" key={city.id}>
              <img src={city.img} alt="city" />

              <div className="city_center">
                <p>Free relocating</p>
                <p>Packages</p>
              </div>
            </div>
          ))}
        </div>

        <div className="city_btn">
          <button>Let's go</button>
        </div>
      </div>
    </div>
  );
}

export default City;
