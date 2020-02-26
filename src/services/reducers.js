import { combineReducers } from 'redux';
import cartReducer from 'services/cart/reducer';
import productListReducer from 'services/productList/reducer';

export default combineReducers({
  cart: cartReducer,
  productList: productListReducer,
});
