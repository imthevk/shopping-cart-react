import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  CLOSE_CART,
  CLEAR_BASKET,
} from 'services/cart/actionTypes';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product,
});

export const changeProductQuantity = (btnType, product) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: { btnType, product },
});

export const closeCart = () => ({
  type: CLOSE_CART,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
