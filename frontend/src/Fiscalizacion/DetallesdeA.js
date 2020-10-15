import React, { Component } from 'react';
import '../Shopping.css';

import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import Navigation from '../Layout/Navigation';
import Footer2 from '../Layout/Footer2';
import DateRange from '../components/DateRange';






class DetallesdeA extends Component {

    render(){
    return (<div>
     <Navigation/>
     <div >
          
     <h1 className="centrar">DETALLES DE TU APORTE </h1><br/>
       <h2 className="centrar">¿Queres ver como ayudaste al proyecto?</h2>      
       <div >
       <div>
     <DateRange/>
      </div>
          {" "}
          <select className="filter-fiscalizacion"
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">Seleccione proyecto</option>
            <option value="inicial">inicial</option>
            <option value="intermedio">intermedio</option>
            <option value="avanzado">avanzado</option>
            <option value="profesional">profesional</option>

          </select>
        </div>  
        </div>

          
       


       
    <div class="table">

        <table id="superTable" class="display" cellspacing="0" width="100%">
            <thead className="tabla-fondo">
            <tr>
                <th className="tabla">Detalle de compra</th>
                <th className="tabla">monto</th>
                <th className="tabla">factura</th>
                

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
  
  export default DetallesdeA;