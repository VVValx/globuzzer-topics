import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mask from "../topic/images/mask.png";
import "./slideshow.css";

export default function Slideshow() {
  const [data] = React.useState([
    {
      id: 1,
      img: mask,
      description: "Goodle launches educational coronavirus website",
    },
    {
      id: 2,
      img: mask,
      description:
        "Looking for hotels? These are some of the best hotels in Helsinki",
    },

    {
      id: 3,
      img: mask,
      description: "Attractions in Helsinki",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slideshow">
      <Slider {...settings}>
        {data.map((d) => (
          <img src={d.img} alt="mask" />
        ))}
      </Slider>
    </div>
  );
}
