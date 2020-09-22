import React from "react";
import globe from "../pages/topic/images/globe.png";
import logo from "../pages/topic/images/globuzzer_logo.png";
import f_i from "../pages/topic/images/facebook_icon.png";
import twitter from "../pages/topic/images/twitter.png";
import pinterest from "../pages/topic/images/pinterest.png";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="own-section">
        <div className="own-left">
          <img src={globe} alt="globe" />
        </div>
        <div className="own-right">
          <p>Want to have your own</p>
          <p>secton?</p>

          <button>Start now</button>
        </div>
      </div>

      <footer className="footer">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <nav className="footer-menu">
          <ul>
            <li>Skyttevägen 29, Saltsjöbaden, Sweden</li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>
            <li style={{ paddingTop: "50px" }}>
              2019 Globuzzer All rights reserved
            </li>
          </ul>

          <ul>
            <li>Destinations</li>
            <li>Videos</li>
            <li>Articles</li>
            <li>Services</li>

            <li style={{ paddingTop: "10px" }}>Log in/Sign up</li>
          </ul>

          <ul>
            <li>About Globuzzer</li>
            <li>Contact us</li>
            <li>For companies</li>
          </ul>

          <ul>
            <li>FOLLOW US</li>
            <div>
              <span>
                <img src={f_i} alt="facebook" />
              </span>
              <span>
                <img src={twitter} alt="facebook" />
              </span>
              <span>
                <img src={pinterest} alt="facebook" />
              </span>
            </div>

            <div>
              <span>
                <img src={f_i} alt="facebook" />
              </span>
              <span>
                <img src={f_i} alt="facebook" />
              </span>
              <span>
                <img src={f_i} alt="facebook" />
              </span>
            </div>
          </ul>
        </nav>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
