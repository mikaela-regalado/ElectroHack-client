import React from "react";
import {Link} from "react-router-dom";
import carritoActions from "../../../redux/Actions/carritoActions"
import {useDispatch} from "react-redux"

export default function Card ({producto}) {
    const dispatch = useDispatch();


    function handleAddItem(event, item) {
        event.preventDefault();
        dispatch(carritoActions.addItem(item));
    }

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
                <button type="button" onClick={e => handleAddItem(e, producto.slug)}>AGREGAR AL CARRITO</button>
              </div>
            </div>
        </div>
    )
}