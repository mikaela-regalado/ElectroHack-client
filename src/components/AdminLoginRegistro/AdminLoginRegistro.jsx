import "./AdminLoginRegistro.css";
export default function AdminLoginRegistro() {
  return (
    <div class="login-wrap">
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
          Registro
        </label>
        <div class="login-form">
          <div class="sign-in-htm">
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
              <input type="submit" class="button" value="Ingresar"></input>
            </div>
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
              <input type="submit" class="button" value="Registrarse"></input>
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
              <label for="tab-1">Already Member?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
