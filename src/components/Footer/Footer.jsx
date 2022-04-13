import "./Footer.scss";

import React from "react";
import behance from "../../assets/svg/behance.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import mail from "../../assets/svg/mail.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

function Footer() {
  return (
    <footer className="container-fluid">
      <section className="d-flex justify-content-between align-items-center">
        <p className="name__text m-0">José Villagra</p>

        <div>
          <img src={whatsapp} alt="whatsapp icon" className="me-3" />
          <img src={mail} alt="mail icon" className="me-3" />
          <img src={linkedin} alt="linkedin icon" className="me-3" />
          <img src={behance} alt="behance icon" />
        </div>
      </section>
      <section>
        <p className="copyright__text mb-0 mt-3 text-center">
          © Copyright 2022 José Villagra
        </p>
      </section>
    </footer>
  );
}

export default Footer;
