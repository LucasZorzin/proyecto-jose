import "./ProyectosScreen.scss";

import Project from "../../components/Project/Project";
import React from "react";
import manchaRight from "../../assets/svg/proyectos-right.svg";
import notebook from "../../assets/svg/notebook-left.svg";
import { proyectos } from "../../data/portfolioData";
import { useParams } from "react-router-dom";

function ProyectosScreen() {
  const { idProyectos } = useParams();
  const proyecto = proyectos.find((pro) => pro.servicio === idProyectos);

  return (
    <main className="proyectos__main-section">
      <section className="proyectos__header-section d-flex justify-content-between">
        <img src={notebook} alt="notebook" />
        {proyecto && <h3>{proyecto.servicio}</h3>}
        <img src={manchaRight} alt="right" />
      </section>

      <section className="projects__container d-flex flex-wrap">
        {proyecto &&
          proyecto.proyectos.map((pro) => <Project key={pro.id} {...pro} />)}
      </section>
    </main>
  );
}

export default ProyectosScreen;
