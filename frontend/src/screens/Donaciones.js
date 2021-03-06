import React, { Component } from "react";
import "../Shopping.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/ProjectActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import DatosT2 from "../components/DatosT2";

class Donaciones extends Component {
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
    this.props.fetchProjects();
  }
  openModal = (project) => {
    this.setState({ project });
  };
  closeModal = () => {
    this.setState({ project: null });
  };

  render() {
    const { project } = this.state;
    const checkoutHandler = () => {
      this.props.history.push("/donaciones-form");
    };
    return (
      <Layout>
        <h1 className="centrar">DONACIONES</h1>
        <br />
        <Fade bottom cascade={true}>
          {!this.props.projects ? (
            <div>Loading...</div>
          ) : (
            <div>
              {this.props.projects.map((project) => (
                <div key={project._id}>
                  <div className="contenedor-rendimiento">
                    <div className="imagen-rectangular">
                      <h2>{project.title}</h2>
                      <Link
                        className="link-name"
                        to={"#" + project._id}
                        onClick={() => this.openModal(project)}
                      >
                        <img
                          className="imagen-logo"
                          src={project.img}
                          alt={project.title}
                        />
                      </Link>
                      <br />
                      <div className="datos-t">
                        <div className="datos_tiempo">
                          <p className="datos-m">
                            Cantidad de donantes: {project.c_donantes}
                          </p>
                          <p className="datos-m">Meta: Gs{project.meta}</p>
                          <p className="datos-m">
                            Monto recaudado: Gs{project.monto_recaudado}
                          </p>
                        </div>
                        <div>
                          <DatosT2
                            meta={project.meta}
                            monto_recaudado={project.monto_recaudado}
                          />
                        </div>
                      </div>

                      <div className="product-price">
                        ${project.description}
                      </div>
                      <br />

                      <button onClick={checkoutHandler} className="button-red-forms">Doná</button>
                      <br />
                      <br />
                      <Link
                       
                        to={"#" + project._id}
                        onClick={() => this.openModal(project)}
                      >
                        <button className="button-transparente-forms">
                          Conocer más
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {project && (
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
                      <h1 className="centrar">DONACIONES</h1>
                      <img
                        className="imagen-logo"
                        src={project.img}
                        alt={project.title}
                      ></img>
                      <div className="product-details-description">
                        <h2>{project.title}</h2>

                        <p>${project.descriptionC}</p>

                        <hr />

                        <hr />
                        <div className="product-price centrar">
                          <button  onClick={checkoutHandler} className="button-red-forms">Doná</button>
                          <br /><br />
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
                  <div className="container-sello">
            <img src="/imagenes/sello.png" className="sello" alt="apóyanos" />
          </div>
      </Layout>
    );
  }
}
export default connect(
  (state) => ({
    projects: state.projects.items,
  }),
  {
    fetchProjects,
  }
)(Donaciones);
