import React from 'react';
import {  Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Shopping.css';
import { connect } from "react-redux";
import Cart from '../components/Cart';
import Boton from "../Layout/Boton";
import { removeFromCart } from "../actions/CartActions";

class NavigationU extends React.Component {

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
        <Link to="/"><img src='/imagenes/logof.png'className="logo" alt="logo" /></Link>
        </div>
          <div  className="logo-nav-2">
  <button className="icono-cart" onClick={openMenuCart}>
          {cartItems.length === 0 ? (
          <div className="cart cart-header"><img src='/imagenes/carrito2.png' alt="carrito" /><span>0</span></div>
        ) : (
          <div className="cart cart-header"><img src='/imagenes/carrito2.png' alt="carrito" />{cartItems.length}{" "}
          </div>
        )}    
  </button>
  
          </div>
 
    
          <button className="icono" onClick={openMenu}>&#9776;</button>
  
      </div>
      </nav>


      
<nav className="nav2">

<div className="contenedor-nav">
    <div className="logo-nav-1"><Boton/></div>
       
<Link to="/login"><p> CERRAR SESIÓN </p></Link>
         
          
         
<Link to="/contacto"> <p>CONTACTO</p></Link>

              <div className="logo-nav">
  <button className="icono-cart" onClick={openMenuCart}>
          {cartItems.length === 0 ? (
          <div className="cart cart-header"><img src='/imagenes/carrito2.png' alt="carrito" /><span>0</span></div>
        ) : (
          <div className="cart cart-header"><img src='/imagenes/carrito2.png' alt="carrito" />{cartItems.length}{" "}
          </div>
        )}    
  </button>
  
          </div>
          
        
          
            <Link to="/category/Shirts">
            <img src='/imagenes/facebook1.png'className="redes-sociales" alt="facebook" />
            </Link>
          
         
          
            <Link to="/category/Shirts">
            <img src='/imagenes/instagram1.png'className="redes-sociales" alt="instagram" /> 
            </Link>
           
          
  
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

          <li>
          
            <Link to="/login">
            <img src='/imagenes/iniciar-sesion.png'className="redes-sociales" alt="login" />
               CERRAR SESIÓN </Link>
          </li>
          <hr/>
          <li>
            <Link to="/contacto">
            <img src='/imagenes/celular.png'className="redes-sociales" alt="contacto" /> 
               CONTACTO</Link>
          </li>
          <hr/>
          <li>
            <Link to="/category/Shirts">
            <img src='/imagenes/facebook1.png'className="redes-sociales" alt="facebook" />
              FACEBOOK</Link>
          </li>
          <hr/>
          <li>
            <Link to="/category/Shirts">
            <img src='/imagenes/instagram1.png'className="redes-sociales" alt="instagram" /> 
            INSTAGRAM</Link>
           
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
  )(NavigationU);