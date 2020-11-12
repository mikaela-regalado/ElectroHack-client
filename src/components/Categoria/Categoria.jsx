import React, { useEffect, useState } from "react";
import "./Categoria.css";
import axiosCall from "../../utils/axiosCall";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Lista from "../Lista/Lista";
import { useParams } from "react-router-dom";

export default function Catalogo() {
  const [categoria, setCategoria] = useState({});
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    axiosCall(`/categories/${params.slug}`, "get").then((res) => {
      setCategoria(res.data);
      setProductos(res.data.productList)
    }
    
    );
  }, [params.slug]);

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
          <div className="lista background">
            <Lista productos={productos} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
