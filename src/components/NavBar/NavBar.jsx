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
      <div>Links del medio</div>
      <div>
        <a href="/">Ingresar</a>
        <a href="/">Carrito</a>
      </div>
    </nav>
  );
}
