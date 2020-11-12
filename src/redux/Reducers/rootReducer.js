import { combineReducers } from "redux";
import user from "./userReducer";
import carrito from "./carritoReducer";

const rootReducer = combineReducers({ user, carrito });

export default rootReducer;
