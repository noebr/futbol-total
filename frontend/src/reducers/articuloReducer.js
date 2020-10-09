import {
    FETCH_ARTICULOS
  } from "../Types";
  
  export const articulosReducer = (state = {}, action) => {
    switch (action.type) {

      case FETCH_ARTICULOS:
        return { items: action.payload, filteredItems: action.payload };
      default:
        return state;
    }
  };