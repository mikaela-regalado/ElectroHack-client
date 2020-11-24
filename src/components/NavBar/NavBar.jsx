import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axiosCall from "../../utils/axiosCall";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/Actions/userActions";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import AlertMsg from "../Alert/Alert"

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
    <div className="bg-dark">
      <Container>
        <Navbar className="nav-bar bg-dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/" className="brand">
            Electro Hack <i className="fas fa-desktop"></i>
          </Navbar.Brand>

          <Navbar.Toggle id="burger-button" />

          <Navbar.Collapse>
            <Nav className="categories">
              {categories.map((category) => {
                return (
                  <Nav.Link
                    key={category._id}
                    as={Link}
                    to={`/categoria/${category.slug}`}
                  >
                    {category.type}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {!user.token && (
                <Nav.Link as={Link} to="/registro" className="link">
                  <i className="fas fa-user-circle  login-register-cart"></i>
                  Ingresar
                </Nav.Link>
              )}

              {user.token && (
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClick}
                  className="link"
                >
                  <i className="fas fa-user-circle login-register-cart"></i>
                  Salir
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/pedidos">
                <i className="fas fa-shopping-cart carrito-button login-register-cart">
                  <span className="cartCount">{items && totalItems}</span>
                </i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
