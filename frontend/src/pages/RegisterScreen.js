import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password,rePassword));
  }
  return <section className='login'>
                <Link to="/"><button className="close-modal" >
                X
              </button></Link>
              <hr/>
    <br/>
			<Link to="/"><img src='/imagenes/logof.png'className="App-logo" alt="logo" /></Link>
    <form onSubmit={submitHandler} className='container-login-form'>
    <div className="datos-forms">
       
        
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        
        
          <label htmlFor="name" className="username">
            Nombre de usuario
          </label>
          <input className='input' type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        
        
          <label htmlFor="email"className="username">
            Correo electrónico
          </label>
          <input className='input' type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        
        
          <label htmlFor="password" className="username">Contraseña</label>
          <input className='input' type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
      
        
          <label htmlFor="rePassword" className="username">Repetir contraseña</label>
          <input className='input' type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
       
       
          <button type="submit" className='button-red-forms'>Registrarme y continuar</button>
        
          <br/><br/><p>o</p><br/><br/>
          <button className='button-azul-redes'><img src='/imagenes/facebook1.png'className="redes-sociales-facebook" alt="facebook" /> Regístrate con Facebook</button>
					<br/><br/>
					<button className='button-azul-redes'><img src='/imagenes/gmail.png'className="redes-sociales-gmail" alt="facebook" /> Regístrate con Gmail</button>
         
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className='login-olvidaste' >¿Ya tienes cuenta?Inicia sesión</Link>

       

      </div>
    </form>
  </section>
}
export default RegisterScreen;