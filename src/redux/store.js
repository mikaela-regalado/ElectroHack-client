import { createStore } from "redux";
import { combineReducers } from "redux";
import carrito from "./Reducers/carritoReducer";

const rootReducer = combineReducers({
  carrito,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
