import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import axiosCall from "../../utils/axiosCall";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../redux/Actions/userActions";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


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
    <Navbar  bg="nav-bar" className="nav-bar" variant="white" expand="lg">
      <div className="container fila brand">
  <Navbar.Brand as={Link} to="/" className="brand">Electro Hack <i className="fas fa-desktop"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" bg="nav-bar"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    {categories.map((category) => {
            return (
              <Nav.Link key={category._id} as={Link} to={`/categoria/${category.slug}`}>
                {category.type}
              </Nav.Link>
            );
          })} 
          {!user.token && (
            
            <Nav.Link as={Link} to="/registro">
              <i className="fas fa-user-circle"></i> Ingresar
            </Nav.Link>
          
        )}
        {user.token && (
          
            <Nav.Link as={Link} to="/login" onClick={handleClick}>
              <i className="fas fa-user-circle"></i> Salir
            </Nav.Link>
          
        )}

        <Nav.Link as={Link} to="/pedidos">
          <i className="fas fa-shopping-cart"><span className="cartCount">{items && totalItems}</span></i>
        </Nav.Link>    
    </Nav>
    
  </Navbar.Collapse>

          
        
  </div>
</Navbar>
  );
}
