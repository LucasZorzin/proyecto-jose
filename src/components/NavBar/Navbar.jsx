import "./Navbar.scss";

import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  function menu() {
    const menu = document.querySelector(".navbar-toggler-icon");
    menu.classList.toggle("newClass");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid container-padding">
        <Link to={"/"} className="navbar-brand">
          Jose Villagra
        </Link>
        <button
          className="navbar-toggler"
          onClick={menu}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="line"></div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              Sobre mí
            </a>
            <a className="nav-link" href="#">
              Copywriting
            </a>
            <a className="nav-link" href="#">
              Portfolio
            </a>
            <a className="nav-link" href="#">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
