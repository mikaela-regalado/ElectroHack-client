import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Lista from "../Lista/Lista";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Lista />
      </main>
      <footer className="footer">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3">
              <h4>Casa central</h4>
              <small>
                Dir: Blvr. Artigas 1182 esq. Canelones - Montevideo, Uruguay.
              </small>
              <br />

              <small>Lun. a Vie. 9:00 - 19:00hs Sab. 9:00 - 13:00hs</small>
            </div>
            <div className="col-md-3">
              <h4>Nuestra empresa</h4>
              <small>Quienes somos</small>
              <br />

              <small>Contacto</small>
            </div>
            <div className="col-md-3">
              <h4>Servicio al cliente</h4>
            </div>
            <div className="col-md-3">
              <h4>Tel.: "Algún Número"</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <small>Electro Hack© Todos los derechos reservados</small>
          </div>
        </div>
      </footer>
    </>
  );
}
