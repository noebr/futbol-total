import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/ProductActions";

class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      


        <div>
        <li>
          <form >
            <input 
               value={this.props.category}
               onChange={(e) =>
                 this.props.filterProducts(this.props.products, e.target.value)
               }
            />
           
          </form>
        </li>

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