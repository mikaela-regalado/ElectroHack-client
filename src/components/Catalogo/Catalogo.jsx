import React from "react";
import "./Catalogo.css";
import axiosCall from "../../utils/axiosCall";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Catalogo() {
  return (
    <div>
      <header className="background">
        <NavBar class="container" />
      </header>
      <main>
        <div className="container">
          <div className="titulo">
            <h1>Catálogo</h1>
          </div>
          <div className="links">
            <button className="link">Todos</button>
            <button className="link">Todos</button>
            <button className="link">Todos</button>
            <button className="link">Todos</button>
            <button className="link">Todos</button>
          </div>
          <div className="lista background">Aquí van los post</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
