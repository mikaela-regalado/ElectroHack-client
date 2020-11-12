import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Pedidos.css";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

export default function Pedidos() {
  const items = useSelector((state) => state.carrito.items);
  console.log(items);
  return (
    <>
      <NavBar />
      <main className="">
        <div className="container">
          <h1>Carrito</h1>
          <div className="row fila ">
            <div className="col-md-9 ">
              <table class="table table-striped">
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
            <div className="col-md-3">Chua</div>
          </div>
        </div>
      </main>
    </>
  );
}
