import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import playButton from "../images/playButton.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHeart, BsSearch, BsHeartFill } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { RiShareForwardBoxFill } from "react-icons/ri";
import { SiSkillshare } from "react-icons/si";
import { sliceData } from "../../../../utils/sliceData";
import { articlesData, videoData, slide } from "../../../../utils/data";
import "./video_articles.css";

function Article() {
  const [input, setInput] = useState(""); // for searching videos or articles

  //for mapping out data depending if video or article is chosen
  const [data, setData] = useState(videoData);

  //for knowing whether the user is on video or articles --- initial is video
  const [title, setTitle] = useState("videos");

  const [vid, setVid] = useState([]);
  const [video, setVideo] = useState({
    playVideo: false,
    videoId: "",
  });
  const [videoSize, SetVideoSize] = useState(8);

  const [article, setArticle] = useState([]);
  const [articleVideo, setArticleVideo] = useState({
    playVideo: false,
    videoId: "",
  });
  const [articleSize, SetArticleSize] = useState(8);

  const [slideShow] = useState(slide);

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    if (window.innerWidth <= 768) {
      SetVideoSize(4);
      SetArticleSize(4);
    }
  }, []);

  const handleSize = () => {
    if (window.innerWidth <= 768) {
      SetVideoSize(4);
      SetArticleSize(4);
      return;
    }

    SetVideoSize(8);
    SetArticleSize(8);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slicedData = sliceData(
    data,
    0,
    title === "videos" ? videoSize : articleSize
  );

  const render =
    input.length > 2
      ? data.filter(
          (article) =>
            article.title.toLocaleLowerCase().startsWith(input) ||
            article.title.toLocaleLowerCase().endsWith(input) ||
            article.title.toLocaleLowerCase().includes(input)
        )
      : slicedData;

  const articleLikes = ({ likes }) => {
    if (likes < 1) return "";
    if (likes > 999) {
      const render = likes % 1000;
      if (render > 99) return `${(likes / 1000).toFixed(1)}k`;
      return `${(likes / 1000).toFixed(0)}k`;
    }
    return likes;
  };

  const handleClick = ({ target: btn }) => {
    if (btn.innerText.toLocaleLowerCase() === "video") {
      setData(videoData);
      setTitle("videos");
    } else {
      setData(articlesData);
      setTitle("articles");
    }
  };

  const moreArticle = () => {
    if (title === "videos") {
      let size = videoSize + 4;
      if (videoSize >= data.length) {
        if (window.innerWidth <= 900) size = 4;
        else size = 8;
      }
      return SetVideoSize(size);
    }

    let size = articleSize + 4;

    if (articleSize >= data.length) {
      if (window.innerWidth <= 900) size = 4;
      else size = 8;
    }
    SetArticleSize(size);
  };

  const moreOrLess = () => {
    let render = "more";

    if (title === "videos" && videoSize >= data.length) render = "less";

    if (title === "articles" && articleSize >= data.length) render = "less";

    return `${render} ${title}`;
  };

  const btnStyle = (a) => {
    if (a === "video") {
      return {
        background: title === "videos" && "#f24b6a",
        color: title === "videos" && "#fff",
      };
    } else {
      return {
        background: title === "articles" && "#f24b6a",
        color: title === "articles" && "#fff",
      };
    }
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  const playVideo = ({ videoId }) => {
    if (title === "videos") {
      const newVideo = { ...video };
      newVideo.playVideo = true;
      newVideo.videoId = videoId;

      return setVideo(newVideo);
    }

    const newVideo = { ...articleVideo };
    newVideo.playVideo = true;
    newVideo.videoId = videoId;

    setArticleVideo(newVideo);
  };

  const closeVideo = () => {
    if (title === "videos") {
      const newVideo = { ...video };
      newVideo.playVideo = false;
      newVideo.videoId = "";

      return setVideo(newVideo);
    }

    const newVideo = { ...articleVideo };
    newVideo.playVideo = false;
    newVideo.videoId = "";

    setArticleVideo(newVideo);
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const articleHover = (art) => {
    if (title === "articles" && article.length > 0) {
      setArticle([art]);
      setArticleVideo({ playVideo: false, videoId: "" });
    }

    if (title === "videos" && vid.length > 0) {
      setVid([art]);
      setVideo({ playVideo: false, videoId: "" });
    }
  };

  const showArticle = (art) => {
    const width = window.innerWidth;
    if (title === "articles") {
      setArticle([art]);
      setArticleVideo({ playVideo: false, videoId: "" });
      if (width <= 500) SetArticleSize(1);
      if (width >= 517 && width < 774) SetArticleSize(2);
      if (width >= 774 && width < 900) SetArticleSize(3);
      if (width >= 900 && width < 1014) SetArticleSize(2);
      if (width >= 1014 && width < 1344) SetArticleSize(3);
      if (width >= 1344) SetArticleSize(4);
    }

    if (title === "videos") {
      setVid([art]);
      setVideo({ playVideo: false, videoId: "" });
      if (width <= 500) SetVideoSize(1);
      if ((width >= 517) & (width < 774)) SetVideoSize(2);
      if (width >= 774 && width < 900) SetVideoSize(3);
      if (width >= 1014 && width < 1344) SetVideoSize(3);
      if (width >= 1344) SetVideoSize(4);
    }
  };

  const closeArticle = () => {
    window.innerWidth <= 768 ? SetArticleSize(4) : SetArticleSize(8);
    setArticle([]);
  };

  const closeVid = () => {
    window.innerWidth <= 768 ? SetVideoSize(4) : SetVideoSize(8);
    if (window.innerWidth <= 515) SetVideoSize(4);
    setVid([]);
  };

  const heart = (article) => {
    const allData = [...data];

    const newArticle = allData.find((d) => d.id === article.id);
    if (newArticle.liked) newArticle.likes -= 1;
    else newArticle.likes += 1;

    newArticle.liked = !newArticle.liked;
    setData(allData);
  };

  return (
    <section className="article">
      <div className="article-left">
        <div className="btn-group">
          <button
            className="btn btn-vid"
            onMouseOver={handleClick}
            style={btnStyle("video")}
          >
            Video
          </button>

          <button
            className="btn btn-art"
            onMouseOver={handleClick}
            style={btnStyle("article")}
          >
            Article
          </button>
        </div>

        <div className="search">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Search ${title} here...`}
            id="search_input"
          />
        </div>

        <div className="article-card-container">
          {render.map((article) => (
            <div
              className="article-card"
              key={article.id}
              onMouseOver={() => articleHover(article)}
            >
              <span onClick={() => showArticle(article)}>
                <img
                  src={article.imgPath}
                  alt={article.title}
                  id="article-card-img"
                />
              </span>
              <IconContext.Provider value={{ className: "forward" }}>
                <RiShareForwardBoxFill />
              </IconContext.Provider>

              <div
                className="play"
                style={{ display: title === "videos" && "block" }}
                onClick={() => showArticle(article)}
              >
                <img src={playButton} alt="playButton" id="playImg" />
              </div>

              <div className="desc">
                <header>{article.title}</header>

                <div className="desc-items">
                  <div className="desc-left">
                    <img src={article.userImg} alt={article.title} />
                    <p>{article.name}</p>
                  </div>

                  <div className="desc-right">
                    <span onClick={() => heart(article)}>
                      {article.liked ? (
                        <IconContext.Provider value={{ className: "heart" }}>
                          <BsHeartFill />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider value={{ className: "heart" }}>
                          <BsHeart />
                        </IconContext.Provider>
                      )}
                    </span>
                    {articleLikes(article)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {title === "videos" && video.playVideo && (
          <div className="video">
            <span onClick={closeVideo}>
              <IconContext.Provider value={{ className: "icon" }}>
                <AiOutlineCloseCircle />
              </IconContext.Provider>
            </span>
            <Youtube videoId={video.videoId} opts={opts} onReady={onReady} />
          </div>
        )}

        {title === "articles" && articleVideo.playVideo && (
          <div className="video">
            <span onClick={closeVideo}>
              <IconContext.Provider value={{ className: "icon" }}>
                <AiOutlineCloseCircle />
              </IconContext.Provider>
            </span>
            <Youtube
              videoId={articleVideo.videoId}
              opts={opts}
              onReady={onReady}
            />
          </div>
        )}

        {!video.playVideo &&
          title === "videos" &&
          vid.map((v) => (
            <div className="vid">
              <img src={v.imgPath} alt="img" id="vidImg" />
              <div className="playVid" onClick={() => playVideo(v)}>
                <img src={playButton} alt="playButton" id="playVid" />
              </div>

              <div onClick={closeVid}>
                <IconContext.Provider value={{ className: " vidClose" }}>
                  <AiOutlineCloseCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))}

        {!articleVideo.playVideo &&
          title === "articles" &&
          article.map((a) => (
            <div className="helsinki" key={a.id}>
              <div className="helsinki-left">
                <img src={a.article.img.path} alt="helsinki" id="helsinki" />

                <div className="helsinki-desc">
                  <span onClick={() => playVideo(a)}>
                    <img src={playButton} alt="playButton" id="play" />
                  </span>

                  <p>{article.img}</p>
                </div>
              </div>

              <div className="helsinki-right">
                <header>
                  <p>{a.article.title}</p>
                  <p onClick={closeArticle}>
                    <IconContext.Provider
                      value={{ className: "icon helsinki-close" }}
                    >
                      <AiOutlineCloseCircle />
                    </IconContext.Provider>
                  </p>
                </header>

                <div className="para">
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

                <div className="list-more list-more-article">
                  <p>
                    View more details{" "}
                    <IconContext.Provider
                      value={{ className: "icon arrow-right" }}
                    >
                      <IoIosArrowForward />
                    </IconContext.Provider>
                  </p>

                  <p>
                    share this video
                    <IconContext.Provider
                      value={{ className: "icon share article-share" }}
                    >
                      <SiSkillshare />
                    </IconContext.Provider>
                  </p>
                </div>
              </div>
            </div>
          ))}

        <div className="more-articles" onClick={moreArticle}>
          <p>
            <IconContext.Provider value={{ className: "arrow-down" }}>
              {moreOrLess().includes("less") ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
            </IconContext.Provider>
            {moreOrLess()}
          </p>

          <p>
            see more{" "}
            <IconContext.Provider value={{ className: "arrow-down" }}>
              <IoIosArrowDown />
            </IconContext.Provider>
          </p>
        </div>
      </div>

      <div className="article-right">
        <div className="article-right-top">
          <Slider {...settings}>
            {slideShow.map((s) => (
              <div className="slide" key={s.id}>
                <img src={s.img} alt="mask" />
                <p>{s.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        <div className=" g-vimeo">
          <div className="g-vimeo-content">
            <header className="vimeo-header">Vimeo</header>

            <div className="g-vimeo-p">
              <p>customisable player</p>
            </div>

            <div className="g-vimeo-btn">
              <p>a vimeo feature</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div className="article-right-bottom">
          <header>What are you looking for ?</header>

          <div className="article-right-form">
            <select>
              <option>Discover Helsinki</option>
            </select>

            <p className="form-select">
              <IconContext.Provider value={{ className: "dropIcon" }}>
                <TiArrowSortedDown />
              </IconContext.Provider>
            </p>
          </div>

          <div className="article-right-form">
            <select>
              <option>Topic: Accomodation</option>
            </select>

            <p className="form-select">
              <IconContext.Provider value={{ className: "dropIcon" }}>
                <TiArrowSortedDown />
              </IconContext.Provider>
            </p>
          </div>

          <div className="article-right-form">
            <input type="text" placeholder="Search anything you want" />
            <p className="form-search">
              <IconContext.Provider value={{ className: "search-icon" }}>
                <BsSearch />
              </IconContext.Provider>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
