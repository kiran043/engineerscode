import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
           <h3 style={{ color: "orange" }}>EC</h3>
          </Link>
        </div> 
        <div className="d-none d-md-block d-sm-none">
          <Link to="/" className="navbar-brand">
            {" "}
            HOME
          </Link>
        </div>
        <div className="d-none d-md-block d-sm-none">
          <Link to="/about" className="navbar-brand"> 
            {" "}
            ABOUT
          </Link>
        </div>
        <div className="d-none d-md-block d-sm-none"> 
          <Link to="/contact" className="navbar-brand">
            {" "}
            CONNECT
          </Link>
        </div>
      </nav>
    </div>
  );
}
