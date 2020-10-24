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
            <p className="centrar nuestro-juego">
              Es la persona que decide dar un aporte cada vez que puede; para
              que un proyecto o plan de Fútbol Total, sea llevado adelante con
              el objetivo de lograr la inclusión social por medio del fútbol.
            </p>
            <br/><br/>
            <Link to="/donaciones">
              <button className="button-red-forms">Doná</button>
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
            <p className="centrar nuestro-juego">
              Es la persona que siente importante contribuir a la inclusión
              social de niños y niñas por medio del Fútbol, eligiendo el importe
              mensual deseado; para que los proyectos sociales de Fútbol Total,
              puedan ser sostenibles durante el tiempo y que la niñez pueda ser
              una etapa feliz.
            </p>
            <br/><br/>

            <Link to="/padrinazgo">
              <button className="button-red-forms">Apadriná</button>
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
            <p className="centrar nuestro-juego">
              Es la persona que decide aportar su tiempo, conocimiento, trabajo
              y compromiso; para que Fútbol Total, pueda estar al servicio de la
              inclusión social por medio del fútbol.
            </p>
            <br/><br/>
            <Link to="/voluntariado">
              <button
              
                className="button-red-forms"
                
              >
                Súmate
              </button>
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
              <button className="button-red-forms">Fiscaliza</button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
export default HomeApoyanos;
