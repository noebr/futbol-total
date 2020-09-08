import React, { Component } from 'react';
import '../Shopping.css';
import Layout2 from '../Layout/Layout2';
import WOW from 'wowjs';





class Fiscalizacionhome extends Component {
    componentDidMount(){
        new WOW.WOW().init();
    
      }

    render(){
    return (
     <Layout2>
  <section className= "wow animate__backInDown" data-wow-duration = "0.3s" data-wow-delay = "1s">
        <div className="container-fiscalizacion">  
        <h1>FISCALIZACIÓN</h1><br/>
<div className="boton-fiscalizacion"><a href="/">GIROS TELÉFONICOS</a></div>
<p>Controlá los envios y verificá el tuyo.</p><br/>
<div className="boton-fiscalizacion"><a href="/"> INGRESOS/<br/>EGRESOS/<br/>DISPONIBLES</a></div>
<p>Controlá los ingresos,egresos y el saldo disponibles.</p><br/>
<div className="boton-fiscalizacion"><a href="/">ENTREGAS A BENEFICIARIOS</a></div>
<p>Controlá lo entregado a cada beneficiario.</p><br/>
<div className="boton-fiscalizacion"><a href="/">EXISTENCIA DE DONACIONES</a></div>
<p>Controlá el stock disponible.</p><br/>

</div> 
</section>
</Layout2>

    );
  }
  }
  
  export default Fiscalizacionhome;