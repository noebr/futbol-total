import React, {Component} from'react';
import '../Shopping.css';

class Repetirc extends Component {
    render(){
    return (
		<section className='login'>
        <h1>RECUPERAR CONTRASEÑA</h1>
		<br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
		
            
			<form className='container-login-form'>
			<label className="username">Ingresa Contraseña nueva</label>
			<input className='input'type='text'placeholder='contraseña nueva' />

			<label className="username">Repetir contraseña</label>
			<input className='input'type='password'placeholder='Contraseña' />

			<button className='button-red-forms'>Iniciar sesión </button>

			<div className='login-recuerdame'>
				<label>
				<input type='checkbox'id='cbox1'value='first_checkbox' />
				Recuérdame
				</label>	
			</div>

			</form>
		</section>
	
    );
}
}

export default Repetirc;