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
        
        <Link clasName="boton-fiscalizacion"to ="/ingresos-egresos"><img src='/imagenes/FT.T-56.png' className="boton-fiscalizacion" alt="INGRESOS Y EGRESO" />
        </Link><p>INGRESOS Y EGRESOS</p>

        <Link clasName="boton-fiscalizacion"to ="/detalles-aporte"><img src='/imagenes/FT.T-55.png' className="boton-fiscalizacion" alt="DETALLES DE TU APORTE" />
        </Link><p>DETALLES DE TU APORTE</p>

        <Link clasName="boton-fiscalizacion"to ="/Donaciones-padrinazgo"><img src='/imagenes/FT.T-54.png' className="boton-fiscalizacion" alt="DONACIONES Y PADRINAZGO" />
        </Link><p>DONACIONES Y PADRINAZGO</p>

        <Link clasName="boton-fiscalizacion"to ="/existencia-donaciones"><img src='/imagenes/FT.T-53.png' className="boton-fiscalizacion" alt="EXISTENCIA DE DONACIONES" />
        </Link><p>EXISTENCIA DE DONACIONES</p>
        
        <Link clasName="boton-fiscalizacion"to ="/entrega-beneficiarios"><img src='/imagenes/FT27.png' className="boton-fiscalizacion-2" alt="ENTREGAS A BENEFICIARIOS" />
        </Link><p>ENTREGAS A BENEFICIARIOS</p>

        </div> 
      </Fade>
<Footer2/>
      </div>

    );
  }
  }
  
  export default Fiscalizacionhome;