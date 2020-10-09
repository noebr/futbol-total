import React, {Component} from'react';
import '../Shopping.css';
import { Link } from 'react-router-dom';

class Repetirc extends Component {
    render(){
    return (
		<section className='login'>

		<br/><br/><br/><br/>
		<Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
		<br/><br/><br/><br/>
            
			<form className='container-login-form'>
			<div className="datos-forms">
			<label className="username">Ingresa Contraseña nueva</label>
			<input className='input'type='text'placeholder='contraseña nueva' />

			<label className="username">Repetir contraseña</label>
			<input className='input'type='password'placeholder='Contraseña' />

			<button className='button-red-forms'>Iniciar sesión </button>


			</div>
			</form>
			
		</section>
	
    );
}
}

export default Repetirc;