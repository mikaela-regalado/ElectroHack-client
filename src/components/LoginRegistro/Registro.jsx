import React, { useState } from "react";
import "./loginRegistro.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import axiosCall from "../../utils/axiosCall";

export default function Registro() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [cellPhone, setCellPhone] = useState("");

  async function handleRegistro(e) {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastname: lastName,
      email: email,
      password: password,
      userAddress: userAddress,
      cellPhone: cellPhone,
    };
    axiosCall("/users", "post", user).then((res) => {
      history.push("/");
    });
  }

  return (
    <div className="main">
      <NavBar />
      <section className="signup">
        <div className="containerLogin">
          <div className="signup-content">
            <form id="signup-form" className="signup-form">
              <h2 className="form-title">Crear Cuenta</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  toggle="#password"
                  className="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="adress"
                  id="adress"
                  placeholder="Dirección"
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-input"
                  name="cellphone"
                  id="cellphone"
                  placeholder="Celular"
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </div>

              {/* <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit"
                  value="Registrarse"

                />
              </div> */}
              <button
                type="submit"
                onClick={handleRegistro}
                className="mb-1 mt-2"
              >
                Registrarse
              </button>
            </form>
            <p className="loginhere">
              ¿Tienes una cuenta?{" "}
              <a href="#" className="loginhere-link">
                Ingresar
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
