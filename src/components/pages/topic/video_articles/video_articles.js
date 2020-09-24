import React, { useState } from "react";
import other1 from "../images/other-1.png";
import playButton from "../images/playButton.png";
import { sliceData } from "../../../../utils/sliceData";
import { articlesData, videoData, slide } from "../../../../utils/data";
import "./video_articles.css";

function Article() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(videoData());
  const [title, setTitle] = useState("videos");
  const [pageSize, setPageSize] = useState(4);
  const [index, setIndex] = useState(0);
  const [slideShow, setSlide] = useState(slide[index]);

  const slicedData = sliceData(data, 0, pageSize);

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
    let size = pageSize + 4;

    if (pageSize > data.length) size = data.length;
    setPageSize(size);
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
            <div className="article-card" key={article.id}>
              <img src={article.imgPath} alt={article.title} />

              <div className="desc">
                <p>{article.title}</p>

                <div className="desc-items">
                  <div className="desc-left">
                    <img src={article.userImg} alt={article.title} />
                    <p>{article.name}</p>
                  </div>

                  <div className="desc-right">{articleLikes(article)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-articles" onClick={moreArticle}>
          more {title}
        </div>

        <div
          className="helsinki"
          style={{ display: title !== "articles" && "none" }}
        >
          <div className="helsinki-left">
            <img src={other1} alt="helsinki" id="helsinki" />

            <div className="helsinki-desc">
              <img src={playButton} alt="playButton" id="play" />
              <p>Accomodation in Helsinki</p>
            </div>
          </div>
          <div className="helsinki-right">
            <header>
              <p>Helsinki design district</p>
            </header>

            <div className="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="more">
              <p>View more details</p>

              <p>share this video</p>
            </div>
          </div>
        </div>
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
