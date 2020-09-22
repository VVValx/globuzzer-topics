import React, { useState } from "react";
import icon_img from "../images/Vector.png";
import logo from "../images/globuzzer_logo.png";
import "./menu.css";

function Menu() {
  const [destinations, setDest] = useState(false);
  const [services, setService] = useState(false);
  const [topics, setTopic] = useState(false);

  const onDest = () => {
    setDest(!destinations);
    setService(false);
    setTopic(false);
  };

  const onService = () => {
    setDest(false);
    setService(!services);
    setTopic(false);
  };

  const onTopic = () => {
    setDest(false);
    setService(false);
    setTopic(!topics);
  };

  const currentTemp = () => {
    return 18;
  };

  return (
    <React.Fragment>
      <nav className="top-menu">
        <header className="m-header">
          <img src={logo} alt="logo" />
        </header>
        <ul className="m-center">
          <li onClick={onDest}>
            Destinations <i className="material-icons">arrow_drop_down</i>
          </li>
          <li onClick={onService}>
            Services <i className="material-icons">arrow_drop_down</i>
          </li>
          <li onClick={onTopic}>
            Topics <i className="material-icons">arrow_drop_down</i>
          </li>
          <li>Pricing</li>
          <li>Own your own city section</li>
        </ul>
        <ul className="m-right">
          <li>
            <img src={icon_img} alt="weather-icon" /> {currentTemp() || " "}
          </li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </nav>

      <nav
        className="destination"
        style={{ display: destinations ? "flex" : "none" }}
      >
        <ul>
          <li>Recently:</li>
          <li>Rome</li>
          <li>Stockholm</li>
        </ul>

        <ul>
          <li>All destinations:</li>
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

      <nav
        className="destination"
        style={{ display: services ? "flex" : "none" }}
      >
        <ul>
          <li>Recently:</li>
          <li>Flight</li>
          <li>Hotel</li>
        </ul>

        <ul>
          <li>All services:</li>
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

      <nav
        className="destination"
        style={{ display: topics ? "flex" : "none", left: "100px" }}
      >
        <ul>
          <li>Recently:</li>
          <li>Rome</li>
          <li>Stockholm</li>
        </ul>

        <ul>
          <li>All topics:</li>
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
    </React.Fragment>
  );
}

export default Menu;
