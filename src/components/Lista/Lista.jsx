import React from "react";
import { Link } from "react-router-dom";
import producto from "./img/producto1.jpg";
import "./Lista.css";

export default function Lista() {
  return (
    <div className="background">
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card">
              <img src={producto} alt="product" />
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h5 class="card-title">TV SMART PANAVOX 32 led smart</h5>
                  <Link className="link-producto">TV & monitor LED SMART</Link>

                  <h4>$7550</h4>
                  <h4>$650 x 15 cuotas</h4>
                  <small>Stock disponible</small>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
