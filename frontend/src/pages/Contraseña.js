import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Shopping.css";

class Contraseña extends Component {
  render() {
    return (
      <section className="login">
        <Link to="/signin">
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
        <br />
        <br />
        <form className="container-login-form">
          <div className="datos-forms">
            <p>Enviaremos un codigo de verificación a tu Correo</p>

            <input className="input" type="text" placeholder="E-mail" />

            <button className="button-red-forms">Enviar código </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Contraseña;
