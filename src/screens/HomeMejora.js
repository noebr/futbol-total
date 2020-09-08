import React, { Component } from 'react';
import '../Shopping.css';
import Layout2 from '../Layout/Layout2';

class HomeMejora extends Component{
    render(){
        return(
            <Layout2>
            <div className="contenedor-rendimiento">
            <h1>MEJORÁ TU RENDIMIENTO</h1>
            

            
            <div className="imagen-rectangular">
            <h2 className="centrar">17 REGLAS DEL FÚTBOL</h2>
            <img src='/imagenes/IMAGEN.jpg'className="imagen-logo" alt="REGLAS-FUTBOL-FIFA" />
        </div>
         <br/>
         <div className="texto-rendimiento centrado">
            <p>todos creemos conocer pero, ¿Realmente sabemos las
                reglas del juego? Si dudas,aquí te contamos más...
            </p>

            <button className='button-red-forms'>Continuar</button>
            </div>
            <hr/>

            
            
            <div className="imagen-rectangular">
            <h2 className="centrar">ALIMENTACIÓN CONSCIENTE</h2>
            <img src='/imagenes/IMAGEN.jpg'className="imagen-logo" alt="imagen-SANA" />
        </div>
         <br/>

    <div className="texto-rendimiento centrado">
            <p>La nutrición ha sido motivo de interés por parte del cuerpo
                técnico de equipos profesionales; quienes cada vez más,son conscientes
                de los beneficios para sus atletas.<br/>Debido que favorece
                al aporte energético y brinda los nutrientes necesarios para
                garantizar el rendimiento.
            </p> 

            <button className='button-red-forms'>Continuar</button>
    </div>
            <hr/>
            
            <div className="imagen-rectangular">
            <h2 className="centrar">NUESTRO SHOPPING</h2>
            <img src='/imagenes/IMAGEN.jpg'className="imagen-logo" alt="shopping" />
            </div>
            <div className="texto-rendimiento centrado">
                <p>¡Ingresá a nuestro shopping de técnicas del juego y que
                    tu fútbol sea total!
                </p>
                <button className='button-red-forms'>IR AL SHOPPING</button>
          </div>
        </div>
        </Layout2>
              
        )
    }
}
export default HomeMejora;