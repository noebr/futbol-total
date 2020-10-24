import React from 'react';
import {  Link } from 'react-router-dom';
import '../Shopping.css';
import { connect} from "react-redux";
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
    <div className="logo-nav-1">
      <Boton/>
      </div>
         
<Link to="/signin"><ProfileScreen/></Link>
     
         
<Link className="lista-sidebar" to="/contacto"> <p>Contacto</p></Link>
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

         
          <MiEspacio/>
          
          <div  className="logo-nav-2">
            <Link to="#">
            <img src='/imagenes/iconos-84.png'className="redes-sociales" alt="facebook" />
            </Link>
          
         
          
            <Link to="#">
            <img src='/imagenes/iconos-83.png'className="redes-sociales" alt="instagram" /> 
            </Link>

            <Link to="#">
            <img src='/imagenes/whatsapp-1-2.png'className="redes-sociales-fac" alt="instagram" /> 
            </Link>
          
            </div>
      </div>
      </nav>


      <div className="sidebar-CART">
      <button className="close-modal"  onClick={closeMenuCart}>&times;</button>


       <Cart/>
       <Link to="/carrito"><button className='button-red-carrito'>Proceder al pago</button></Link>
      </div>



      <div className="sidebar">
        
      
   
            
         
        <ul className="categories">
        
          <button className="close-modal" onClick={closeMenu}>&times;</button>
         
          
          <div className="lista-sidebar">
            
            <Link to="/signin">
            <img src='/imagenes/iconos-81.png'className="iniciar-sesion" alt="login" />
            <ProfileScreen/> </Link>
            
          </div>
          <br/>
          <br/>
          <br/> 
          <br/>
            <hr/>
         
          <div className="lista-sidebar">
            <Link to="/contacto">
            <img src='/imagenes/mensaje.png'className="redes-s" alt="contacto" /> 
              <p className="menu">  Contacto</p> </Link>
          </div>
          <br/> 
          <hr/>
          <div className="lista-sidebar">
            <Link to="#">
            <img src='/imagenes/iconos-84.png'className="redes-sociales" alt="facebook" />
              <p className="menu"> Facebook</p></Link>
          </div>
          <br/> 
          <hr/>
          <div className="lista-sidebar">
            <Link to="#">
            <img src='/imagenes/iconos-83.png'className="redes-sociales" alt="instagram" /> 
            <p className="menu"> Instagram</p></Link>
           
            </div>
            <br/> 
          <hr/>
          <div className="lista-sidebar">
            <Link to="#">
            <img src='/imagenes/whatsapp-1-2.png'className="redes-sociales" alt="whatsapp" /> 
           <p className="menu">Whatsapp</p> </Link>
           
           </div>
         

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