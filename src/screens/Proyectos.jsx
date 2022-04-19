import React, { useEffect } from "react";

import { proyectos } from "../data/portfolioData";
import { useParams } from "react-router-dom";

function Proyectos() {
  const { idProyectos } = useParams();
  const proyecto = proyectos.find((pro) => pro.servicio === idProyectos);

  console.log(idProyectos);

  useEffect(() => {
    console.log(proyecto);
  }, [proyecto]);

  return <section>{proyecto && <h3>{proyecto.servicio}</h3>}</section>;
}

export default Proyectos;
