import React, {useState, useEffect} from "react";
import "./HistorialPedidos.css";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import axiosCall from "../../utils/axiosCall"

export default function Pedidos() {
    const [orderList, setOrderList] = useState(null)
    const user = useSelector((state) => state.user);


    useEffect(() => {
        const buyer = {buyer: user.userId};
        axiosCall("/orders", "get",  user.token, buyer )
        .then((res) => setOrderList(res.data))
    }, [])
 
    function totalPrice(order) {
      console.log("ORDER: ", order)
      return Math.round(
        order
          .map((item) => {console.log(item._id.price); return item._id.price * item.cantidad})
          .reduce(
            (sumaDetodos, itemMultiplicado) => sumaDetodos + itemMultiplicado,
            0
          )
      );
    };
/* console.log("TOTAL: ", totalPrice) */

  return (
    <>
    {orderList && <div className="pedidosAntContainer">
          <h1 className="mt-5">Pedidos anteriores</h1>
          <div className="row fila">
            <div className="col-md-9 ">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col-8">Pedidos ({orderList.length})</th>
                    <th scope="col-2">Precio</th>
                    <th scope="col-2">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((order, index) => (
                      <>
                                          
                    <tr key={order._id}>
                      <td className="">
                          <small>FECHA</small><br></br>
                          <small>{order.createdAt}</small>
                        
                      </td>
                      <td className=" ">
                          <small>TOTAL</small><br></br>
                          <small>${totalPrice(order.list_products)}</small>                        
                      </td>
                      <td className=" ">
                          <small>PEDIDO N°: {order._id} </small><br></br>
                           <Link className="link-historial" to={`pedidos/${order._id}`} >Detalles del pedido</Link>                      
                      </td>
                    </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
 
    </div>}
    </>
  );
}
