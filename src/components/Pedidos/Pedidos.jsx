import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Pedidos.css";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import Footer from "../Footer/Footer";

export default function Pedidos() {
  const items = useSelector((state) => state.carrito.items);

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
                      <td>$ {item.price}</td>
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
                  <p>$32.3323</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button type="button">AGREGAR AL CARRITO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
