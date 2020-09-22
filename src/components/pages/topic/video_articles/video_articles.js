import React, { useState } from "react";
import other1 from "../images/other-1.png";
import playButton from "../images/playButton.png";
import "./video_articles.css";

function Article() {
  const [input, setInput] = useState("");
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../images/helsinki.jpg"),
      userImg: require("../images/user.png"),
    },
    {
      id: 2,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../images/helsinki.jpg"),
      userImg: require("../images/user.png"),
    },
    {
      id: 3,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../images/helsinki.jpg"),
      userImg: require("../images/user.png"),
    },
    {
      id: 4,
      title: "Helsinki design district",
      name: "sofia",
      likes: 0,
      imgPath: require("../images/helsinki.jpg"),
      userImg: require("../images/user.png"),
    },
  ]);

  const articleLikes = ({ likes }) => {
    if (likes < 1) return "";
    if (likes > 999)
      return likes % 1000 === 0
        ? `${likes / 1000}k`
        : `${(likes / 1000).toFixed(1)}k`;

    return likes;
  };

  const handleChange = () => {};
  return (
    <section className="article">
      <div className="article-left">
        <div className="btn-group">
          <button className="btn btn-vid">Video</button>
          <button className="btn btn-art">Article</button>
        </div>

        <div className="search">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Search videos here"
            id="search_input"
          />
        </div>

        <div className="article-card-container">
          {articles.map((article) => (
            <div className="article-card">
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

        <div className="helsinki">
          <div className="helsinki-left">
            <img src={other1} alt="helsinki" id="helsinki" />

            <div className="helsinki-desc">
              <img src={playButton} alt="playButton" id="play" />
              <p>Accomodation in Helsinki</p>
            </div>
          </div>
          <div className="helsinki-right">
            <div className="center">
              <header>
                <p>Helsinki design district</p>
              </header>

              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </article>

              <div className="more">
                <p>View more details</p>

                <p>share this video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-right"></div>
    </section>
  );
}

export default Article;
