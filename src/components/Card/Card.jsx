import React from "react";
import { Link } from "react-router-dom";
import carritoActions from "../../redux/Actions/carritoActions";
import { useDispatch } from "react-redux";
import "./Card.css";

export default function Card({ producto }) {
  const dispatch = useDispatch();
  let cantidad = 0;

  function handleAddItem(event, item, cantidad) {
    event.preventDefault();
    dispatch(carritoActions.addItem(item, cantidad));
  }

  return (
    <div className="col mb-4">
      <div className="card contenedor text-center">
        <Link to={`/producto/${producto.slug}`} className="link-producto">
          {/* <img src={producto.image} alt="product" /> */}
          <img
            className="img img-fluid"
            src={process.env.REACT_APP_URL_S3 + producto.image}
            alt="product"
          />
        </Link>
        <div className="card-body ">
          <div className="descripcion-container">
            <div className="title-product">{producto.name}</div>

            {/* <div>
              <label>
                <small>Descripcion : </small>
              </label>
              <p className="descripcion-producto">{producto.description}</p>
              <p>...</p>
            </div> */}

            <h4>$ {producto.price}</h4>

            <small>Stock actual: {producto.stock}</small>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center producto-footer">
          <button
            type="button"
            onClick={(e) => handleAddItem(e, producto, cantidad)}
          >
            <i className="fas fa-shopping-cart  login-register-cart">
              AGREGAR AL CARRITO
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
