import React from "react";
import { Link } from "react-router-dom";

export default function Card({ producto }) {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={producto.image} alt="product" />
        <div className="card-body d-flex justify-content-center">
          <div>
            <h5 className="card-title">{producto.name}</h5>
            <Link
              to={`/producto/${producto.slug}`}
              classNameName="link-producto"
            >
              {producto.description}
            </Link>

            <h4>{producto.price}</h4>

            <small>{producto.stock}</small>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button>AGREGAR AL CARRITO</button>
        </div>
      </div>
    </div>
  );
}
