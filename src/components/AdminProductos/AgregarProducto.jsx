import React from "react";
import AdminNav from "../AdminNav/AdminNav";

export default function AgregarProducto() {
  return (
    <div className="main">
      <header>
        <AdminNav />
      </header>

      <div className="formulario">
        <form className="formulario2">
          <div className="form-group">
            <input
              class="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Titulo del producto"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1"></label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Ingresa la descripción del pedido"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlFile1">
              Ingrese imagen del producto
            </label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="ingrese precio del producto"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="ingrese stock del producto"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
