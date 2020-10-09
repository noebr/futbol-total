  
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/ProductActions";
import Buscador from '../components/Buscador'

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">

        <div className="filter-1">
          {" "}
          <select 
            value={this.props.category}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">categorias</option>
            <option value="inicial">inicial</option>
            <option value="intermedio">intermedio</option>
            <option value="avanzado">avanzado</option>
            <option value="profesional">profesional</option>

          </select>
        </div>
        <div className="filter-buscador">
        <Buscador/>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    category: state.products.category,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts,
    sortProducts,
  }
)(Filter);