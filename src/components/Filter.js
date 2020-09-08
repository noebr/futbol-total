import React, { Component } from 'react';
import '../Shopping.css';
import { connect } from 'react-redux';
import {filterProducts} from "../actions/ProductActions"


class Filter extends Component {
render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
<div >
<h1 className="centrar">SHOPPING FÚTBOL TOTAL</h1>

<div className="filter">
        <div className="filter-result">
          {this.props.filteredProducts.length} Products
        </div>
  <div className="filter-1">
    Filter {""}
  <select 
  value={this.props.category} 
  onChange={(e) =>
  this.props.filterProducts(this.props.products, e.target.value)
    }>
  
    <option  value="INICIAL">INICIAL</option>
    <option  value="INTERMEDIO">INTERMEDIO</option>
    <option  value="AVANZADO">AVANZADO</option>
    <option  value="PROFESIONAL">PROFESIONAL</option>
    <option  value="PRODUCTOS">PRODUCTOS</option>
  </select>
  </div>    
<div className="buscador">
<input type="text"placeholder="estoy buscando..." />
</div>
</div>
</div>
);


}
}
export default connect(
  (state) => ({
  category : state.products.category,
  products : state.products.items,
  filteredProducts : state.products.filteredItems,


}),
{
  filterProducts,
}
)(Filter);
