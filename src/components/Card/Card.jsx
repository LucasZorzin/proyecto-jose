import "./Card.scss";

import BtnCustom from "../BtnCustom/BtnCustom";
import React from "react";

function Card({ img, nombre, descripcion }) {
  return (
    <article
      className="proyecto__card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className="nombre_text m-0">{nombre}</p>

      <BtnCustom text={"+ info"} />
    </article>
  );
}

export default Card;
