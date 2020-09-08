import React, { Component } from 'react';
import '../Shopping.css';

class Alertacont extends Component {
    render() {
        return (
            <section className='login'>
                <h1>CONTACTANOS</h1>
                <p className="centrado color-orange">Tu opinión es muy importante para nosotros.<br/>Si tienes alguna duda o comentario por favor
            completa la información.</p>
                <form className='container-login-form'>
                    <br />

                    <label className="username">Nombre y Apellido</label>
                    <input className='input' type='text' placeholder='Nombre y Apellido' />
                    <label className="username">E-mail</label>
                    <input className='input' type='text' placeholder='ejemplo@ejemplo.com' />
                    <label className="username">Teléfono/celular</label>
                    <input className='input' type='text' placeholder='Teléfono o celular' />
                    <label className="username">Motivo</label>
                    <textarea className='comentarios' rows='8' cols='60'></textarea>

                    <button className='button-red-forms'>Enviar </button>
                    <h3 ><br/>También podes contactarnos por:<br/></h3>
                   <div className='contenedor-redes-sociales'>
                    <img src='/imagenes/instagram1.png'className="redes-sociales" alt="instagram" />
                    <img src='/imagenes/whatsapp1.png'className="redes-sociales" alt="whatsapp" />
                    <img src='/imagenes/facebook1.png'className="redes-sociales" alt="facebook" />
                    </div>

                </form>
            </section>
        );
    }
}

export default Alertacont;