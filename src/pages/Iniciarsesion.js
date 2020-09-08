import React, { Component } from 'react';
import '../Shopping.css';
import { Link } from 'react-router-dom';



class Iniciarsesion extends Component {
    render(){
    return (
        
        <section className='login'>
        <h1>INICIAR SESIÓN</h1>
		
		<br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
            
			<form className='container-login-form'>
			<label className="username">E-mail</label>
			<input className='input'type='text'placeholder='ejemplo@ejemplo.com' />

			<label className="username">Contraseña</label>
			<input className='input'type='password'placeholder='Contraseña' />

			<button className='button-red-forms'>Iniciar sesión </button>

			<div className='login-recuerdame'>
				<label>
				<input type='checkbox'id='cbox1'value='first_checkbox' />
				Recuérdame
				</label>	
			</div>

			<div className='login-olvidaste'>
				<Link to='/Contraseña'>¿Olvidaste tu Contraseña?</Link>
			</div>

			</form>
		
			<p className='login-register'>
				No tienes ninguna cuenta <Link to='/Register'>Regístrate</Link>
			</p>
		</section>
	


          

);
    }
}
    
export default Iniciarsesion;