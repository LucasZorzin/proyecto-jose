import "./Card.scss";

import React, { useState } from "react";

import BtnCustom from "../BtnCustom/BtnCustom";
import { useNavigate } from "react-router-dom";

function Card({ img, nombre, descripcion }) {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setClick(!click);
  }

  function addClass() {
    return click ? "class__active" : "";
  }

  return (
    <article
      className={`proyecto__card ih-item square effect13 left_to_right img ${addClass()}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {!click && <p className="nombre_text m-0">{nombre}</p>}

      {window.innerWidth < 835 && !click && (
        <div className="d-flex justify-content-end">
          <BtnCustom text={"Saber +"} onClick={handleClick} />
        </div>
      )}

      {/* hover */}
      <div className="info d-flex flex-column justify-content-between">
        <h3 className="m-0">{nombre}</h3>
        <p>{descripcion}</p>

        <div className="d-flex justify-content-end">
          <BtnCustom
            text={"+ info"}
            onClick={() => navigate(`/proyectos/${nombre}`)}
          />
        </div>
      </div>
    </article>
  );
}

export default Card;
