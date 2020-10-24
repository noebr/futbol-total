import React, { Component } from "react";
import "../Shopping.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import { fetchArticulos } from "../actions/articulosActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

import Saludo from "../MisVideos/Saludo";

class HomeMiespacio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
    };
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  componentDidMount() {
    this.props.fetchArticulos();
  }
  openModal = (articulo) => {
    this.setState({ articulo });
  };
  closeModal = () => {
    this.setState({ articulo: null });
  };

  render() {
    const { articulo } = this.state;

    return (
      <Layout>
        <h1 className="centrar">MI ESPACIO</h1>
        <Fade bottom cascade={true}>
          <div className="container-fiscalizacion">
            <Link clasName="boton-fiscalizacion" to="/videos">
              <img
                src="/imagenes/FT.T-91.png"
                className="boton-fiscalizacion"
                alt="INGRESOS Y EGRESO"
              />
            </Link>

            <Link clasName="boton-fiscalizacion" to="/shopping">
              <img
                src="/imagenes/FT.T-92.png"
                className="boton-fiscalizacion"
                alt="DETALLES DE TU APORTE"
              />
            </Link>
          </div>
        </Fade>
        <hr />
        <h1 className="centrar">ARTÍCULOS MÁS LEIDOS</h1>
        
        <Fade bottom cascade={true}>
          {!this.props.articulos ? (
            <div>Loading...</div>
          ) : (
            <div>
              {this.props.articulos.map((articulo) => (
                <div key={articulo._id}>
                  <div className="contenedor-rendimiento">
                    <div className="imagen-rectangular">
                      <h2>{articulo.title}</h2>
                      <Link
                        className="link-name"
                        to={"#" + articulo._id}
                        onClick={() => this.openModal(articulo)}
                      >
                        <img
                          className="imagen-logo"
                          src={articulo.img}
                          alt={articulo.title}
                        />
                      </Link>
                      <br />
                      <div className="product-price">
                        <p className="centrar nuestro-juego">
                          {articulo.description}
                        </p>
                      </div>
                      <br /> <br />
                      <Link
                        to={"#" + articulo._id}
                        onClick={() => this.openModal(articulo)}
                      >
                        <button className="button-red-forms">
                          {" "}
                          Continuar{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {articulo && (
                <Modal
                  className="my-modal"
                  isOpen={true}
                  onRequestClose={this.closeModal}
                >
                  <Zoom>
                    <button className="close-modal" onClick={this.closeModal}>
                    &times;
                    </button>
                    <hr />
                    <div>
                      <h1>{articulo.title}</h1>
                      
                      <img
                        className="imagen-logo-articulos"
                        src={articulo.img}
                        alt={articulo.title}
                      ></img>
                      <div className="product-details-description">
                        <br />
                        <br />
                        <p className="centrar nuestro-juego">
                          {articulo.textoC}
                        </p>
                        </div>
                        <br />
                        <br />

                        <img
                          className="imagen-logo-articulos"
                          src={articulo.img2}
                          alt={articulo.title}
                        ></img>
                        <br />
                        <br />
                        <div className="product-details-description">
                        <p className="centrar nuestro-juego">
                          {articulo.textoC2}
                        </p>
                        <div className="product-price centrar">
                          <button
                            className="button-transparente-forms"
                            onClick={() => {
                              this.closeModal();
                            }}
                          >
                            Volver
                          </button>
                        </div>
                      </div>
                    </div>
                  </Zoom>
                </Modal>
              )}
            </div>
          )}
        </Fade>
      </Layout>
    );
  }
}
export default connect(
  (state) => ({
    articulos: state.articulos.items,
  }),
  {
    fetchArticulos,
  }
)(HomeMiespacio);
