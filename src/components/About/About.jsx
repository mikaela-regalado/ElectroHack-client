import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import andres from "../../img/andres-menchaca.jpg";
import mikaela from "../../img/mikaela-regalado.jpg";
import ignacio from "../../img/ignacio-abaide.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="page-container about">
        <header>
          <NavBar />
        </header>
        <div className="content-wrap">
          <main className="container text-center">
            <h1 className="pt-5 pb-5">Sobre Nosotros</h1>
            <div className="p-4">
              <h2>Sobre este proyecto</h2>
              <h2>Nuestro Equipo</h2>
              <div className="perfiles">
                <div className="card perfil">
                  <img
                    src={andres}
                    className="card-img-top"
                    alt="Andrés Menchaca"
                  />
                  <div className="card-body ">
                    <h4 className="card-title">Contacto</h4>

                    <a href="https://www.linkedin.com/in/christian-andr%C3%A9s-lopez-menchaca-9a2a54bb/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/valinor33">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="card perfil">
                  <img src={mikaela} className="img-fit" alt="Mikaela Regalado" />
                  <div className="card-body">
                    <h4 className="card-title">Contacto</h4>

                    <a href="https://www.linkedin.com/in/mikaela-regalado/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mikaela-regalado">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="card perfil">
                  <img
                    src={ignacio}
                    className="card-img-top"
                    alt="Ignacio Abadie"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Contacto</h4>

                    <a href="https://www.linkedin.com/in/ignacio-abadie/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/MateSeco">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
