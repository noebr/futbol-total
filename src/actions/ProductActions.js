import { FETCH_PRODUCTS } from "../Types";
import { FILTER_PRODUCTS_BY_CATEGORY } from "../Types";


export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items:
      category === ""
          ? products
          : products.filter((x) => x.category.indexOf(category) >= 0),
    },
  });
};

