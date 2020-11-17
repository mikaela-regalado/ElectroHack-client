import React, { useEffect, useState } from "react";
import axiosCall from "../../utils/axiosCall";
import {useSelector} from "react-redux"
import NavBar from "../NavBar/NavBar";
import ListaProductos from "../ListaProductos/ListaProductos";
import "./AdminHome.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AdminNav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

export default function AdminProductos() {
  const [adminProductos, setAdminProductos] = useState([]);
  const admin = useSelector(state => state.user)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjJjNWIzMWMxZjA0MWY2YzcwYjA1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYwNTU1MjY2NH0.sd5VJBW0-yqbE-bV2YuuSyCDxLL9sYCW3rK08FX5al4"

function handleDelete(id) {
  console.log(id)
  axiosCall("/admin/products", "delete", token, null, {_id: id})
}

  useEffect(() => {
    axiosCall("/products", "get", null, null).then((res) =>
      setAdminProductos(res.data)
    );
  }, []);

  {
    return (
      <div id="tablaEliminar">
        <header>
          <AdminNav />
          <div>
            <h1>Agregar Producto</h1>
          </div>
        </header>

        <div id="tableDelete">
          <div className="buttonAgregar ">
            <Link to="/admin/crear" type="button" class="btn btn-outline-dark">
              Agregar Producto
            </Link>
          </div>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col" id="buttonModificar">
                  Modificar
                </th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
            {adminProductos.map((producto) => {
              return (
                
                  <tr key={producto._id}>
                    <th scope="row"> {producto.name}</th>
                    <td>{producto.description}</td>
                    <td>${producto.price}</td>
                    <td>{producto.stock}</td>
                    <td id="buttonModificar">
                      {" "}
                      <button
                        id="buttonModificar"
                        type="button"
                        class="btn btn-secondary"
                      >
                        Modificar
                      </button>
                    </td>
                    <td id="trash">
                      <i class=" mt-2 fas fa-trash-alt" onClick={()=>handleDelete(producto._id)}></i>
                    </td>
                  </tr>
               
              );
            })}
             </tbody>
          </table>
        </div>
      </div>
    );
  }
}

{
  /* */
}
