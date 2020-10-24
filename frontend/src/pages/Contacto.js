import React, { Component } from 'react';
import '../Shopping.css';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout'

class Alertacont extends Component {
    render() {
        return (
            <Layout>
            <section className='login'>
                <h1>CONTACTANOS</h1>
                <p className="centrar color-orange">Tu opinión es muy importante para nosotros.<br/>Si tienes alguna duda o comentario por favor
            completa la información.</p>
                <form className='container-login-form'>
                <div className="datos-forms">
                    <br />

                   
                    <input className='input' type='text' placeholder='Nombre y Apellido' />
         
                    <input className='input' type='text' placeholder='ejemplo@ejemplo.com' />
                    
                    <input className='input' type='text' placeholder='Teléfono o celular' />
       
       

                    
                    <textarea className='comentarios'placeholder='Motivo' rows='8' cols='35'></textarea>

                    <button className='button-red-forms'>Enviar </button>
                    <br/>
                    <br/>
                    <h3 ><br/>También podes contactarnos por:<br/></h3>

                   <div className='contenedor-redes-sociales'>
                    <img src='/imagenes/iconos-83.png'className="redes-sociales" alt="instagram" />
                    <img src='/imagenes/whatsapp-85.png'className="redes-sociales" alt="whatsapp" />
                    <img src='/imagenes/iconos-84.png'className="redes-sociales" alt="facebook" />
                    </div>
                    <br/>
                    <br/>
                    </div>

                </form>
            </section>
            </Layout>
        );
    }
}

export default Alertacont;