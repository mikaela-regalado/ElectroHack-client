import React, { useState } from "react";
import "./AdminCuenta.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosCall from "../../utils/axiosCall";

export default function AdminRegistro() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.user.token);
  async function handleRegistro(e) {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    axiosCall("/admin/", "post", token, null, user).then((res) => {
      history.push("/admin");
    });
  }

  return (
    <div>
      <form
        className="login"
        onSubmit={(e) => {
          handleRegistro(e);
        }}
      >
        <div className="login-container">
          <fieldset>
            <legend className="legend">Registro</legend>
            <div className="input">
              <input
                type="text"
                placeholder="Nombre"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Apellido"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit">
              <i className="fa fa-long-arrow-right"></i>
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
