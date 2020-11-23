import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Producto from "./components/Producto/Producto";
import Registro from "./components/LoginRegistro/Registro";
import Categoria from "./components/Categoria/Categoria";
import Login from "./components/LoginRegistro/Login";
import About from "./components/About/About";
import Pedidos from "./components/Pedidos/Pedidos";
import DetallesPedido from "./components/DetallesPedido/DetallesPedido";
import AdminProductos from "./components/AdminProductos/AdminProductos";
import AdminHome from "./components/AdminProductos/AdminHome";
import AdminCategorias from "./components/AdminProductos/AdminCategorias";
import AgregarCategorias from "./components/AdminProductos/AgregarCategorias";
import AgregarProductos from "./components/AdminProductos/AgregarProductos";
import ModificarProducto from "./components/AdminProductos/ModificarProducto";
import AdminRegistro from "./components/AdminCuenta/AdminRegistro";
import AdminLogin from "./components/AdminCuenta/AdminLogin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/categoria/:slug" component={Categoria} />
        <Route exact path="/producto/:slug" component={Producto} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/pedidos/:id" component={DetallesPedido} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/admin/" component={AdminHome} />
        <PrivateRoute
          exact
          path="/admin/productos"
          component={AdminProductos}
        />
        <PrivateRoute
          exact
          path="/admin/productos/crear"
          component={AgregarProductos}
        />
        <PrivateRoute
          exact
          path="/admin/productos/modificar/:slug"
          component={ModificarProducto}
        />
        <Route exact path="/admin/categoria" component={AdminCategorias} />
        <Route
          exact
          path="/admin/categorias/crear"
          component={AgregarCategorias}
        />
        <Route exact path="/admin/login" component={AdminLogin} />
        <PrivateRoute exact path="/admin/registro" component={AdminRegistro} />
      </Switch>
    </Router>
  );
}

export default App;
