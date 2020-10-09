import React, {Component} from'react';
import { Link } from 'react-router-dom';
import '../Shopping.css';

class Contraseña extends Component {
    render(){
    return (
		<section className='login'>

		<br/><br/><br/><br/>
		
		<Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
		
		<br/><br/><br/><br/>   
			<form className='container-login-form'>
			<div className="datos-forms">
			<p>Enviaremos un codigo de verificación
                a tu Correo</p>
			<label className="username">E-mail</label>
			<input className='input'type='text'placeholder='ejemplo@ejemplo.com' />

			<button className='button-red-forms'>Enviar código </button>
			</div>
			</form>
			
		</section>

    );
}
}

export default Contraseña;