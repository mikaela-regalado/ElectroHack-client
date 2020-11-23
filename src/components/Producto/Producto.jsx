import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Producto.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import carritoActions from "../../redux/Actions/carritoActions";
import axiosCall from "../../utils/axiosCall";
import Button from '@material-ui/core/Button';
import { makeStylesConfig } from "../../utils/makeStyles";

const useStyles = makeStylesConfig;

export default function Producto() {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState([]);
  const params = useParams();

  const classes = useStyles();

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
      <div className="page-container">
        <div className="content-wrap-2">
          <header>
            <NavBar />
          </header>
          <main className="main pt-2">
            <div className="container mt-5">
              {producto.image && (
                <div className="row all-producto p-3">
                  <div className="col-lg-6" id="left">
                    <div className="card mb-3 producto">
                      <img
                        src={process.env.REACT_APP_URL_S3 + producto.image}
                        className="card-img-top img"
                        alt="..."
                      />
                      
                    </div>
                  </div>
                  <div className="col-lg-6 " id="right">
                    <div className="comprar">
                      <div className="comprar-header">
                        {/* <h5>PANAVOX</h5> */}
                        <h3>{producto.name}</h3>
                        <div className="comprar-body">
                        <small className="small-producto">Precio:</small> $
                        {producto.price}
                      </div>
                        <div className="stock">
                          {producto.stock > 0 ? (
                            <small> Stock disponible</small>
                          ) : (
                            <small>No hay Stock</small>
                          )}
                        </div>
                      </div>
                      
                          <div className={classes.root1} buttonCart>
                      <div className="buttonCart">
                        {/* <button
                          type="button"
                          onClick={(e) => handleAddItem(e, producto._id)}
                        > */}
                          <Button variant="contained" color="primary" onClick={(e) => handleAddItem(e, producto)} className="py-3  text-center">
                          <i className="fas fa-shopping-cart  login-register-cart pr-2"></i>
                          AGREGAR AL CARRITO
                          </Button>
                          </div>
                        {/* </button> */}
                      </div>
                      
                    </div>
                    <br/>
                    <div className="card-body descripcion mt-5">
                    <div className="row mt-5">
                   <div className="col-4 "><b>Categoria: </b> </div>
                   <div className="col-8 "><p>{producto.category.type}</p> </div>
                   </div>               
                   <div className="row mt-5">
                   <div className="col-4 "><b>Características: </b></div>
                   <div className="col-8 "><p className="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis animi rem, eos ullam ad adipisci
                          voluptas molestiae aperiam dolorem itaque aliquam, et
                          eum, a ut! Doloribus veritatis inventore officia
                          rerum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Deleniti ratione saepe consequatur placeat
                          commodi cupiditate, deserunt voluptatibus eveniet est
                          reprehenderit doloremque ducimus illo, eligendi non
                          ea, architecto quod. Qui, unde.
                        </p>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
