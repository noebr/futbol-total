import React, {Component} from'react';

import '../Shopping.css';

class Contraseña extends Component {
    render(){
    return (
		<section className='login'>
        <h1>¿Olvidaste tu Contraseña?</h1>
		<br/>
		<br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
		
            
			<form className='container-login-form'>
			<h3>Enviaremos un codigo de verificación
                a tu Correo</h3>
			<label className="username">E-mail</label>
			<input className='input'type='text'placeholder='ejemplo@ejemplo.com' />

			<button className='button-red-forms'>Enviar código </button>

			</form>
		</section>

    );
}
}

export default Contraseña;