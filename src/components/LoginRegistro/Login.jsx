import React, { useState } from "react";
import "./loginRegistro.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosCall from "../../utils/axiosCall";
import { actionCreators } from "../../redux/Actions/userActions";
import Button from "@material-ui/core/Button";
import { makeStylesConfig } from "../../utils/makeStyles";
const useStyles = makeStylesConfig;

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const carrito = useSelector((state) => state.carrito);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  async function handleLogin(e) {
    e.preventDefault();
    const user = { email: email, password: password };
    axiosCall("/token", "post", null, null, user).then((res) => {
      dispatch(actionCreators.login(res.data));
      if (carrito.items.length !== 0) {
        history.push("/pedidos");
      } else {
        history.push("/");
      }
    });
  }
  return (
    <div className="page-container">
      <div className="main">
        <NavBar />

        <div className="content-wrap">
          <section className="signup">
            <div className="containerLogin">
              <div className="signup-content">
                <form
                  className="signup-form "
                  onSubmit={(e) => {
                    handleLogin(e);
                  }}
                >
                  <h2 className="form-title">Ingresa a tu cuenta</h2>

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

                  {/* <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="form-submit"
                      value="Iniciar sesión"
                    />
                  </div> */}
                  <div className={classes.root1}>
                    <div
                      className="MuiButton-outlinedPrimary"
                      className="buttonCarta"
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        name="submit"
                        id="submit"
                        className="form-submit"
                        className="py-3  text-center"
                      >
                        <span className="agregarSpan">INICIAR SESIÓN</span>
                      </Button>
                    </div>
                  </div>
                </form>
                <p className="loginhere">
                  ¿Aún no estás registrado?{" "}
                  <Link to="/registro" className="loginhere-link">
                    Regístrate
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
