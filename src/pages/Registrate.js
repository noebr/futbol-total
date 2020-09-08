import React, {Component} from'react';
import '../Shopping.css';



class Register extends Component {
    render(){
    return (
        <section className='login'>
        <h1>CREAR CUENTA</h1>
		<br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
		<form className='container-login-form'>
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


			</form>

		</section>
	
	
    );
}
}

export default Register;