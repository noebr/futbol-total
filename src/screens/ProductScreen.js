import React from 'react';
import '../Shopping.css';
import data from '../Data';
import formatCurrency from '../components/Util';
import Layout from '../Layout/Layout';



function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
    <Layout>

    <div className="product-details">
        <h1 className="centrar">MEJORA TU JUEGO</h1>
        <img src= {product.image} alt="product"></img>


    


<div className="product-details-description">

    <h2>{product.name} <br/>Descripción:</h2>
    <p> {product.description}</p>
</div>
<div className="product-price-details">
<div>{formatCurrency(product.price)}</div>

</div>
        
        </div>
        <div className="details-action">

    <button className="button-red-forms">Comprar</button>
    <br/>
    <button onClick={() => this.props.addToCart(product)} className="button-transparente-forms">Agregar al carrito</button>
 
        </div>
        <hr/>
        <div>
            <h1 className="centrar"></h1>
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

        </Layout>
        </div>
}
export default ProductScreen;