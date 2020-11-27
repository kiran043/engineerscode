import React from "react";
import "./Tech.css";
import React_Ec from "../../Images/Tech/react.png";
import Js_Ec from "../../Images/Tech/js.png";
import Html_Ec from "../../Images/Tech/html-5.png";
import Css_Ec from "../../Images/Tech/css.png";
import Bootstrap_Ec from "../../Images/Tech/bootstrap.png";
import { Link } from "react-router-dom";

export default function Elearning() {
  return (
    <div>
      <div className=" bg-primary">
        <div class="container ourprocess text-center">
          <h3 className="process-style">LANGUAGE</h3>
          <hr className="hrnew" />
          <div className="row prorowsetting">
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <Link to="/react" style={{ textDecoration: "none" }}>
                  <img src={React_Ec} className="proimage" />
                  <h3 className="text-white link">REACT</h3>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={Js_Ec} className="proimage" />
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={Html_Ec} className="proimage" />
                <h3>HTML</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={Css_Ec} className="proimage" />
                <h3>CSS</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-10 d-block m-auto">
              <div class="proimgsetting d-block text-white">
                <img src={Bootstrap_Ec} className="proimage" />
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
