import React, {Component} from'react';
import '../Shopping.css';
import { Link } from 'react-router-dom';



class Register extends Component {
    render(){
    return (
 
		        <section className='login'>
		
				<br/>
				<Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
					
					<form className='container-login-form'>
						<div className="datos-forms">
						<label className="username">Nombre de usuario</label>
			<input className='input'type='text'placeholder='nombre y apellido' />

		<label className="username">CI o RUC</label>
			<input className='input'type='text'placeholder='ci o ruc' />

		<label className="username">E-mail</label>
			<input className='input'type='text'placeholder='ejemplo@ejemplo.com' />

		<label className="username">Contraseña</label>
			<input className='input'type='password'placeholder='Contraseña' />

		<label className="username">Repetir Contraseña</label>
			<input className='input'type='password'placeholder='Contraseña' />
			

			<button className='button-red-forms'>Registrarme y continuar</button>
					

			<br/><br/><p>o</p><br/><br/>
					<button className='button-azul-redes'><img src='/imagenes/facebook1.png'className="redes-sociales-facebook" alt="facebook" /> Regístrate con Facebook</button>
					<br/><br/>
					<button className='button-azul-redes'><img src='/imagenes/gmail.png'className="redes-sociales-gmail" alt="facebook" /> Regístrate con Gmail</button>
					
		
					<div className='login-olvidaste'>
						<Link className='login-olvidaste'to='/login'>¿Ya tienes cuenta?Inicia sesión</Link>
					</div>
		<br/>
		</div>
					</form>
				
				
		
					
				</section>
	
	
    );
}
}

export default Register;