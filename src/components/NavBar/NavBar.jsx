import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar seccion">
      <div className="contenedor fila ">
        <div>
          <a href="/" class="brand">
            <small>Electro Hack 🖥</small>
          </a>
        </div>
        <div>
          <Link to="/categorias/imagen&sonido">Imagen y Sonido</Link>
          <Link to="/categorias/climatizacion">Climatización</Link>
          <Link to="/categorias/limpieza">Limpieza</Link>
          <Link to="/categoria/cocina">Cocina</Link>
          <Link to="/categoria/otros">Otros</Link>
        </div>
        <div>
          <a href="/">
            <i class="fas fa-user-circle"></i> Ingresar
          </a>
          <a href="/">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
