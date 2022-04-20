import "./Footer.scss";

import React from "react";
import behance from "../../assets/svg/behance.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import mail from "../../assets/svg/mail.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";

function Footer() {
  return (
    <footer className="container-fluid">
      <section className="main__section--footer d-flex ">
        <p className="name__text">José Villagra</p>

        <div>
          <img src={whatsapp} alt="whatsapp icon" className="me-3" />
          <img src={mail} alt="mail icon" className="me-3" />
          <a
            href="https://www.linkedin.com/in/joseredactordigital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin icon" className="me-3" />
          </a>
          <a
            href="https://www.behance.net/joseredactor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} alt="behance icon" />
          </a>
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
