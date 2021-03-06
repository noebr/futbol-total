import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveFacturacion } from "../actions/CartActions";
import "../Shopping.css";

function HomeCompra(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { facturacion } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [nombre, setNombre] = useState(facturacion.nombre);
  const [apellido, setApellido] = useState(facturacion.apellido);
  const [ruc, setRuc] = useState(facturacion.ruc);
  const [email, setEmail] = useState(facturacion.email);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveFacturacion({ nombre, apellido, ruc, email }));
    props.history.push("/payment");
  };
  return (
    <div className="login">
      <Link to="/">
        {" "}
        <button className="close-modal">&times;</button>
      </Link>
      <hr />
      <br />

      <div className="form">
        <Link to="/">
          <img src="/imagenes/logof.png" className="App-logo" alt="logo" />
        </Link>
        <form onSubmit={submitHandler} className="container-login-form">
          <div className="form-container">
            <div className="datos-forms">
              <h1 className="centrar">DATOS DE FACTURACIÓN</h1>


              <input
              placeholder=' Nombre o razón social'
                className="input"
                type="text"
                name="Nombre"
                id="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              ></input>


              <input
              placeholder=' RUC O CI'
                className="input"
                type="text"
                name="RUC"
                id="RUC"
                onChange={(e) => setRuc(e.target.value)}
              ></input>


              <input
              placeholder=' E-mail'
                className="input"
                type="text"
                name="E-MAIL"
                id="E-MAIL"
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <button type="submit" className="button-red-forms">
                Continuar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default HomeCompra;
