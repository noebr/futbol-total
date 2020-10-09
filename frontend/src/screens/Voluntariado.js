import React, { Component } from 'react';
import '../Shopping.css';
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { connect } from "react-redux";
import { fetchProjects } from "../actions/ProjectActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";




class Voluntariado extends Component {
    constructor(props) {
        super(props);
        this.state = {
          project: null,
        };
      }
      componentWillMount() {
        Modal.setAppElement('body');
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
    
        return (
            <Layout>
        
        <h1 className="centrar">VOLUNTARIADO</h1>
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
                                <Link className="link-name" to={"#" + project._id} onClick={() => this.openModal(project)}>
                                    <img className="imagen-logo" src={project.img} alt={project.title} />
                                </Link>
                                <br/>

                                <div className="product-price">${project.description}</div>
                                <br/>

                                <button className="button-red-forms">QUIERO FORMAR PARTE</button>
                                <br /> <br />
                                <Link className="link-name"to={"#" + project._id} onClick={() => this.openModal(project)}>
                                
                                <button className="button-transparente-forms">CONOCER MÁS</button>
                                </Link>
                            </div>
                        </div>
                    </div>))}


                   
                    {project && (
          <Modal  className="my-modal" isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <hr/>
              <div >
                  <h1 className="centrar">VOLUNTARIADO</h1>
                <img className="imagen-logo" src={project.img} alt={project.title}></img>
                <div className="product-details-description">
                  <h2>{project.title}</h2>

                  <p>${project.descriptionC}</p>


                  <hr/>

        <hr/>
<div >
<button className="button-red-forms">QUIERO FORMAR PARTE</button>
<br/><br/><br/>
<button className="button-transparente-forms" onClick={() => { this.closeModal();}}>VOLVER
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
        )
    }
}
export default connect(
    (state) => ({ 
 projects:state.projects.items
    }),
    {
      fetchProjects,

    }
  )(Voluntariado);