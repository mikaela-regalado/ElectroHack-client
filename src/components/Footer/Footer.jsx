import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer footerLogin">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3">
            <h4>Casa central</h4>
            <small>
              Dir: Blvr. Artigas 1182 esq. Canelones - Montevideo, Uruguay.
            </small>
            <br />

            <small>Lun. a Vie. 9:00 - 19:00hs </small>
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
            <h4>Tel.: 097345678</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <small>Electro Hack© Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
}
