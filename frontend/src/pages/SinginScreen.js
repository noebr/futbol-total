import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";
import "../Shopping.css";
import Facebook from "../components/Facebook";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <div className="login">
      <Link to="/">
        {" "}
        <button className="close-modal">&times;</button>
      </Link>
      <hr />
      <br />
      <Link to="/">
        <img src="/imagenes/logof.png" className="App-logo" alt="logo" />
      </Link>
      <br />
      <br />
      <form onSubmit={submitHandler} className="container-login-form">
        <div className="form-container">
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </div>
          <div className="datos-forms">
            <input
              placeholder="E-mail"
              className="input"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              placeholder="Contraseña"
              className="input"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="centrar">
            <button className="button-red-forms">Iniciar sesión </button>
            <br />
            <br />
            <Link
              to={
                redirect === "/" ? "register" : "register?redirect=" + redirect
              }
            >
              <button className="button-transparente-redes">Registrate</button>
            </Link>
            <br />
            <br />
            <p>o</p>
            <br />
            <br />
           
            <button className="button-azul-redes">
              <img
                src="/imagenes/iconos-84.png"
                className="redes-sociales-gmail"
                alt="facebook"
              />{" "}
              Continuar con Facebook
            </button>
            <br />
            <br />
            <button className="button-azul-redes">
              <img
                src="/imagenes/gmail.png"
                className="redes-sociales-gmail"
                alt="facebook"
              />{" "}
              Continuar con Gmail
            </button>
          </div>
          <div className="login-olvidaste">
            <Link className="login-olvidaste" to="/codigo">
              ¿Olvidaste tu Contraseña?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SigninScreen;
