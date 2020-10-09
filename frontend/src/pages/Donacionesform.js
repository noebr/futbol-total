import React, {Component} from'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';



class Donacionesform extends Component {
    render(){
    return (
		<Layout>
        <section className='login'>
        <h1 className="centrar">COMPLETÁ TUS DATOS</h1>
		<form className='container-login-form'>
		<div className="datos-forms">
        <h2>DATOS PERSONALES</h2>
		<label className="username">Nombre y Apellido</label>
		<input className='input'type='text'placeholder='nombre y apellido' />

		<label className="username">R.U.C</label>
			<input className='input'type='text'placeholder='R.U.C' />
  
            <label className="username">E-mail</label>
			<input className='input'type='text'placeholder='E-mail' />
            <label className="username">Teléfono o celular</label>
			<input className='input'type='text'placeholder='Teléfono o celular' />
 
<div className='idiomas'><label className="username"></label>
<label>  <p className="checkbox"> <input type='checkbox'id='cbox1'value='first_checkbox' /> QUIERO DONAR/APADRINAR DE FORMA ANÓNIMA</p></label>	

</div>

			<button className='button-red-forms'>SIGUIENTE</button>
			<br/>
			<br/>

			</div>
			</form>

		</section>
		</Layout>
	
	
    );
}
}

export default Donacionesform;