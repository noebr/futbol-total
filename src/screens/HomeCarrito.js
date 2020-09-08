import React, { Component } from 'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';
import Filter from '../components/Filter';
import Products from '../screens/Products';
import data from '../Data';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';



class HomeCarrito extends React.Component {
    constructor(){
        super();
        this.state = {
          products: data.products,
          cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
          category:"",
        };
      }
      createOrder =(order) =>{
        alert("NEED TO SAVE ORDER FOR" + order.name);
      }
      removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState ({
          cartItems : cartItems.filter ((x) => x._id !== product._id),
        });
        localStorage.setItem ("cartItems", JSON.stringify(this.state.cartItems));
      }
      addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
          if (item._id === product._id){
            item.count++;
            alreadyInCart = true;
    
          }
        });
        if (!alreadyInCart) {
          cartItems.push({...product, count: 1 });
        }
        this.setState({cartItems});
        localStorage.setItem ("cartItems", JSON.stringify(cartItems));
      };

  render(){
    

return(
  <Layout>
  <div className="container-shopping">
  <Cart cartItems={this.state.cartItems}
  removeFromCart ={this.removeFromCart}
  createOrder={this.createOrder}
  />
    <Link to="/carrito"><button className='button-red-forms'>PROCEDER AL PAGO</button></Link>
 
</div>
</Layout>
)


  }
}






export default HomeCarrito;