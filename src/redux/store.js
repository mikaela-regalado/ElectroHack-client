import { createStore } from "redux";
import carrito from "./Reducers/carritoReducer";

const store = createStore(
  carrito,
  { user: [], items: [], estado: "Sin Pagar" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
