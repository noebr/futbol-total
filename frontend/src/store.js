import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productsReducer} from "./reducers/productReducer";
import {videosReducer} from "./reducers/videosReducer";
import {userSigninReducer, userRegisterReducer, userUpdateReducer} from './reducers/userReducers';
import { projectsReducer } from './reducers/projectReducer';
import { cartReducer } from './reducers/cartReducer';
import { articulosReducer } from './reducers/articuloReducer';
import { productListReducer} from './reducers/productReducer';
import { orderCreateReducer,
  orderDetailsReducer ,
  orderPayReducer ,
  myOrderListReducer ,
  orderListReducer ,
  orderDeleteReducer ,} from './reducers/orderReducer';



const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  
  userSignin: { userInfo },
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
  orderDetails : orderDetailsReducer ,
  myOrderList : myOrderListReducer ,
  orderList : orderListReducer ,
  orderDelete : orderDeleteReducer ,
  orderPay : orderPayReducer ,
  

 

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;