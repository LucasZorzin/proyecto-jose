import "./Portfolio.scss";

import Card from "../Card/Card";
import React from "react";

function Portfolio() {
  return (
    <section className="container-fluid portfolio__container">
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default Portfolio;
