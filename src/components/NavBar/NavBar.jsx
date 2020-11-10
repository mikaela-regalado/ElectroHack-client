import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav class="row">
      <div>
        <a href="/" class="brand">
          <small>Electro Hack 🖥</small>
        </a>
      </div>
      <div>
        <a href="/categorias/imagen&sonido">Imagen y Sonido</a>
        <a href="/categorias/climatizacion">Climatización</a>
        <a href="/categorias/limpieza">Limpieza</a>
        <a href="/categoria/cocina">Cocina</a>
        <a href="/categoria/otros">Otros</a>
      </div>
      <div>
        <a href="/">Ingresar</a>
        <a href="/">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </nav>
  );
}
