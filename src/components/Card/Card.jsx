import "./Card.scss";

import BtnCustom from "../BtnCustom/BtnCustom";
import React from "react";

function Card({ img, nombre, descripcion }) {
  return (
    <article
      className="proyecto__card ih-item square effect13 left_to_right img"
      style={{ backgroundImage: `url(${img})` }}
    >
      <a href="">
        <p className="nombre_text m-0">{nombre}</p>

        {window.innerWidth < 835 && (
          <div className="d-flex justify-content-end">
            <BtnCustom text={"+ info"} />
          </div>
        )}

        {/* effect */}

        <div class="info">
          <h3>Heading here</h3>
          <p>Description goes here</p>
        </div>
      </a>
    </article>
  );
}

export default Card;
