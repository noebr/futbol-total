import React, {Component} from'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';



class Padrinazgoform extends Component {
    render(){
    return (
		<Layout>
        <section className='login'>
        <h1 className="centrar">FORMULARIO DE PADRINAZGO</h1>
		<form className='container-login-form'>
		<div className="datos-forms">
        <h2>DATOS PERSONALES</h2>

		<input className='input'type='text'placeholder='Nombre y Apellido' />


			<input className='input'type='text'placeholder='C.I o R.U.C' />
  
            
			<input className='input'type='text'placeholder='E-mail' />

			<input className='input'type='text'placeholder='Teléfono o celular' />
 
<div className='idiomas'><label className="username"></label>
<label>  <p className="checkbox"> <input type='checkbox'id='donador'value='donador' /> Quiero apadrinar de forma anónima</p></label>	

</div>

			<button className='button-red-forms'>Siguiente</button>
			<br/>
			<br/>

			</div>
			</form>

		</section>
		</Layout>
	
	
    );
}
}

export default Padrinazgoform;