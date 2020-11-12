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
        <img src={producto.image} alt="product" />
        <div className="card-body d-flex justify-content-center">
          <div>
            <h5 className="card-title">{producto.name}</h5>
            <Link to={`/producto/${producto.slug}`} className="link-producto">
              {producto.description}
            </Link>

            <h4>{producto.price}</h4>

            <small>{producto.stock}</small>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center">
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
