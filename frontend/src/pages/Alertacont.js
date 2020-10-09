import React, {Component} from'react';
import '../Shopping.css';
import {  Link } from 'react-router-dom';

class Alertacont extends Component {
    render(){

    return (
		
		<section className='login'>
<br/><br/><br/><br/>
<Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
		
		<form className='container-login-form'>
		<br/>
		<div className="datos-forms">
			<p>INGRESA EL CODIGO</p>
			<label className="username">Código</label>
			<input className='input'type='text'placeholder='código' />
			</div>
			<button className='button-red-forms'>Siguiente </button>

			</form>
			
		</section>
    );
}
}

export default Alertacont;