import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Pedidos.css";
import { useSelector, useDispatch } from "react-redux";
import carritoActions from "../../redux/Actions/carritoActions";
import Footer from "../Footer/Footer";
import HistorialPedidos from "../HistoralPedidos/HistorialPedidos"
import axiosCall from "../../utils/axiosCall"

export default function Pedidos() {
  const items = useSelector((state) => state.carrito.items);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function handleComprar() {
    const list_products = items.map(item =>  ({_id:item._id, cantidad:item.cantidad}))
    const order={
      buyer: user.userId,
      list_products: list_products,
      totalPrice: totalPrice
    }
    axiosCall("/orders", "post", user.token, null, order)
    .then((res) => console.log(res.data))
  }

/*   const totalPrice = items.reduce( (total, item) => total += item.price * item.cantidad, 0) */

  /* function handleRemoveItem(e, item) {
    e.preventDefault();
    dispatch(carritoActions.removeItem(item));
  } */
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
  console.log(totalPrice());
  return (
    <>
      <NavBar />
      <main className="">
        <div className="container">
          <h1>Carrito</h1>
          <div className="row fila ">
            <div className="col-md-9 ">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col-8">Articulos ({items.length})</th>
                    <th scope="col-2">Precio</th>
                    <th scope="col-2">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <div className="item-cart">
                          <img
                            src={item.image}
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
                          class=" mt-2 fas fa-trash-alt"
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
                  <p>Subtotal (X productios)</p>
                  <h3> ${totalPrice()} </h3>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button type="button" onClick={handleComprar}>COMPRAR</button>
                </div>
              </div>
            </div>
          </div>
          <HistorialPedidos />
        </div>
      </main>
      <Footer />
    </>
  );
}
