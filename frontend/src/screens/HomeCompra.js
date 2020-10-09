import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveFacturacion } from '../actions/CartActions';
import '../Shopping.css';


function HomeCompra(props) {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [ruc, setRuc] = useState('');
  const [email, setEmail] = useState('');
  

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveFacturacion({ nombre, apellido, ruc, email }));
    props.history.push('payment');
  }
  return <div className='login'>

  <Link to="/"> <button className="close-modal" >
                  X
                </button></Link>
                <hr/>
      <br/>
  
    <div className="form">
    <Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
      <form onSubmit={submitHandler} className='container-login-form'>
      <div className="form-container">
      <div className="datos-forms">
            <h1 className="centrar">DATOS DE FACTURACIÓN</h1>
         

          
            <label htmlFor="Nombre" className="username">
              Nombre
          </label>
            <input className='input' type="text" name="Nombre" id="Nombre" onChange={(e) => setNombre(e.target.value)}>
            </input>
          
          
            <label htmlFor="Apellido" className="username" >
              Apellido
          </label>
            <input className='input' type="text" name="Apellido" id="Apellido" onChange={(e) => setApellido(e.target.value)}>
            </input>
         
          
            <label htmlFor="RUC" className="username">
              RUC O CI
          </label>
            <input className='input' type="text" name="RUC" id="RUC" onChange={(e) => setRuc(e.target.value)}>
            </input>

            <label htmlFor="E-MAIL" className="username">
              E-MAIL
          </label>
            <input className='input'type="text" name="E-MAIL" id="E-MAIL" onChange={(e) => setEmail(e.target.value)}>
            </input>
         


         
            <button type="submit" className='button-red-forms'>Continuar</button>
          
            </div>
        </div>
      </form>
    </div>
  </div>

}
export default HomeCompra;