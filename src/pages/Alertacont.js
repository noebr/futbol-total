import React, {Component} from'react';
import '../Shopping.css';

class Alertacont extends Component {
    render(){
    return (
		<section className='login'>
        <h1>RECUPERAR CONTRASEÑA</h1>
		<br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
		
		<form className='container-login-form'>
		<br/>
			<h3>INGRESA EL CODIGO</h3>
			<label className="username">Código</label>
			<input className='input'type='text'placeholder='código' />

			<button className='button-red-forms'>Siguiente </button>

			</form>
		</section>
    );
}
}

export default Alertacont;