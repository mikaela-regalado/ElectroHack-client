import React from "react";
import NavBar from "../NavBar/NavBar";
import producto from "../../img/producto1.jpg";
import Footer from "../Footer/Footer";
import "./Producto.css";

export default function Producto() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="container">
          <div className="row p-3">
            <div className="col-lg-9">
              <div class="card mb-3 producto">
                <img src={producto} class="card-img-top img" alt="..." />
                <div class="card-body descripcion">
                  <h2 class="card-title ">Características</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="comprar-header">
                <h5>PANAVOX</h5>
                <h4>TV & monitor LED SMART</h4>
                <div className="stock">
                  <small>Stock disponible</small>
                </div>
              </div>
              <div className="comprar-body">
                <h2>
                  $7550 <small>Contado</small>
                </h2>
              </div>
              <div class="comprar-footer">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
