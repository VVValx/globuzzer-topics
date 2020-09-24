import clarion from "../components/pages/topic/images/clarion.png";
import scandic from "../components/pages/topic/images/scandic.png";
import backPackers from "../components/pages/topic/images/backPackers.png";
import mask from "../components/pages/topic/images/mask.png";

export function articlesData() {
  return [
    {
      id: 1,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 2,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 3,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 4,
      title: "Testing search",
      name: "sofia",
      likes: 0,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 5,
      title: "Helsinki design district",
      name: "sofia",
      likes: 0,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 6,
      title: "Helsinki design district",
      name: "sofia",
      likes: 0,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 7,
      title: "Helsinki design district",
      name: "sofia",
      likes: 0,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 8,
      title: "Helsinki design district",
      name: "sofia",
      likes: 0,
      imgPath: require("../components/pages/topic/images/helsinki.jpg"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
  ];
}

export function videoData() {
  return [
    {
      id: 1,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 2,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 3,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
    {
      id: 4,
      title: "Testing search",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 5,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 6,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 7,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },

    {
      id: 8,
      title: "Helsinki design district",
      name: "sofia",
      likes: 15000,
      imgPath: require("../components/pages/topic/images/other-2.png"),
      userImg: require("../components/pages/topic/images/user.png"),
    },
  ];
}

export function list() {
  return [
    {
      id: 1,
      title: "Visa issue",
      imgPath: require("../components/pages/topic/images/other-1.png"),
    },

    {
      id: 2,
      title: "Atm",
      imgPath: require("../components/pages/topic/images/other-2.png"),
    },

    {
      id: 3,
      title: "Top hotels",
      imgPath: require("../components/pages/topic/images/other-1.png"),
    },

    {
      id: 4,
      title: "Security risk",
      imgPath: require("../components/pages/topic/images/other-2.png"),
    },
  ];
}

export const hotels = [
  {
    id: 1,
    title: "scandic hotel helsinki central station",
    distance: 0.3,
    price: 100,
    rating: 4,
    recommended: "highly recommended",
    img: scandic,
  },
  {
    id: 2,
    title: "scandic hotel helsinki central station",
    distance: 0.3,
    price: 100,
    rating: 4,
    recommended: "highly recommended",
    img: scandic,
  },
  {
    id: 3,
    title: "clarion hotel helsinki harbour",
    distance: 0.8,
    price: 80,
    rating: 4,
    recommended: "highly recommended",
    img: clarion,
  },
  {
    id: 4,
    title: "scandic hotel etelä-töölö",
    distance: 0.3,
    price: 60,
    rating: 3,
    recommended: "",
    img: scandic,
  },
  {
    id: 5,
    title: "backpackers hostel helsinki",
    distance: 0.2,
    price: 30,
    rating: 3,
    recommended: "highly recommended",
    img: backPackers,
  },
  {
    id: 6,
    title: "clarion hotel helsinki-vantaa",
    distance: 0.8,
    price: 70,
    rating: 3,
    recommended: "",
    img: clarion,
  },
];

export const slide = [
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
];
