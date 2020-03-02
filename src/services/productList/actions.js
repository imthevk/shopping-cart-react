import { SORT_PRODUCTS, OPEN_FILTERS, FILTER_PRODUCTS } from 'services/productList/actionTypes';

export const sortProducts = (value, products) => ({
  type: SORT_PRODUCTS,
  payload: { value, products },
});

export const openFilters = () => ({
  type: OPEN_FILTERS,
});

export const filterProducts = (filterType, value) => ({
  type: FILTER_PRODUCTS,
  payload: { filterType, value },
});
