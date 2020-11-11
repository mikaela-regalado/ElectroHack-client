import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="container fila ">
        <div>
          <Link to="/" className="brand">
            <small>
              Electro Hack <i className="fas fa-desktop"></i>
            </small>
          </Link>
        </div>
        <div>
          <Link to="/catalogo/imagen&sonido">Imagen y Sonido</Link>
          <Link to="/catalogo/climatizacion">Climatización</Link>
          <Link to="/catalogo/limpieza">Limpieza</Link>
          <Link to="/caalogo/cocina">Cocina</Link>
          <Link to="/caalogo/otros">Otros</Link>
        </div>
        <div>
          <Link to="/">
            <i className="fas fa-user-circle"></i> Ingresar
          </Link>
          <Link to="/">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
