import React from 'react';

import { Link } from 'react-router-dom';
import '../Shopping.css';



function Navigation2() {

    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };


    return (
        <>

            <nav className="nav1-2">
                <div className="contenedor-nav-2">
                <Link to="/shopping"><img src='/imagenes/back.png' className="redes-sociales" alt="carrito" /></Link>
                <div className="logo">
                    <img src='/imagenes/logof.png' alt="logo" />
                </div>
                <div className="icono-2" id="open">
                    <button className="icono" onClick={openMenu}>&#9776;</button>
                    <img src='/imagenes/carrito.png' alt="carrito" />
                </div>
            </div>
            </nav>



            <div className="sidebar">
                <button className="sidebar-close-button" onClick={closeMenu}> x </button>

            <ul className="categories">

                <li><Link to="/category/Shirts"><img src='/imagenes/iniciar-sesion.png' className="redes-sociales" alt="login" />  INICIAR SESIÓN</Link>
                </li>
                <hr />
                <li><Link to="/category/Shirts"><img src='/imagenes/celular.png' className="redes-sociales" alt="contacto" />  CONTACTO</Link>
                </li>
                <hr />
                <li><Link to="/category/Shirts"><img src='/imagenes/facebook1.png' className="redes-sociales" alt="facebook" />  FACEBOOK</Link>
                </li>
                <hr />
                <li><Link to="/category/Shirts"><img src='/imagenes/instagram1.png' className="redes-sociales" alt="instagram" />  INSTAGRAM</Link>
                </li>

            </ul>

            </div>





        </>
    );

}
export default Navigation2;