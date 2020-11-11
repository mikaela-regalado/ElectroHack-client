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
          <Link to="/catalogo/imagen&sonido/0">Imagen y Sonido</Link>
          <Link to="/catalogo/climatizacion/1">Climatización</Link>
          <Link to="/catalogo/limpieza/2">Limpieza</Link>
          <Link to="/catalogo/cocina/3">Cocina</Link>
          <Link to="/catalogo/otros/4">Otros</Link>
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
