import React, { Component } from 'react';
import '../Shopping.css';

import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import Navigation from '../Layout/Navigation';
import Footer2 from '../Layout/Footer2';






class DonacionesyP extends Component {

    render(){
    return (<div>
     <Navigation/>
     <div >
          
     <h1 className="centrar">DONACIONES Y PADRINAZGO </h1><br/>
       <h2 className="centrar">Controlá los aportes y verificá el tuyo</h2>      
            <input className="filter-fiscalizacion"
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
         />
        </div>

            <input className="filter-fiscalizacion"
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
         />
       


       
    <div class="table">

        <table id="superTable" class="display" cellspacing="0" width="100%">
            <thead className="tabla-fondo">
            <tr>
                <th className="tabla">Fecha</th>
                <th className="tabla">Aporte recibido</th>
                <th className="tabla">Medios de pago</th>
                

            </tr>
            </thead>
        </table>
    </div>
    <div class="floatingMenu">
        <ul class="menu vertical">
            <li><a data-mode="true" data-column="0"></a></li>
            <li><a data-mode="true" data-column="1"></a></li>
            <li><a data-mode="true" data-column="2"></a></li>
            <li><a data-mode="true" data-column="3"></a></li>
            <li><a data-mode="true" data-column="4"></a></li>
            <li><a data-mode="true" data-column="5"></a></li>
        </ul>
    </div><br/><br/>
    <button className="button-red-f">Imprimir</button>
    <button className="button-red-f">PDF</button>
    <button className="button-red-f">Excel</button>

<Footer2/>
      </div>

    );
  }
  }
  
  export default DonacionesyP;