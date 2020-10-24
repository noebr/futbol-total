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
		<input className='input'type='text'placeholder='Proyecto' />
		<input className='input'type='text'placeholder='Nombre y Apellido' />
		
		
			<input className='input'type='text'placeholder='Fecha de nacimiento' />
            <h2>DATOS DE CONTACTO</h2>
		
			<input className='input'type='text'placeholder='Ciudad' />
          
			<input className='input'type='text'placeholder='Domicilio' />
           
			<input className='input'type='text'placeholder='E-mail' />
           
			<input className='input'type='text'placeholder='Teléfono o celular' />
		
		

			<button className='button-red-forms'>Súmate</button>
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