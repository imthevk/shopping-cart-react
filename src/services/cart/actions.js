import { ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from 'services/cart/actionTypes';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = products => ({
  type: REMOVE_PRODUCT,
  payload: products,
});

export const changeProductQuantity = products => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: products,
});
