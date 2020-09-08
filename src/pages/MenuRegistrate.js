import React, {Component} from'react';

import '../Shopping.css';

class MenuRegistrate extends Component {
    render(){
    return (
		<section className='login'>
            <br/>
		<img src='/imagenes/logof.png'className="App-logo" alt="logo" />
        <h4>¡Hola! <br/>¿Quieres mejorar tu juego?</h4>
        <form className='container-login-form'>
        <br/>
        <br/>
		<button className='button-red-forms'>SOY NUEVO/A </button>
        <br/>
        <br/>
        <button className='button-transparente-forms'>YA TENGO CUENTA</button>
        <br/>
        <br/>


			</form>
		</section>
	
    );
}
}

export default MenuRegistrate;