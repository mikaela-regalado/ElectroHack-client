import React from "react";
import Card from "../Card/Card";
import "./ListaProductos.css";

export default function ListaProductos({ productos }) {
  return (
    <div id="background">

        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 contenedor">
          {productos.map((producto) => {
            return <Card key={producto._id} producto={producto} />;
          })}
        </div>

    </div>
  );
}
