import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import ListaProductos from "../ListaProductos/ListaProductos";
import Footer from "../Footer/Footer";
import axiosCall from "../../utils/axiosCall";
import "./Inicio.css";

export default function Inicio() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axiosCall("/products", "get", null, { outstanding: true }).then((res) =>
      setProductos(res.data)
    );
  }, []);

  return (
    <>
      <div className="page-container">
        <header>
          <NavBar />
        </header>
        <div className="content-wrap">
          <main>
            <Banner />
            <div className="container">
            <h2 id="destacadoHome">Destacado</h2>
            <ListaProductos productos={productos} />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
