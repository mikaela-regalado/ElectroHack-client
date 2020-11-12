import React, { useState } from "react";
import "./loginRegistro.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosCall from "../../utils/axiosCall";
import actionLogin from "../../redux/Actions/userActions";
export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    const user = { email: email, password: password };
    /* console.log(user); */
    axiosCall("/token", "post", null, null, user).then((res) => {
      console.log(res.data);
      dispatch(actionLogin(res.data));
      history.push("/");
    });
  }
  return (
    <div class="main">
      <NavBar />
      <section class="signup">
        <div class="containerLogin">
          <div class="signup-content">
            <form
              id="signup-form"
              class="signup-form"
              onSubmit={(e) => {
                handleLogin(e);
              }}
            >
              <h2 class="form-title">Ingresa a tu cuenta</h2>

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
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
                  value="Iniciar sesión"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
