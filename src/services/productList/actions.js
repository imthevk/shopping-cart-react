import { SORT_PRODUCTS, OPEN_FILTERS, FILTER_PRODUCTS } from 'services/actionTypes';
import dataProducts from 'data';

export const sortProducts = (value, products) => {
  if (value === 'latest') {
    products.sort((a, b) => b.addedDate - a.addedDate);
  } else if (value === 'lowestprice') {
    products.sort((a, b) => a.price - b.price);
  } else if (value === 'highestprice') {
    products.sort((a, b) => b.price - a.price);
  }
  return {
    type: SORT_PRODUCTS,
    payload: products,
  };
};

export const openFilters = () => ({
  type: OPEN_FILTERS,
});

export const filterProducts = (filterType, value, activeFilters, isRange) => {
  let newProductList = [];
  const allProducts = dataProducts;
  let newActiveFilters = activeFilters;
  if (newActiveFilters[filterType]) {
    if (newActiveFilters[filterType].includes(value)) {
      newActiveFilters[filterType] = newActiveFilters[filterType].filter(
        option => option !== value,
      );
      if (newActiveFilters[filterType].length === 0) {
        delete newActiveFilters[filterType];
      }
    } else {
      newActiveFilters[filterType].push(value);
    }
  } else {
    newActiveFilters = { ...newActiveFilters, [filterType]: [value] };
  }

  const activeFiltersKeys = Object.keys(newActiveFilters);

  if (activeFiltersKeys.length === 0) {
    newProductList = allProducts;
  } else {
    activeFiltersKeys.forEach((filter, index) => {
      if (index === 0 || isRange) {
        newProductList = allProducts.filter(product => {
          const incomingProductId = product.id;
          let isProductRepeat = false;
          let addProduct = false;

          newProductList.forEach(item => {
            if (item.id === incomingProductId) {
              isProductRepeat = true;
            }
          });

          if (!isProductRepeat) {
            addProduct = product[filter].some(item => newActiveFilters[filter].includes(item));
          }

          return addProduct;
        });
      } else {
        newProductList = newProductList.filter(product => {
          let addProduct = false;

          addProduct = product[filter].some(item => newActiveFilters[filter].includes(item));

          return addProduct;
        });
      }
    });
  }
  return {
    type: FILTER_PRODUCTS,
    payload: {
      newActiveFilters,
      newProductList,
    },
  };
};
