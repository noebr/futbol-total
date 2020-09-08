import React, { Component } from 'react';
import '../Shopping.css';
import Layout from '../Layout/Layout';
import Filter from '../components/Filter';
import Products from '../screens/Products';

import Cart from '../components/Cart';



class HomeScreen extends React.Component {
  render(){
    const openMenu = () => {
      document.querySelector('.sidebar-CART').classList.add('open');
    };
    const closeMenu = () => {
      document.querySelector('.sidebar-CART').classList.remove('open');
    };
    

return(
  <Layout>
  <div className="container-shopping">

  <Filter></Filter> 
   

  <Products></Products>

 
</div>
</Layout>
)


  }
}






export default HomeScreen;