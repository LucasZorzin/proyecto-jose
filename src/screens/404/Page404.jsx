import "./Page404.scss";

import { Link } from "react-router-dom";
import React from "react";
import notebook from "../../assets/img/notebook-left.png";
import vectorRight from "../../assets/img/proyectos-right.png";

function Page404() {
  return (
    <main className="main__404">
      <section className="imgs__container d-flex justify-content-between align-items-start">
        <img src={notebook} alt="vector" />
        <img src={vectorRight} alt="vector" />
      </section>

      <section className="section__error">
        <h2>404</h2>
        <p>Error, página no encontrada</p>
        <p>
          Puedes volver a la <Link to={"/"}>página principal aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default Page404;
