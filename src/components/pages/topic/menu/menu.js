import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiMap, BiMessageX, BiDollarCircle } from "react-icons/bi";
import { TiShoppingBag } from "react-icons/ti";
import { VscThreeBars } from "react-icons/vsc";
import { RiArrowDropDownFill } from "react-icons/ri";
import icon_img from "../images/Vector.png";
import logo from "../images/globuzzer_logo.png";
import "./menu.css";

function Menu() {
  const [scroll, setScroll] = useState(false);
  const [displaySidebar, setSidebar] = useState(false);
  const [weather, setWeather] = useState({});

  const handleScroll = () => {
    if (window.pageYOffset > 30) return setScroll(true);
    setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    document.body.addEventListener("click", () => setSidebar(false));

    currentTemp();
  }, []);

  const currentTemp = () => {
    try {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const lat = coords.latitude,
          long = coords.longitude;
        const url = `http://api.weatherstack.com/current?access_key=0ac37fc2bca524fc33aac3bbf897fdfa&query=${lat},${long}`;
        const { data } = await Axios(url);

        const temp = data.current.temperature + "°C";
        const icon = data.current.weather_icons[0];
        setWeather({ temp, icon });
      });
    } catch (error) {
      setWeather("");
    }
  };

  const navStyle = () => {
    if (scroll) {
      return {
        position: "fixed",
        border: "none",
        background: "rgba(0, 0, 0, 0.7)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        width: "100%",
      };
    }
  };

  return (
    <React.Fragment>
      <nav className="top-menu" style={navStyle()}>
        <header className="m-header">
          <img src={logo} alt="logo" />
        </header>

        <ul className="m-center">
          <li className="m-list dest">
            Destinations
            <IconContext.Provider value={{ className: "dropdown" }}>
              <RiArrowDropDownFill />
            </IconContext.Provider>
            <nav className="destination d">
              <ul>
                <p className="recently">Recently:</p>
                <li>Rome</li>
                <li>Stockholm</li>
              </ul>

              <ul>
                <p>All destinations:</p>
              </ul>

              <ul>
                <li>Helsinki</li>
                <li>Rome</li>
                <li>Stockholm</li>
                <li>London</li>
              </ul>

              <ul>
                <li>Oslo</li>
                <li>Amsterdam</li>
                <li>Copenhagen</li>
                <li>San Francisco</li>
              </ul>

              <ul>
                <li>Norway</li>
                <li>Tampere</li>
                <li>Budapest</li>
                <li>Los Angeles</li>
              </ul>

              <ul>
                <li>Jakarta</li>
                <li>Salatiga</li>
                <li>Kiev</li>
                <li>Berlin</li>
              </ul>
            </nav>
          </li>

          <li className="m-list service">
            Services
            <IconContext.Provider value={{ className: "dropdown" }}>
              <RiArrowDropDownFill />
            </IconContext.Provider>
            <nav className="destination s">
              <ul>
                <div>
                  <IconContext.Provider value={{ className: "bs-search" }}>
                    <BsSearch />
                  </IconContext.Provider>
                  <input
                    type="text"
                    placeholder="Search for services here..."
                  />
                </div>

                <p className="recently">Recently:</p>
                <li>Flight</li>
                <li>Hotel</li>
              </ul>

              <ul>
                <p>All services:</p>
              </ul>

              <ul>
                <li>Event</li>
                <li>Restaurant</li>
              </ul>

              <ul>
                <li>Transportation</li>
                <li>Job</li>
                <li>Flight</li>
              </ul>
            </nav>
          </li>

          <li className="m-list topic">
            Topics
            <IconContext.Provider value={{ className: "dropdown" }}>
              <RiArrowDropDownFill />
            </IconContext.Provider>
            <nav className="destination t">
              <ul>
                <p className="recently">Recently:</p>
                <li>Rome</li>
                <li>Stockholm</li>
              </ul>

              <ul>
                <p>All topics:</p>
              </ul>

              <ul>
                <li>Decisive facts</li>
                <li>Documentation</li>
                <li>Accomodation</li>
                <li>Transportation</li>
              </ul>

              <ul>
                <li>Career guide</li>
                <li>To-do list</li>
                <li>Health</li>
                <li>Internet</li>
              </ul>

              <ul>
                <li>Banking</li>
                <li>Education</li>
                <li>Shopping</li>
                <li>Food</li>
              </ul>

              <ul>
                <li>Culture</li>
                <li>Events</li>
                <li>Attactions</li>
                <li>Entertainment</li>
              </ul>

              <ul>
                <li>Social life</li>
                <li>Sports</li>
                <li>Tourism</li>
              </ul>
            </nav>
          </li>

          <li className="m-list">Pricing</li>
          <li className="m-list menuOwn">Own your own city section</li>
        </ul>

        <ul className="m-right">
          <li>
            <img src={weather.icon || icon_img} alt="weather-icon" />
            {weather.temp}
          </li>
          <li>Log in</li>
          <li>
            <Link to="/cities" className="link">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="top-menu-small" style={navStyle()}>
        <ul className="menu-small">
          <li className="logo">
            <img src={logo} alt="logo" />
          </li>

          <li className="bars" onClick={() => setSidebar(true)}>
            <VscThreeBars />
          </li>
        </ul>
      </nav>

      <nav
        className="sidebar-small"
        style={{ transform: displaySidebar && "translateX(0)" }}
      >
        <ul className="sidebar-small-ul sidebar-top">
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <BiMap />
              </IconContext.Provider>
            </span>
            <span>Destination</span>
          </li>
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <FiSettings />
              </IconContext.Provider>
            </span>
            <span>Services</span>
          </li>
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <BiMessageX />
              </IconContext.Provider>
            </span>
            <span>Topics</span>
          </li>
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <BiDollarCircle />
              </IconContext.Provider>
            </span>
            <span>Pricing</span>
          </li>
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <TiShoppingBag />
              </IconContext.Provider>
            </span>
            <span>Career</span>
          </li>
          <li>
            <span>
              <IconContext.Provider value={{ className: "icon" }}>
                <AiOutlineQuestionCircle />
              </IconContext.Provider>
            </span>
            <span>About us</span>
          </li>
        </ul>

        <div className="line"></div>

        <ul className="sidebar-small-ul sidebar-bottom">
          <div className="sidebar-btn">
            <li>
              <button>Own your own city section</button>
            </li>
          </div>

          <div className="sidebar-auth">
            <li>Login</li>
            <li>Signup</li>
          </div>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Menu;
