import React from "react";
import "./loginRegistro.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    <div class="main">
      <NavBar />
      <section class="signup">
        <div class="containerLogin">
          <div class="signup-content">
            <form id="signup-form" class="signup-form">
              <h2 class="form-title">Crear Cuenta</h2>
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  toggle="#password"
                  class="zmdi zmdi-eye field-icon toggle-password"
                ></span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  name="adress"
                  id="adress"
                  placeholder="Dirección"
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-input"
                  name="cellphone"
                  id="cellphone"
                  placeholder="Celular"
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </div>

              {/* <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
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
            <p class="loginhere">
              ¿Tienes una cuenta?{" "}
              <a href="#" class="loginhere-link">
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
