import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  Carousel  from 'react-elastic-carousel';
import Fade from "react-reveal/Fade";
import formatCurrency from '../components/Util';
import '../Shopping.css';
import { connect } from "react-redux";
import { fetchProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartActions";



class Products extends Component {
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
    <div>
     
            <h2 >PROMOCIONES</h2>
            <Fade bottom cascade ={ true }>
            {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <Carousel className="promociones" itemsToShow={2} slidesToScroll= {1} >
 
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




  <h2>NIVEL INICIAL</h2>
  <Fade bottom cascade ={ true }>
  {!this.props.products ? (
            <div>Loading...</div>
          ) : (
  <Carousel className="carrusel" itemsToShow = { 3 } slidesToScroll= {1} >
 
  {this.props.products.map((product) =>(
   <li key={product._id}>
  <div className="product">
  <div className="product-name"><Link to={'./product/'+ product._id}>{product.name}</Link></div>
  <Link className="link-name" to={'./product/'+ product._id}>
  <img className="product-image" src={product.image} alt={product.name}/>
  </Link><br/>
  <div className="product-brand">{product.brand}</div>
  <Link to={'./product/'+ product._id}> Ver más... </Link>
  <div className="product-price">{product.price}</div>
  <br/>
    <button className="button-red">Comprar</button>
    <br/>
    <button onClick={() => this.props.addToCart(product)} className="button-transparente">Agregar al carrito</button>
    </div>         
  </li>))
}
</Carousel>
          )}
</Fade>




  <h2>NIVEL INTERMEDIO</h2>
  <Fade bottom cascade ={ true }>
  {!this.props.products ? (
            <div>Loading...</div>
          ) : (
  <Carousel className="carrusel" itemsToShow = { 3 } slidesToScroll= {1} >
 
 {this.props.products.map((product) =>(
   <li key={product._id}>
  <div className="product">
  <div className="product-name"><Link to={'./product/'+ product._id}>{product.name}</Link></div>
  <Link className="link-name" to={'./product/'+ product._id}>
  <img className="product-image" src={product.image} alt={product.name}/>
  </Link>
  <div className="product-brand">{product.brand}</div>
  <Link to={'./product/'+ product._id}> Ver más... </Link>
  <div className="product-price">{product.price}</div>
  <br/>
    <button className="button-red">Comprar</button>
    <br/>
    <button onClick={() => this.props.addToCart(product)} className="button-transparente">Agregar al carrito</button>
    </div>         
  </li>))
}
</Carousel>
          )}
</Fade>



  <h2>NIVEL AVANZADO</h2>
  <Fade bottom cascade ={ true }>
  {!this.props.products ? (
            <div>Loading...</div>
          ) : (
  <Carousel className="carrusel" itemsToShow = { 3 } slidesToScroll= {1} >
 
 {this.props.products.map((product) =>(
   <li key={product._id}>
  <div className="product">
  <div className="product-name"><Link to={'./product/'+ product._id}>{product.name}</Link></div>
  <Link className="link-name" to={'./product/'+ product._id}>
  <img className="product-image" src={product.image} alt={product.name}/>
  </Link>
  <div className="product-brand">{product.brand}</div>
  <Link to={'./product/'+ product._id}> Ver más... </Link>
  <div className="product-price">{product.price}</div>
  <br/>
    <button className="button-red">Comprar</button>
    <br/>
    <button onClick={() => this.props.addToCart(product)} className="button-transparente">Agregar al carrito</button>
    </div>         
  </li>))
}
</Carousel>
          )}
</Fade>



  <h2>NIVEL PROFESIONAL</h2>
  <Fade bottom cascade ={ true }>
  {!this.props.products ? (
            <div>Loading...</div>
          ) : (
  <Carousel className="carrusel" itemsToShow = { 3 } slidesToScroll= {1} >
 
 {this.props.products.map((product) =>(
   <li key={product._id}>
  <div className="product">
  <div className="product-name"><Link to={'./product/'+ product._id}>{product.name}</Link></div>
  <Link className="link-name" to={'./product/'+ product._id}>
  <img className="product-image" src={product.image} alt={product.name}/>
  </Link>
  <div className="product-brand">{product.brand}</div>
  <Link to={'./product/'+ product._id}> Ver más... </Link>
  <div className="product-price">{product.price}</div>
  <br/>
    <button className="button-red">Comprar</button>
    <br/>
    <button onClick={() => this.props.addToCart(product)} className="button-transparente">Agregar al carrito</button>
    </div>         
  </li>))
}
</Carousel>
          )}
</Fade>
    </div>
    )
  }
}
export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart
  }
)(Products);