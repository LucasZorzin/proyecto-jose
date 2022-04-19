import "./Portfolio.scss";

import BtnCustom from "../BtnCustom/BtnCustom";
import Card from "../Card/Card";
import React from "react";
import { servicios } from "../../data/portfolioData";

function Portfolio() {
  function btnSize() {
    const innerWidth = window.innerWidth;

    if (innerWidth >= 415) {
      return 36;
    } else {
      return 18;
    }
  }

  return (
    <section className="container-fluid portfolio__container">
      <h3 className="text-center pb-2 pb-lg-5 mb-4 portfolio__text">
        Portfolio
      </h3>

      <section className="cards__container">
        {servicios.map((cat) => (
          <Card key={cat.id} {...cat} />
        ))}
      </section>

      <section className="ayuda__container d-flex flex-column align-items-center">
        <p>¿Necesitas ayuda con tus textos?</p>

        <div className="img__container d-flex justify-content-center align-items-center mb-5">
          <BtnCustom text={"Escríbeme"} fontSize={btnSize()} />
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
