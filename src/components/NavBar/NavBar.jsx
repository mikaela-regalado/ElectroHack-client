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
        <a href="/">Imagen y Sonido</a>
        <a href="/">Climatización</a>
        <a href="/">Limpieza</a>
        <a href="/">Cocina</a>
        <a href="/">Otros</a>
      </div>
      <div>
        <a href="/">Ingresar</a>
        <a href="/">Carrito</a>
      </div>
    </nav>
  );
}
