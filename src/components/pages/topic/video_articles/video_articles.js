import React, { useState } from "react";
import Youtube from "react-youtube";
import playButton from "../images/playButton.png";
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { sliceData } from "../../../../utils/sliceData";
import { articlesData, videoData, slide } from "../../../../utils/data";
import "./video_articles.css";

function Article() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(videoData());
  const [title, setTitle] = useState("videos");
  const [video, setVideo] = useState({
    playVideo: false,
    videoId: "",
  });
  const [videoSize, SetVideoSize] = useState(4);
  const [article, setArticle] = useState([]);
  const [articleVideo, setArticleVideo] = useState({
    playVideo: false,
    videoId: "",
  });
  const [articleSize, SetArticleSize] = useState(4);
  const [index, setIndex] = useState(0);
  const [slideShow, setSlide] = useState(slide[index]);

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
    if (likes > 999)
      return likes % 1000 === 0
        ? `${likes / 1000}k`
        : `${(likes / 1000).toFixed(1)}k`;

    return likes;
  };

  const handleClick = ({ target: btn }) => {
    if (btn.innerText.toLocaleLowerCase() === "video") {
      setData(videoData());
      setTitle("videos");
    } else {
      setData(articlesData());
      setTitle("articles");
    }
  };

  const moreArticle = () => {
    if (title === "videos") {
      let size = videoSize + 4;
      if (videoSize >= data.length) size = data.length - 4;
      return SetVideoSize(size);
    }

    let size = articleSize + 4;

    if (articleSize >= data.length) size = data.length - 4;
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

  const handleSlide = () => {
    let i = index;

    if (i === 2) i = 0;
    else i += 1;

    setIndex(i);
    setSlide(slide[i]);
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
      autoplay: 0,
    },
  };

  const showArticle = (art) => {
    if (title === "articles") {
      setArticle([art]);
      setArticleVideo({ playVideo: false, videoId: "" });
    }
  };

  return (
    <section className="article">
      <div className="article-left">
        <div className="btn-group">
          <button
            className="btn btn-vid"
            onClick={handleClick}
            style={btnStyle("video")}
          >
            Video
          </button>

          <button
            className="btn btn-art"
            onClick={handleClick}
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
              onClick={() => showArticle(article)}
            >
              <img src={article.imgPath} alt={article.title} />
              <IconContext.Provider value={{ className: "forward" }}>
                <TiArrowForwardOutline />
              </IconContext.Provider>

              <div
                className="play"
                style={{ display: title === "videos" && "block" }}
                onClick={() => playVideo(article)}
              >
                <img src={playButton} alt="playButton" />
              </div>

              <div className="desc">
                <p>{article.title}</p>

                <div className="desc-items">
                  <div className="desc-left">
                    <img src={article.userImg} alt={article.title} />
                    <p>{article.name}</p>
                  </div>

                  <div className="desc-right">
                    <IconContext.Provider value={{ className: "heart" }}>
                      <BsHeart />
                    </IconContext.Provider>
                    {articleLikes(article)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-articles" onClick={moreArticle}>
          <IconContext.Provider value={{ className: "arrow-down" }}>
            <IoIosArrowDown />
          </IconContext.Provider>
          {moreOrLess()}
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

        {!articleVideo.playVideo &&
          article.map((a) => (
            <div
              className="helsinki"
              style={{ display: title !== "articles" && "none" }}
              key={a.id}
            >
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

                <div className="more">
                  <p>View more details</p>

                  <p>share this video</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="article-right">
        <div className="article-right-top">
          <div className="slide">
            <img src={slideShow.img} alt="mask" />
            <p>{slideShow.description}</p>
          </div>

          <div className="slide-dots">
            <div onClick={handleSlide}></div>
            <div></div>
            <div></div>
          </div>
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

        <div className="article-right-bottom"></div>
      </div>
    </section>
  );
}

export default Article;
