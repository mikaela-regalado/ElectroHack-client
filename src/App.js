import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Producto from "./components/Producto/Producto";
import Registro from "./components/LoginRegistro/Registro";
import Categoria from "./components/Categoria/Categoria";
import Login from "./components/LoginRegistro/Login";
import Pedidos from "./components/Pedidos/Pedidos";
import DetallesPedido from "./components/DetallesPedido/DetallesPedido";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categoria/:slug" component={Categoria} />
        <Route exact path="/producto/:slug" component={Producto} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/pedidos/:id" component={DetallesPedido} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
