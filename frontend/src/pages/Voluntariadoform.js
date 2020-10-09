import React, {Component} from'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';



class Voluntariadoform extends Component {
    render(){
    return (
		<Layout>
        <section className='login'>
        <h1 className="centrar">VOLUNTARIADO</h1>
		<form className='container-login-form'>
		<div className="datos-forms">
        <h2>DATOS PERSONALES</h2>
		<label className="username">Nombre y Apellido</label>
		<input className='input'type='text'placeholder='nombre y apellido' />

		<label className="username">Fecha de nacimiento</label>
			<input className='input'type='text'placeholder='11/11/1111' />
            <h2>DATOS DE CONTACTO</h2>
		<label className="username">Ciudad</label>
			<input className='input'type='text'placeholder='Ciudad' />
            <label className="username">Domicilio</label>
			<input className='input'type='text'placeholder='Domicilio' />
            <label className="username">E-mail</label>
			<input className='input'type='text'placeholder='E-mail' />
            <label className="username">Teléfono </label>
			<input className='input'type='text'placeholder='Teléfono o celular' />
			<label className="username">Teléfono de contacto </label>
			<input className='input'type='text'placeholder='Teléfono o celular' />

			<button className='button-red-forms'>SUMATE</button>
			<br/>
			<br/>

			</div>
			</form>

		</section>
		</Layout>
	
	
    );
}
}

export default Voluntariadoform;