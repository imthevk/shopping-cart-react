import SORT_PRODUCTS from 'services/productList/actionTypes';

export const sortProducts = (value, products) => ({
  type: SORT_PRODUCTS,
  payload: { value, products },
});
