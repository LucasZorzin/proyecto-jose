import React from "react";
import "./Home.scss";
import notebookVector from '../../assets/svg/notebook-vector.svg';
import notebook from '../../assets/svg/notebook.svg';
import vector from '../../assets/svg/vector.svg';


function Home() {
    return (
        <>
            <div className="home-header"><p>De los poetas aprendí que las palabras son poderosas, entonces decidí hacer de las letras mis mejores armas.</p></div>
            <div className="row sobre-mi">
                <div className="col-7 sobre-mi__text">
                    <h3>Algo sobre mí</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="col-5 sobre-mi__vector">
                    <img src={notebookVector} alt="vector" />
                    <img className="notebook" src={notebook} alt="notebook" />
                </div>
            </div>
            <img className="vector" src={vector} alt="vector" />
            <div className="row i-copywriting">
                <div className="col-4 i-copywriting__title">
                    <h3>La importancia del <br/><span>copywriting</span></h3>
                </div>
                <div className="col-8 i-copywriting__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    );
}

export default Home;