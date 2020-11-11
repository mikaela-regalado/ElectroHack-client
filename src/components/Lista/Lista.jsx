import React from "react";
import Card from "../Card/Card";
import "./Lista.css";

export default function Lista({ productos }) {
  return (
    <div className="background">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          {productos.map((producto) => {
            return <Card key={producto._id} producto={producto} />;
          })}
        </div>
      </div>
    </div>
  );
}
