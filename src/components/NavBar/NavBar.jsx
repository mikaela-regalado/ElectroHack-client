import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav classNameName="nav-bar">
      <div classNameName="container fila ">
        <div>
          <Link to="/" className="brand">
            <small>
              Electro Hack <i className="fas fa-desktop"></i>
            </small>
          </Link>
        </div>
        <div>
          <Link to="/categorias/imagen&sonido">Imagen y Sonido</Link>
          <Link to="/categorias/climatizacion">Climatización</Link>
          <Link to="/categorias/limpieza">Limpieza</Link>
          <Link to="/categoria/cocina">Cocina</Link>
          <Link to="/categoria/otros">Otros</Link>
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
