import React, { Component } from 'react';
import '../Shopping.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import Layout2 from '../Layout/Layout2';

class HomeApoyanos extends Component {
    render() {
        return (
            <Layout2>
            <div className="contenedor-rendimiento">

                <h1>¡Apoyanos!</h1>

                <div className="imagen-rectangular">
                    <h2 className="centrar">QUIERO DONAR</h2>
                    <ReactPlayer
                        url={require('../videos/Habilidad-1.mp4')}
                        controls
                        width="100%"
                        alt="donar"
                    />
                </div>
                <br />
                <div className="texto-rendimiento centrado">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                         been the industry's standard dummy text ever since the 1500s, when an unknown 
                         printer took a galley of type and scrambled it to make a type specimen book.
            </p>

                    <button className='button-red-forms'>DONA</button>
                </div>
                <hr />



                <div className="imagen-rectangular">
                    <h2 className="centrar">QUIERO APADRINAR</h2>
                    <ReactPlayer
                        url={require('../videos/Habilidad-1.mp4')}
                        controls
                        width="100%"
                        alt="apadridar"

                    />
                </div>
                <br />

                <div className="texto-rendimiento centrado">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                         been the industry's standard dummy text ever since the 1500s, when an unknown 
                         printer took a galley of type and scrambled it to make a type specimen book.
            </p>

                    <button className='button-red-forms'>APADRINA</button>
                </div>
                <hr />

                <div className="imagen-rectangular">
                    <h2 className="centrar">QUIERO SER VOLUNTARIO</h2>
                    <ReactPlayer
                        url={require('../videos/Habilidad-1.mp4')}
                        controls
                        width="100%"
                        alt="apadridar"

                    />
                </div>
                <div className="texto-rendimiento centrado">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='button-red-forms'>VOLUNTARIO</button>
                </div>


                <hr />

                <div className="imagen-rectangular">
                    <h2 className="centrar">FISCALIZA TU APORTE</h2>
                    <img src='/imagenes/icon1.jpeg' className="imagen-logo" alt="fiscalización" />
                </div>
                <div className="texto-rendimiento centrado">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <Link to="/fiscalizacion"><button className='button-red-forms'>FISCALIZA</button></Link>
                </div>
                
            </div>
            </Layout2>
        )
    }
}
export default HomeApoyanos;