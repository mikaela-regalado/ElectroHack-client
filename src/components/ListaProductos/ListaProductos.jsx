import React from "react";
import Card from "../Card/Card";
import "./ListaProductos.css";

export default function ListaProductos({ productos }) {
  return (
    <div id="background">

        <div className="row row-cols-1 row-cols-md-3 mt-5">
          {productos.map((producto) => {
            return <Card key={producto._id} producto={producto} />;
          })}
        </div>

    </div>
  );
}
