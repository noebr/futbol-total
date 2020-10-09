  
import { ADD_TO_CART, REMOVE_FROM_CART,CART_SAVE_FACTURACION,CART_SAVE_PAYMENT } from "../Types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
      
      case CART_SAVE_FACTURACION:
        return { ...state, shipping: action.payload };
      case CART_SAVE_PAYMENT:
        return { ...state, payment: action.payload };
      default:
        return state
    }
  }