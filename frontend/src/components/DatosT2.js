import React, { Component } from "react";
import '../App.css'



export class DatosT2 extends Component {

  render() {
      const meta= this.props.meta;
      const monto_recaudado =this.props.monto_recaudado;
      const porcentaje= meta > 0 ? (monto_recaudado / meta ) * 100 : 0;
      const clas =`progress-circle p${porcentaje}`;
    return (
        
<div className={clas}>
    
    <span className="fondo">{porcentaje}%</span>
   <div className="left-half-clipper">
      <div className="first50-bar"></div>
      <div className="value-bar"></div>
   </div>
</div>
    );
  }
}

export default DatosT2;