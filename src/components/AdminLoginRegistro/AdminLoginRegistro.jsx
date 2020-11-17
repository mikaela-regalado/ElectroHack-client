import "./AdminLoginRegistro.css";
import { Link } from "react-router-dom";
export default function AdminLoginRegistro() {
  return (
    <div class="login-wrap loginAdmin">
      <div class="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          class="sign-in"
          checked
        ></input>
        <label for="tab-1" class="tab">
          Login
        </label>
        <input id="tab-2" type="radio" name="tab" class="sign-up"></input>
        <label for="tab-2" class="tab">
          Registrarse
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="user" class="label">
                Username
              </label>
              <input id="user" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              ></input>
            </div>

            <div class="group">
              <Link to="/admin/">
                <input type="submit" class="button" value="Ingresar"></input>
              </Link>
            </div>
            <div class="hr"></div>
          </div>
          <div class="sign-up-htm">
            <div class="group">
              <label for="name" class="label">
                Nombre
              </label>
              <input id="name" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="lastName" class="label">
                Apellido
              </label>
              <input id="lastName" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="email" class="label">
                Email
              </label>
              <input id="email" type="text" class="input"></input>
            </div>
            <div class="group">
              <label for="pass" class="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              ></input>
            </div>
            <div class="group">
              <label for="cellphone" class="label">
                Celular
              </label>
              <input id="cellphone" type="number" class="input"></input>
            </div>

            <div class="group">
              <Link to="/admin/">
                <input type="submit" class="button" value="Registrarse"></input>
              </Link>
            </div>
            <div class="hr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
