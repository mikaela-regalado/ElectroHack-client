import React from "react";
import { Link } from "react-router-dom";
import Lista from "../Lista/Lista";
import NavBar from "../NavBar/NavBar";
import "./Catalogo.css";

export default function Catalogo() {
  return (
    <>
      <header classNameName="background">
        <NavBar classNameName="container" />
      </header>
      <main classNameName="container">
        <div>
          <h1 classNameName="title">Catálogo</h1>
        </div>
        <div classNameName="ref">
          <Link classNameName="link">
            <button>
              <small>Todos</small>
            </button>
          </Link>
          <Link classNameName="link">
            <button>
              <small>Todos</small>
            </button>
          </Link>
          <Link classNameName="link">
            <button>
              <small>Todos</small>
            </button>
          </Link>
          <Link classNameName="link">
            <button>
              <small>Todos</small>
            </button>
          </Link>
          <Link classNameName="link">
            <button>
              <small>Todos</small>
            </button>
          </Link>
        </div>
        <section>
          <Lista />
        </section>
      </main>
    </>
  );
}
