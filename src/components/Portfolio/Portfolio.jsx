import "./Portfolio.scss";

import Card from "../Card/Card";
import React from "react";
import { categorias } from "../../data/portfolioData";

function Portfolio() {
  return (
    <section className="container-fluid portfolio__container">
      <h3 className="text-center">Portfolio</h3>

      <section className="cards__container">
        {categorias.map((cat) => (
          <Card key={cat.id} {...cat} />
        ))}
      </section>
    </section>
  );
}

export default Portfolio;
