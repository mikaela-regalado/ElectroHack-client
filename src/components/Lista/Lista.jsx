import React from "react";
import producto from "./img/producto1.jpg";
import "./Lista.css";

export default function Lista() {
  return (
    <div className="seccion">
      <div className="contenedor">
        <div className="fila centrado ">
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
          <div className="producto-card">
            <img src={producto} alt="product" />
            <h4>TV SMART PANAVOX 32 led smart</h4>
            <small>TV & monitor LED SMART</small>
            <h4>$7550</h4>
            <h4>$650 x 15 cuotas</h4>
            <small>Stock disponible</small>
            <button>AGREGAR AL CARRITO</button>
          </div>
        </div>
      </div>
    </div>
  );
}
