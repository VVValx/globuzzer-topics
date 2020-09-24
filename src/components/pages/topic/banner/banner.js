import React, { useState, useEffect } from "react";
import playButton from "../images/playButton.png";
import { list } from "../../../../utils/data";
import "./banner.css";

function Banner() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState("visa issue");

  useEffect(() => {
    const init = list().filter((l) => l.id === 1);
    setData(init);
  }, []);

  const changeList = ({ target: disp }) => {
    const init = list().filter(
      (l) => l.title.toLocaleLowerCase() === disp.innerText.toLocaleLowerCase()
    );

    setData(init);
    setCurrent(disp.innerText.toLocaleLowerCase());
  };

  const listStyle = (desc) => {
    if (desc.toLocaleLowerCase() === current) {
      return {
        background: "#FF889E",
      };
    }
  };

  return (
    <React.Fragment>
      <div className="banner">
        <div className="b-center">
          <header className="b-header">
            <p>Accomodation in Helsinki</p>
            <p>Explore different kinds of information</p>
          </header>

          <button>Join us</button>

          <p className="select-person">
            I am a{" "}
            <select>
              <option>Person who will stay for a long term</option>
              <option>Person who will stay for a short term</option>
              <option>Person who is a student</option>
            </select>
          </p>
        </div>
      </div>

      <div className="list">
        <div
          className="list-flex"
          onClick={changeList}
          style={listStyle("visa issue")}
        >
          Visa issue
        </div>
        <div
          className="list-flex"
          onClick={changeList}
          style={listStyle("atm")}
        >
          Atm
        </div>
        <div
          className="list-flex"
          onClick={changeList}
          style={listStyle("top hotels")}
        >
          Top hotels
        </div>
        <div
          className="list-flex"
          onClick={changeList}
          style={listStyle("security risk")}
        >
          Security risk
        </div>
      </div>

      <div className="list-item">
        {data.map((d) => (
          <React.Fragment key={d.id}>
            <div className="list-left">
              <img src={d.imgPath} alt="helsinki" id="list" />

              <div className="list-desc">
                <img src={playButton} alt="playButton" id="list-play" />
                <p>Accomodation in Helsinki</p>
              </div>
            </div>

            <div className="list-right">
              <header>
                <p>{d.title}</p>
              </header>

              <div className="list-para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>

              <div className="list-more">
                <p>View more details</p>

                <p>share this video</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Banner;
