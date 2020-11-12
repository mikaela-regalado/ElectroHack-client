import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axiosCall from "../../utils/axiosCall";

export default function NavBar() {
  const [categories, setCategories] = useState([]);
  const cantItems = useSelector((state) => state.cantItems);

  useEffect(() => {
    axiosCall("/categories", "get").then((res) => setCategories(res.data));
  }, []);

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
          <Link to="/registro">
            <i className="fas fa-user-circle"></i> Ingresar
          </Link>
          <Link to="/">
            <i className="fas fa-shopping-cart "><span className="cartCount">{cantItems}</span></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}
