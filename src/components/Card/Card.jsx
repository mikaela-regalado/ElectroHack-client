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
      <div className="card contenedor">
        <Link to={`/producto/${producto.slug}`} className="link-producto">
          <img src={producto.image} alt="product" />
        </Link>
        <div className="card-body ">
          <div className="descripcion-container">
            <Link to={`/producto/${producto.slug}`} className="link-producto">
              <h5 className="card-title">{producto.name}</h5>
            </Link>
            <div>
              <label>
                <small>Descripcion : </small>
              </label>
              <p className="descripcion-producto">{producto.description}</p>
              <p>...</p>
            </div>

            <h3>
              <small>Costo:</small> $ {producto.price}
            </h3>

            <small>Stock actual: {producto.stock}</small>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center producto-footer">
          <button
            type="button"
            onClick={(e) => handleAddItem(e, producto, cantidad)}
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
}
