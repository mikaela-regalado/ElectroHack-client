import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="container fila ">
        <div>
          <Link to="/" class="brand">
            <small>
              Electro Hack <i class="fas fa-desktop"></i>
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
            <i class="fas fa-user-circle"></i> Ingresar
          </Link>
          <Link to="/">
            <i class="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
