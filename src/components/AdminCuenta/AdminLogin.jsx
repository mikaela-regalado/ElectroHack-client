import "./AdminCuenta.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosCall from "../../utils/axiosCall";
import { actionCreators } from "../../redux/Actions/userActions";

export default function AdminLogin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const user = { email: email, password: password };
    axiosCall("/admin/token", "post", null, null, user).then((res) => {
      dispatch(actionCreators.login(res.data));

      history.push("/admin");
    });
  }
  return (
    <form
      class="login"
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <fieldset>
        <legend class="legend">Login</legend>

        <div class="input">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="input">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" class="submit">
          <i class="fa fa-long-arrow-right"></i>
        </button>
      </fieldset>
    </form>
  );
}
