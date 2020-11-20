import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Pedidos.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import carritoActions from "../../redux/Actions/carritoActions";
import Footer from "../Footer/Footer";
import HistorialPedidos from "../HistoralPedidos/HistorialPedidos";
import axiosCall from "../../utils/axiosCall";

export default function Pedidos() {
  const history = useHistory();
  const items = useSelector((state) => state.carrito.items);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function handleComprar() {
    const list_products = items.map((item) => ({
      _id: item._id,
      cantidad: item.cantidad,
    }));

    const order = {
      buyer: user.userId,
      list_products: list_products,
      totalPrice: totalPrice,
    };

    axiosCall("/orders", "post", user.token, null, order).then((res) => {
      if (res.status !== 200) {
        history.push("/login");
      } else {
        console.log("PASO POR ACA");
        dispatch(carritoActions.emptyCart());
        history.push(`pedidos/${res.data._id}`);
      }
    });
  }

  const totalPrice = () => {
    return Math.round(
      items
        .map((item) => item.price * item.cantidad)
        .reduce(
          (sumaDetodos, itemMultiplicado) => sumaDetodos + itemMultiplicado,
          0
        )
    );
  };
  return (
    <>
    <div className="page-container">
    <div className="content-wrap">
      <NavBar />
      
      <main className="main-pedido">
        <div className="container">
          <div className="row fila ">
            <div className="col-md-9 pedido-list">
              <h1>Carrito</h1>
              <table className="table text-center table-striped">
                <thead>
                  <tr>
                    <th scope="col-4">Articulos ({items.length})</th>
                    <th scope="col-3">Precio</th>
                    <th scope="col-3">Cantidad</th>
                    <th scope="col-2">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={item._id}>
                      <th scope="row">
                        <div className="item-cart">
                          <img
                            src={process.env.REACT_APP_URL_S3 + item.image}
                            alt="imagen"
                            className="item-img"
                          />
                        </div>
                      </th>
                      <td>$ {item.price * item.cantidad}</td>
                      <td>{item.cantidad}</td>
                      <td>
                        {" "}
                        <i
                          className=" mt-2 fas fa-trash-alt"
                          onClick={() => {
                            dispatch(carritoActions.removeItem(item));
                          }}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Resumen</h2>
                  <p>Subtotal (X productos)</p>
                  <h3> ${totalPrice()} </h3>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button type="button" onClick={handleComprar}>
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          {user.userId && <HistorialPedidos />}
        </div>
      </main>
      </div>
      <Footer />
      </div>
    </>
  );
}
