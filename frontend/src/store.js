import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer} from "./reducers/productReducer";
import {videosReducer} from "./reducers/videosReducer";
import {userSigninReducer, userRegisterReducer} from './reducers/userReducers';
import { projectsReducer } from './reducers/projectReducer';
import { cartReducer } from './reducers/cartReducer';
import { articulosReducer } from './reducers/articuloReducer';
import { productListReducer} from './reducers/productReducer';
import {  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,} from './reducers/orderReducer';



  const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        facturacion: localStorage.getItem('facturacion')
        ? JSON.parse(localStorage.getItem('facturacion'))
        : {},
      paymentMethod: 'PayPal',
    },
  };
const reducer = combineReducers({

  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  products: productsReducer,
  videos: videosReducer,
  projects:projectsReducer,
  cart:cartReducer,
  articulos:articulosReducer,
  productList: productListReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  

 

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;