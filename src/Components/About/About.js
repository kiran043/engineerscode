import React from "react";
import "./About.css";
import frd from "../Images/frdss1.JPG";
export default function About() {
  return (
    <div className="bgcolors bg-primary">
      <div class="container ourservices text-center">
        <h1 className="services-style text-white">ABOUT</h1>
        <hr className="hrnew" />
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-10 col-12 d-block m-auto">
            <div class="imgsetting d-block text-white">
              <img
                src={frd}
                className="figure-img img-fluid "
                height="250px"
                width="250px"
              />
              <h4>Front-End-Developer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
