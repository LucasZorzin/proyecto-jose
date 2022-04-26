import "./Navbar.scss";

import { FaChevronDown } from "react-icons/fa";
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
          José Villagra
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
            <a className="nav-link pt-2" href="/#sobre-mi">
              Sobre mí
            </a>
            <a className="nav-link" href="/#copywriting">
              Copywriting
            </a>
            <div className="accordion" id="accordionExample nav-link">
              <div className="accordion-item d-flex flex-column align-items-center justify-content-center">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Portfolio
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <Link to={"/proyectos/Redacción web"} onClick={menu}>
                          Redacción web
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Personajes"} onClick={menu}>
                          Personajes
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Naming"} onClick={menu}>
                          Naming
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Redes sociales"} onClick={menu}>
                          Redes sociales
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Guión"} onClick={menu}>
                          Guión
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Blogging"} onClick={menu}>
                          Blogging
                        </Link>
                      </li>
                      <li>
                        <Link to={"/proyectos/Truchos"} onClick={menu}>
                          Truchos
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="nav-link m-0 link__portfolio">
              Portfolio <FaChevronDown size={20} className="chevron__icon" />
              <ul>
                <li>
                  <Link to={"/proyectos/Redacción web"} onClick={menu}>
                    Redacción web
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Personajes"} onClick={menu}>
                    Personajes
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Naming"} onClick={menu}>
                    Naming
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Redes sociales"} onClick={menu}>
                    Redes sociales
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Guión"} onClick={menu}>
                    Guión
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Blogging"} onClick={menu}>
                    Blogging
                  </Link>
                </li>
                <li>
                  <Link to={"/proyectos/Truchos"} onClick={menu}>
                    Truchos
                  </Link>
                </li>
              </ul>
            </p>
            <a className="nav-link" href="/#contacto">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
