import React, { Component } from 'react';
import '../Shopping.css';

import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import Navigation from '../Layout/Navigation';
import Footer2 from '../Layout/Footer2';






class Fiscalizacionhome extends Component {

    render(){
    return (<div>
     <Navigation/>
       <h1 className="centrar">FISCALIZACIÓN</h1><br/>
      <Fade bottom cascade ={ true }>
        <div className="container-fiscalizacion">  
        
        <Link clasName="boton-fiscalizacion"to ="/ingresos-egresos"><img src='/imagenes/ingresos.png' className="boton-fiscalizacion" alt="INGRESOS Y EGRESO" />
        </Link>

        <Link clasName="boton-fiscalizacion"to ="/detalles-aporte"><img src='/imagenes/detalles.png' className="boton-fiscalizacion" alt="DETALLES DE TU APORTE" />
        </Link>

        <Link clasName="boton-fiscalizacion"to ="/Donaciones-padrinazgo"><img src='/imagenes/donaciones.png' className="boton-fiscalizacion" alt="DONACIONES Y PADRINAZGO" />
        </Link>

        <Link clasName="boton-fiscalizacion"to ="/existencia-donaciones"><img src='/imagenes/Existencia.png' className="boton-fiscalizacion" alt="EXISTENCIA DE DONACIONES" />
        </Link>
        
        <Link clasName="boton-fiscalizacion"to ="/entrega-beneficiarios"><img src='/imagenes/entregas.png' className="boton-fiscalizacion" alt="ENTREGAS A BENEFICIARIOS" />
        </Link>

        </div> 
      </Fade>
<Footer2/>
      </div>

    );
  }
  }
  
  export default Fiscalizacionhome;