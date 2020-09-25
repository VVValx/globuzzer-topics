import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { IconContext } from "react-icons";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import playButton from "../images/playButton.png";
import { list } from "../../../../utils/data";
import "./banner.css";

function Banner() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState("visa issue");
  const [video, setVideo] = useState({
    playVideo: false,
    videoId: "",
  });

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
    setVideo({ playVideo: false, videoId: "" });
  };

  const listStyle = (desc) => {
    if (desc.toLocaleLowerCase() === current) {
      return {
        background: "#FF889E",
      };
    }
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  const playVideo = ({ videoId }) => {
    const newVideo = { ...video };
    newVideo.playVideo = true;
    newVideo.videoId = videoId;

    setVideo(newVideo);
  };

  const closeVideo = () => {
    const newVideo = { ...video };
    newVideo.playVideo = false;
    newVideo.videoId = "";

    setVideo(newVideo);
  };

  const opts = {
    height: "550",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <React.Fragment>
      <div className="banner">
        <div className="banner-nav">
          <li>
            Landing page
            <IconContext.Provider value={{ className: "banner-arrow" }}>
              <IoMdArrowDropright />
            </IconContext.Provider>
          </li>
          <li>
            Helsinki
            <IconContext.Provider value={{ className: "banner-arrow" }}>
              <IoMdArrowDropright />
            </IconContext.Provider>
          </li>
          <li>Accomodation</li>
        </div>

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

      {video.playVideo && (
        <div className="video banner-video">
          <span onClick={closeVideo}>
            <IconContext.Provider value={{ className: "icon" }}>
              <AiOutlineCloseCircle />
            </IconContext.Provider>
          </span>
          <Youtube videoId={video.videoId} opts={opts} onReady={onReady} />
        </div>
      )}

      {!video.playVideo && (
        <div className="list-item">
          {data.map((d) => (
            <React.Fragment key={d.id}>
              <div className="list-left">
                <img src={d.imgPath} alt="helsinki" id="list" />

                <div className="list-desc">
                  <span onClick={() => playVideo(d)}>
                    <img src={playButton} alt="playButton" id="list-play" />
                  </span>
                  <p>Accomodation in Helsinki</p>
                </div>
              </div>

              <div className="list-right">
                <header>
                  <span>{d.title}</span>{" "}
                  <span>
                    <IconContext.Provider value={{ className: "icon" }}>
                      <AiOutlineCloseCircle />
                    </IconContext.Provider>
                  </span>
                </header>

                <div className="list-para">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
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
      )}
    </React.Fragment>
  );
}

export default Banner;
