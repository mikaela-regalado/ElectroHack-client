import React, {useEffect, useState} from "react";
import "./Catalogo.css";
import axiosCall from "../../utils/axiosCall";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Lista from "../Lista/Lista"
import { useParams } from "react-router-dom";
const qs = require('qs');

export default function Catalogo() {
  const [productos, setProductos] = useState([])
  const params = useParams();
  const query = qs.parse(`category.code=${params.code}`)

  useEffect(() => {   
    axiosCall("/products", "get", null, query)
    .then((res) => setProductos(res.data))  
  }, [params])

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
