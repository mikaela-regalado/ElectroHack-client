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
    <>
      <header>
        <NavBar />
      </header>
      <div id="id"> Texto</div>
      <main className="main pt-2">
        <div className="container ">
          <h1 className="p-3">{producto.name}</h1>
          {producto.image && (
            <div className="row p-3">
              <div className="col-lg-9" id="left">
                <div className="card mb-3 producto">
                  <img
                    src={process.env.REACT_APP_URL_S3 + producto.image}
                    className="card-img-top img"
                    alt="..."
                  />
                  <div className="card-body descripcion">
                    <h2 className="card-title ">Características</h2>
                    <p>{producto.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 " id="right">
                <div className="comprar">
                  <div className="comprar-header">
                    {/* <h5>PANAVOX</h5> */}
                    <h3>{producto.name}</h3>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
