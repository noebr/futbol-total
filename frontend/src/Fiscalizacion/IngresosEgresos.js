import React, { Component } from 'react';
import '../Shopping.css';
import Navigation from '../Layout/Navigation';
import Footer2 from '../Layout/Footer2';
import DateRange from '../components/DateRange'






class IngresosEgresos extends Component {

    render(){
    return (<div>
     <Navigation/>

       <h1 className="centrar">INGRESOS Y EGRESOS </h1><br/>
       <h2 className="centrar">Podes ver ingreso y egreso del que fromas parte</h2>
       <div>
     <DateRange/>
      </div>
      

     <div >
          {" "}
          <select className="filter-fiscalizacion"
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">Seleccione Proyecto</option>
            <option value="inicial">inicial</option>
            <option value="intermedio">intermedio</option>
            <option value="avanzado">avanzado</option>
            <option value="profesional">profesional</option>

          </select>
        </div>

       <div className="container-check">
       <p>¿Qué ingresos quisieras ver?</p>
       <label className="username"><input type="checkbox"/>Donaciones</label><br/>
       <label className="username"><input type="checkbox"/>Padrinazgo</label><br/>
       <label className="username"><input type="checkbox"/>Todos</label><br/>
       </div>
       <div className="container-check">
       <p>¿Qué egresos quisieras ver?</p>
       <label className="username"><input type="checkbox"/>Donaciones</label><br/>
       <label className="username"><input type="checkbox"/>Padrinazgo</label><br/>
       <label className="username"><input type="checkbox"/>Todos</label><br/>
       </div>
    <div class="table">

        <table id="superTable" class="display" cellspacing="0" width="100%">
            <thead className="tabla-fondo">
            <tr>
                <th className="tabla">Proyecto</th>
                <th className="tabla">Medios de pagos</th>
                <th className="tabla">total</th>

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
    <button className="button-red-forms">Ver</button>

<Footer2/>
      </div>

    );
  }
  }
  
  export default IngresosEgresos;