import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Shopping.css';
import Layout from '../Layout/Layout';
import Cart from '../components/Cart';





function HomeCarrito(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=facturacion");
  }

  return   <Layout>
  <div className="container-shopping">
    <h1>MEJORA TU JUEGO</h1>
  <Cart/>

  <div className="product-details">
    <hr/>
    <h1>RESUMEN:</h1>
    <div className="product-price-details">
                    Total: ${" "}
                    {
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    }
                  </div>
                  </div>
                  <hr/>
                  <div>
    <h1 className="centrado">PASOS PARA QUE TU FÚTBOL SEA TOTAL</h1>
    <ol className="ol">
  <li><p>Presiona el botón comprar o seguí agregardo al carrito;</p></li>
  <li><p>Crear tu cuenta, o inicia sesión directamente si ya tienes una;</p></li>
  <li><p>Elije el método de pago de tu preferencia</p></li>
  <li><p>Disfruta del Fútbol Total</p></li>

</ol>

</div>
</div>
<div className="product-details-actions">
<button onClick={checkoutHandler} className="button-red-forms"disabled={cartItems.length === 0}>
COMPRAR AHORA
</button>
  <br/>
<Link to="/shopping"> <button className="button-transparente-forms">SEGUIR EN EL SHOPPING</button></Link>


    </div>

  
</Layout>

}

export default HomeCarrito;