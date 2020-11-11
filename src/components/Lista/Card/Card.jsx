import React from "react";
import {Link} from "react-router-dom";

export default function Card ({producto}) {
    return(
        <div class="col mb-4">
            <div class="card">
              <img src={producto.image} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">{producto.name}</h5>
                  <Link to={`/producto/${producto.slug}`} className="link-producto">
                    {producto.description}
                  </Link>

                  <h4>{producto.price}</h4>

                    <small>{producto.stock}</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
        </div>
    )
}