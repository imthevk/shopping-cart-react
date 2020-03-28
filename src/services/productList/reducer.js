import { SORT_PRODUCTS, OPEN_FILTERS, FILTER_PRODUCTS } from 'services/actionTypes';
import dataProducts from 'data';

const initialState = {
  data: dataProducts,
  isFiltersOpen: false,
  activeFilters: {},
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS: {
      return {
        ...state,
        data: [...action.payload],
      };
    }

    case OPEN_FILTERS:
      return {
        ...state,
        isFiltersOpen: !state.isFiltersOpen,
      };

    case FILTER_PRODUCTS: {
      return {
        ...state,
        data: action.payload.newProductList,
        activeFilters: action.payload.newActiveFilters,
      };
    }

    default:
      return state;
  }
};

export default productListReducer;
