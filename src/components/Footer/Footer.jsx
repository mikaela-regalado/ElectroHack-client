import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer classNameName="footer">
      <div classNameName="container pt-5">
        <div classNameName="row">
          <div classNameName="col-md-3">
            <h4>Casa central</h4>
            <small>
              Dir: Blvr. Artigas 1182 esq. Canelones - Montevideo, Uruguay.
            </small>
            <br />

            <small>Lun. a Vie. 9:00 - 19:00hs Sab. 9:00 - 13:00hs</small>
          </div>
          <div classNameName="col-md-3">
            <h4>Nuestra empresa</h4>
            <small>Quienes somos</small>
            <br />

            <small>Contacto</small>
          </div>
          <div classNameName="col-md-3">
            <h4>Servicio al cliente</h4>
          </div>
          <div classNameName="col-md-3">
            <h4>Tel.: "Algún Número"</h4>
          </div>
        </div>
        <div classNameName="d-flex justify-content-center">
          <small>Electro Hack© Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
}
