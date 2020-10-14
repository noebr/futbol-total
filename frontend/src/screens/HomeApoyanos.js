import React, { Component } from "react";
import "../Shopping.css";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

class HomeApoyanos extends Component {
  render() {
    return (
      <Layout>
        <h1 className="centrar">¡APÓYANOS!</h1>
        <div className="imagen-rectangular">
          <h2 className="centrar">QUIERO DONAR</h2>
          <img
            src="/imagenes/FT.T-64.png"
            className="imagen-logo"
            alt="fiscalización"
          />

          <br />
          <div className="texto-rendimiento centrado">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <Link to="/donaciones">
              <button className="button-red-forms">DONÁ</button>
            </Link>
          </div>
        </div>
        <hr />

        <div className="imagen-rectangular">
          <h2 className="centrar">QUIERO APADRINAR</h2>
          <img
            src="/imagenes/FT.T-65.png"
            className="imagen-logo"
            alt="fiscalización"
          />

          <br />

          <div className="texto-rendimiento centrado">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <Link to="/padrinazgo">
              <button className="button-red-forms">APADRINA</button>
            </Link>
          </div>
        </div>
        <hr />

        <div className="imagen-rectangular">
          <h2 className="centrar">QUIERO SER VOLUNTARIO</h2>
          <img
            src="/imagenes/FT.T-66.png"
            className="imagen-logo"
            alt="fiscalización"
          />

          <div className="texto-rendimiento centrado">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/voluntariado">
              <button className="button-red-forms">VOLUNTARIO</button>
            </Link>
          </div>
        </div>
        <hr />

        <div className="imagen-rectangular">
          <h2 className="centrar">FISCALIZA TU APORTE</h2>
          <img
            src="/imagenes/FT.T-67.png"
            className="imagen-logo"
            alt="fiscalización"
          />

          <div className="texto-rendimiento centrado">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/fiscalizacion">
              <button className="button-red-forms">FISCALIZA</button>
            </Link>
          </div>
        </div>
        
      </Layout>
    );
  }
}
export default HomeApoyanos;
