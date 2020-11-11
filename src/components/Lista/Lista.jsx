import React from "react";
import { Link } from "react-router-dom";
import producto from "./img/producto1.jpg";
import Card from "./Card/Card";
import "./Lista.css";

export default function Lista({ productos }) {
  return (
    <div className="background">
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3">
          {productos.map((producto) => {
            return <Card producto={producto} />;
          })}
        </div>
      </div>
    </div>
  );
}
