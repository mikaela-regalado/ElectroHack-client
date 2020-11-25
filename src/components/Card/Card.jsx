import React from "react";
import { Link } from "react-router-dom";
import carritoActions from "../../redux/Actions/carritoActions";
import { useDispatch } from "react-redux";
import "./Card.css";
import Button from "@material-ui/core/Button";
import { makeStylesConfig } from "../../utils/makeStyles";

const useStyles = makeStylesConfig;

export default function Card({ producto }) {
  const dispatch = useDispatch();
  let cantidad = 0;
  const classes = useStyles();

  function handleAddItem(event, item) {
    event.preventDefault();
    dispatch(carritoActions.addItem(item));
  }

  return (
    <div className="col mb-4 mt-4">
      <div className="card contenedor text-center">
        <Link to={`/producto/${producto.slug}`} className="link-producto">
          <img
            className="img img-fluid"
            src={process.env.REACT_APP_URL_S3 + producto.image}
            alt="product"
          />

          <div className="card-body ">
            <div className="descripcion-container">
              <div className="title-product">{producto.name}</div>
              <hr />

              <h4 id="numberCard"> $ {producto.price}</h4>
              <div>
                {producto.stock > 0 ? (
                  <small> Stock disponible</small>
                ) : (
                  <small>No hay Stock</small>
                )}
              </div>
            </div>
          </div>
        </Link>
        <div className=" row card-footer d-flex justify-content-center ">
          <div className={`${classes.root1}`}>
            <div className="buttonCart">
              <Button
                variant="outlined"
                color="primary"
                onClick={(e) => handleAddItem(e, producto)}
                className="p-3 buttonCart"
              >
                <i className="fas fa-shopping-cart fa-2x login-register-cart pr-2 "></i>
                <span className="agregarSpan">AGREGAR AL CARRITO</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
