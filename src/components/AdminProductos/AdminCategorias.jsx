import React, { useEffect, useState } from "react";
import axiosCall from "../../utils/axiosCall";
import { useSelector } from "react-redux";
import AdminNav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";
import "./AdminHome.css";

export default function AdminCategorias() {
  const [categorias, setCategorias] = useState([]);
  const token = useSelector((state) => state.user.token);

  function handleDelete(id) {
    axiosCall("/admin/categories", "delete", token, null, { _id: id });
    setCategorias([...categorias].filter((categoria) => categoria._id !== id));
  }

  useEffect(() => {
    axiosCall("/categories", "get", null, null).then((res) =>
      setCategorias(res.data)
    );
  }, []);

  console.log(categorias);
  return (
    <div id="tablaEliminar">
      <header>
        <AdminNav />
      </header>
      <div id="tableDelete">
        <h1 className="producto-title">Lista de Categorias</h1>
        <div className="buttonAgregar ">
          <Link
            to="/admin/categorias/crear"
            type="button"
            className="btn btn-outline-dark"
          >
            Agregar Categoria
          </Link>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Código</th>

              <th scope="col">Precio</th>
              <th scope="col">Slug</th>
              <th scope="col">Modificar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => {
              return (
                <tr key={categoria._id} className="column">
                  <th scope="row"> {categoria.code}</th>
                  <td>{categoria.type}</td>
                  <td>{categoria.slug}</td>
                  <td>
                    <Link
                      to={`/admin/productos/modificar/${categoria.slug}`}
                      type="button"
                      className="btn btn-secondary"
                    >
                      Modificar
                    </Link>
                  </td>
                  <td id="trash">
                    <i
                      className=" mt-2 fas fa-trash-alt"
                      onClick={() => handleDelete(categoria._id)}
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
