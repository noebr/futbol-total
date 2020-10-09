
import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import "../Shopping.css";

function MiEspacio(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const handleLogout = () => {
        dispatch(logout());
        
    }
    




    return <div className="profile">
        <div className="profile-info">
            <div className="form">
                <form >
                    
                {userInfo ? (
              <Link to="/mi-espacio"><button type="button" className="boton-atras">
                  <img src='/imagenes/iconos-81.png'className="mi-espacio" alt="login" /></button></Link>
            ) : (
              <Link to="/signin"><p></p></Link>
            )}



                        
                            
                        

                   
                </form>
            </div>
        </div>

    </div>
}

export default  MiEspacio;