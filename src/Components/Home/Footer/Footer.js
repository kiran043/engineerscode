import React from "react";
import "./Footer.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg bg-primary">
      <div className="footermargin">
        <hr className="footerline" />
        <div className="row">
          <div className="col-lg-3 footerstyle">
            <h6>Let's Talks</h6>
            <p>Feel Free to get in touch with us</p>
            <p> Bangalore, Karnataka</p>
            <p>engineerscode1729@gmail.com</p>
            <p>+917204864277</p>
          </div>
          <div className="col-lg-3 footerstyle">
            <h6>Quick Links</h6>
            {/* <p>Services</p> */}
            <Link to="/about" className="text-white">
              <p>About</p>
            </Link>
            <Link to="/contact" className="text-white">
              <p>Contact Us</p>
            </Link>
            <Link to="/game" className="text-white">
              <p>Game</p>
            </Link>
          </div>
          <div className="col-lg-3 footerstyle">
            <h6>Technologies</h6>
            <Link
              to="/react"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <p>React</p>
            </Link>
            <Link
              to="/react"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <p>Javascript</p>
            </Link>
            <Link
              to="/react"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <p>Html</p>
            </Link>
            <Link
              to="/react"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <p>Css</p>
            </Link>
            <Link
              to="/react"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <p>Bootstrap</p>
            </Link>
          </div>
          <div className="col-lg-3 footerstyle">
            <h6>FOLLOW US</h6>
            <div className="icons">
              <div>
                <p>
                  <a href="https://wa.me/917204864277" className="text-white iconstyle1">
                    <IoLogoWhatsapp />
                  </a>
                  /
                  <a href="https://www.instagram.com/engineerscode/" className="text-white iconstyle1">
                    <IoLogoInstagram />
                  </a>
                  /
                  <a
                    href="https://www.facebook.com/engineerscode1"
                    className="text-white iconstyle1"
                  >
                    <IoLogoFacebook />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="footerline" />
      <div class="row">
        <div class="col text-light text-center">
          <p>&copy;copyright 2020.~EngineersCode~</p>
        </div>
      </div>
    </div>
  );
}
