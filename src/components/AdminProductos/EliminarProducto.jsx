import React, { useEffect, useState } from "react";
import axiosCall from "../../utils/axiosCall";
import NavBar from "../NavBar/NavBar";
import ListaProductos from "../ListaProductos/ListaProductos";
import "./AdminProductos.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AdminNav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

export default function AdminProductos() {
  const [adminProductos, setAdminProductos] = useState([]);

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
            {adminProductos.map((producto) => {
              return (
                <tbody>
                  <tr>
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
                      <i class=" mt-2 fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

{
  /* */
}
