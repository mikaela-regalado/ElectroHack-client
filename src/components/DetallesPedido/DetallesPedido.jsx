import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./DetallesPedido.css";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import axiosCall from "../../utils/axiosCall";
import { useParams } from "react-router-dom";

export default function DetallesPedido() {

  const params = useParams();
  const [order, setOrder] = useState([]);
  const user = useSelector((state) => state.user);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axiosCall(`/orders/${params.id}`, "get", user.token).then((res) => {
      setOrder(res.data);
      setTotalPrice(
        res.data.list_products.reduce(
          (total, item) => (total += item._id.price * item.cantidad),
          0
        )
      );
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className="">
      {order.list_products && (<div className="container">
          <h1>Detalles del pedido</h1>
          <small>
            Fecha del pedido: {order.createdAt} | Pedido N°: {order._id}{" "}
          </small>
          <div className="row fila ">
            <div className="col-md-9 ">
              
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col-8">
                        Articulos ({order.list_products.length})
                      </th>
                      <th scope="col-2">Precio</th>
                      <th scope="col-2">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.list_products.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <div className="item-cart">
                            <img
                              src={process.env.REACT_APP_URL_S3 + item._id.image}
                              alt="imagen"
                              className="item-img"
                            />
                          </div>
                        </th>
                        <td>$ {item._id.price}</td>
                        <td>{item.cantidad}</td>
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
                  <p>${totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </main>
      <Footer />
    </>
  );
}
