import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6 my-3">
            <h4>Hack Academy</h4>
            <small>
              Dir: Blvr. Artigas 1182 esq. Canelones - Montevideo, Uruguay.
            </small>
            <br />

            <small>Lun. a Vie. 9:00 - 19:00hs </small>
          </div>
          <div className="col-md-6 my-3">
            <h4>Sobre este Proyecto</h4>
            <Link to="/about" className="about">
              <small>Quienes somos - About Us</small>
            </Link>

            <br />
            <small>Contacto</small>
          </div>
        </div>
        <hr></hr>
        <div className="my-5 d-flex justify-content-center">
          <small>Electro Hack© Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
}
