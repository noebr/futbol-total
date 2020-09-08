import React, { Component } from 'react';
import '../Shopping.css';
import { Link } from 'react-router-dom';
import  Carousel  from 'react-elastic-carousel';
import Layout from '../Layout/Layout';
import Fade from "react-reveal/Fade";
import formatCurrency from '../components/Util';

import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartActions";





class HomePrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    const { product } = this.state;
  return(
      <div className="fondo-cancha">
      <Layout>     
        

        <header>
      
        <h1 className="centrado titulo "><img src='/imagenes/logof.png' className='App-logo-principal' alt="publicidad" /> Mejorá tu juego</h1><br/>
      
        <img src='/imagenes/banner2.png' className='banner' alt="publicidad" />
        </header>
       
      
      <h2 className="centrar">PROMOCIONES</h2>
      <Fade bottom cascade ={ true }>
            {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Carousel itemsToShow={2} slidesToScroll= {1} >
 
            {this.props.products.map((product) =>(
           <li key={product._id}>
          <div className="carrito">
        
          <div className="product-name"><Link to={'/product/'+ product._id}>{product.name}</Link>
          </div>
          <div className="product">
          <Link className="link-name" to={'/product/'+ product._id}>
          <img className="product-image" src={product.image} alt={product.name}/>
          </Link><br/>
          <div className="product-brand">{product.brand}</div>
          </div>
          <Link to={'./product/'+ product._id}> Ver más... </Link>
          
          <div className="product-price">{product.price}</div>
          <br/>
        
            <button className="button-red">Comprar</button>
            <br/>
            <button onClick={() => this.props.addToCart(product)} className="button-transparente">Agregar al carrito</button>
          </div>       
          </li>))}
        
        </Carousel>
          )}

</Fade>
  <br/>
  <button className='button-red'>VER TODO</button>
  <br/>

  <hr/>
  <div className='container-menu-redondos'>
  <Link to="/apoyanos"className='iconos-redondos'><img src='/imagenes/apoyanos-2.png' className='iconos-redondos'alt="apóyanos" /></Link>
  <Link to="/shopping"className='iconos-redondos'><img src='/imagenes/shopping-2.png'  className='iconos-redondos'alt="shopping" /></Link>
  <Link to="/mejora-tu-juego"className='iconos-redondos'><img src='/imagenes/mejora-2.png' className='iconos-redondos'alt="contenido técnico de fútbol" /></Link>
  
  </div>
  <hr/>
 
  <h2 className='centrar'>NUESTRO JUEGO</h2>

  <p className='centrar'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has
 </p>

  <Carousel className="galeria" itemsToShow={1} slidesToScroll= {1} >
  <img src='/imagenes/fotos-ft.png' className='img-testimonial' alt="publicidad" />
  <img src='/imagenes/fotos-ft.png' className='img-testimonial' alt="publicidad" />
  <img src='/imagenes/fotos-ft.png' className='img-testimonial' alt="publicidad" />
  <img src='/imagenes/fotos-ft.png' className='img-testimonial' alt="publicidad" />

  </Carousel>


 
            <div className="testimonial ">
            <h2 className="centrar ">TESTIMONIO</h2>  
                <blockquote>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </blockquote>
                <p className="centrar">- FERNANDO JUBERO</p>
            </div>
        
    
          
  

  
 
            </Layout> 
            </div> 

    );
  }
  }
  
  export default connect(
    (state) => ({ products: state.products.filteredItems }),
    {
      fetchProducts,
      addToCart
      
    }
  )(HomePrincipal);