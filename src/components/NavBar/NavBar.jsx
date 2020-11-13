import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axiosCall from "../../utils/axiosCall";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/Actions/userActions";

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  const items = useSelector((state) => state.carrito.items);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const cantidadItems = items;
  const sumItems = (totalItems, nextItem) => totalItems + nextItem.cantidad;

  const totalItems = cantidadItems.reduce(sumItems, 0);

  useEffect(() => {
    axiosCall("/categories", "get").then((res) => setCategories(res.data));
  }, []);

  function handleClick() {
    dispatch(actionCreators.logOut());
  }

  return (
    <nav className="nav-bar ">
      <div className="container fila ">
        <div>
          <Link to="/" className="brand">
            <small>
              Electro Hack <i className="fas fa-desktop"></i>
            </small>
          </Link>
        </div>
        <div>
          {categories.map((category) => {
            return (
              <Link key={category._id} to={`/categoria/${category.slug}`}>
                {category.type}
              </Link>
            );
          })}
        </div>
        <div>
          {!user.token && (
            <>
              <Link to="/registro">
                <i className="fas fa-user-circle"></i> Ingresar
              </Link>
            </>
          )}
          {user.token && (
            <>
              <Link to="/login" onClick={handleClick}>
                <i className="fas fa-user-circle"></i> Salir
              </Link>
            </>
          )}

          <Link to="/pedidos">
            <i className="fas fa-shopping-cart">{items && totalItems}</i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
