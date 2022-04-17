import React from "react";
import "./Navbar.scss";

function Navbar() {
    function menu(){
        const menu = document.querySelector('.navbar-toggler-icon');
        menu.classList.toggle('newClass');
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid container-padding">
                <a class="navbar-brand" href="#">Jose Villagra</a>
                <button class="navbar-toggler" onClick={menu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Sobre mí</a>
                        <a class="nav-link" href="#">Copywriting</a>
                        <a class="nav-link" href="#">Portfolio</a>
                        <a class="nav-link" href="#">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;