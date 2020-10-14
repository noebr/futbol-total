import React from 'react';
import {  Link,useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Shopping.css';
import { connect, useSelector } from "react-redux";
import Cart from '../components/Cart';
import Boton from "../Layout/Boton";
import { removeFromCart } from "../actions/CartActions";
import ProfileScreen from '../screens/ProfileScreen';
import MiEspacio from '../Layout/MiEspacio';



class Navigation extends React.Component {


  render(){

      
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  const openMenuCart = () => {
    document.querySelector('.sidebar-CART').classList.add('open');

  }
  const closeMenuCart = () => {
    document.querySelector('.sidebar-CART').classList.remove('open');
  };
  const { cartItems } = this.props;



  

return(

<div>
    <nav className="nav1">
    <div className="contenedor-nav">
    <div className="logo-nav-1">
    <Boton/>
    </div>
        <div className="logo-nav">
        <Link to="/"><img src='/imagenes/logof.png'className="icon-logo" alt="logo" /></Link>
        </div>
          <div  className="logo-nav-2">
            <MiEspacio/>
  <button className="icono-cart" onClick={openMenuCart}>
          {cartItems.length === 0 ? (
          <div className="cart cart-header"><img src='/imagenes/carrito-8.png'className="carrito-1" alt="carrito" /><span>0</span></div>
        ) : (
          <div className="cart cart-header"><img src='/imagenes/carrito-8.png'className="carrito-1" alt="carrito" />{cartItems.length}{" "}
          </div>
        )}    
  </button>
  <button className="icono" onClick={openMenu}>&#9776;</button>
          </div>
 
    
         
  
      </div>
      </nav>


      
<nav className="nav2">

<div className="contenedor-nav">
    <div className="logo-nav-1"><Boton/></div>
         
<Link to="/signin"><ProfileScreen/></Link>
     
         
<Link to="/contacto"> <p>CONTACTO</p></Link>
<div className="logo-nav">
        <Link to="/"><img src='/imagenes/logof.png'className="icon-logo" alt="logo" /></Link>
        </div>
              <div className="logo-nav">

              
  <button className="icono-cart" onClick={openMenuCart}>
          {cartItems.length === 0 ? (
          <div className="cart cart-header"><img src='/imagenes/carrito-8.png'className="carrito-1" alt="carrito" /><span>0</span></div>
        ) : (
          <div className="cart cart-header"><img src='/imagenes/carrito-8.png'className="carrito-1" alt="carrito" />{cartItems.length}{" "}
          </div>
        )}    
  </button>
 
          </div>

          <Link to="/mi-espacio">
          <MiEspacio/><p>MI ESPACIO</p>
          </Link>
          <div  className="logo-nav-2">
            <Link to="/category/Shirts">
            <img src='/imagenes/iconos-84.png'className="redes-sociales-fac" alt="facebook" />
            </Link>
          
         
          
            <Link to="/category/Shirts">
            <img src='/imagenes/iconos-83.png'className="redes-sociales" alt="instagram" /> 
            </Link>

            <Link to="/category/Shirts">
            <img src='/imagenes/whatsapp-85.png'className="redes-sociales" alt="instagram" /> 
            </Link>
          
            </div>
      </div>
      </nav>


      <div className="sidebar-CART">
      <button className="sidebar-close-button" onClick={closeMenuCart}> x</button>


       <Cart/>
       <Link to="/carrito"><button className='button-red-carrito'>PROCEDER AL PAGO</button></Link>
      </div>



      <div className="sidebar">
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
            </button>

        <ul className="categories">

          <li className="lista-sidebar">
            <Link to="/signin">
            <img src='/imagenes/iconos-81.png'className="redes-sociales" alt="login" />
            <ProfileScreen/> </Link>
            
          </li>
          <hr/>
          <li className="lista-sidebar">
            <Link to="/contacto">
            <img src='/imagenes/iconos-82.png'className="redes-sociales" alt="contacto" /> 
               CONTACTO</Link>
          </li>
          <hr/>
          <li className="lista-sidebar">
            <Link to="/category/Shirts">
            <img src='/imagenes/iconos-84.png'className="redes-sociales" alt="facebook" />
              FACEBOOK</Link>
          </li>
          <hr/>
          <li className="lista-sidebar">
            <Link to="/category/Shirts">
            <img src='/imagenes/iconos-83.png'className="redes-sociales" alt="instagram" /> 
            INSTAGRAM</Link>
           
          </li>
          <hr/>
          <li className="lista-sidebar">
            <Link to="/category/Shirts">
            <img src='/imagenes/whatsapp-85.png'className="redes-sociales" alt="whatsapp" /> 
            WHATSAPP</Link>
           
          </li>
         

        </ul>

      </div>
      </div>
     

)


  }
}
export default connect ((state) =>({
  cartItems : state.cart.cartItems,
  }),
  { removeFromCart }
  )(Navigation);