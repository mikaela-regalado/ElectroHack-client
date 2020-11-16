import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Producto.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import carritoActions from "../../redux/Actions/carritoActions";
import axiosCall from "../../utils/axiosCall";

export default function Producto() {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState([]);
  const params = useParams();

  function handleAddItem(event, item) {
    event.preventDefault();
    dispatch(carritoActions.addItem(item));
  }

  useEffect(() => {
    axiosCall(`/products/${params.slug}`, "get").then((res) =>
      setProducto(res.data)
    );
  }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {producto.image && (
          <div className="container contenedor">
            <div className="row p-3">
              <div className="col-lg-9">
                <div className="card mb-3 producto">
                  <img
                    src={producto.image}
                    className="card-img-top img"
                    alt="..."
                  />
                  <div className="card-body descripcion">
                    <h2 className="card-title ">Características</h2>
                    <p>{producto.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="comprar-header">
                  {/* <h5>PANAVOX</h5> */}
                  <h4>{producto.name}</h4>
                  <div className="stock">
                    {producto.stock > 0 ? (
                      <small> {producto.stock} Stock disponible</small>
                    ) : (
                      <small>No hay Stock</small>
                    )}
                  </div>
                </div>
                <div className="comprar-body">
                  <h2>
                    ${producto.price} <small>Contado</small>
                  </h2>
                </div>
                <div className="comprar-footer">
                  <button
                    type="button"
                    onClick={(e) => handleAddItem(e, producto._id)}
                  >
                    AGREGAR AL CARRITO
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
