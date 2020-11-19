import React, { useEffect, useState } from "react";
import axiosCall from "../../utils/axiosCall";
import { useSelector } from "react-redux";
import "./AdminHome.css";
import AdminNav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

export default function AdminProductos() {
  const [adminProductos, setAdminProductos] = useState([]);
  const token = useSelector((state) => state.user.token);

  function handleDelete(id) {
    console.log(id);
    axiosCall("/admin/products", "delete", token, null, { _id: id });
    setAdminProductos(
      [...adminProductos].filter((producto) => producto._id !== id)
    );
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
        </header>

        <div id="tableDelete">
          <h1 className="producto-title">Lista de Productos</h1>
          <div className="buttonAgregar ">
            <Link
              to="/admin/productos/crear"
              type="button"
              className="btn btn-outline-dark"
            >
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
                  <tr key={producto._id} className="column">
                    <th scope="row"> {producto.name}</th>
                    <td>{producto.description}</td>
                    <td>${producto.price}</td>
                    <td>{producto.stock}</td>
                    <td>
                      <Link
                        to={`/admin/productos/modificar/${producto.slug}`}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Modificar
                      </Link>
                    </td>
                    <td id="trash">
                      <i
                        className=" mt-2 fas fa-trash-alt"
                        onClick={() => handleDelete(producto._id)}
                      ></i>
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
