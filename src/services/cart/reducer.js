import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  CLOSE_CART,
  OPEN_CART,
  CLEAR_BASKET,
} from 'services/actionTypes';

const initialState = {
  isCartOpen: false,
  products: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: action.payload.newProductList,
        isCartOpen: true,
        totalPrice: state.totalPrice + action.payload.priceToAdd,
      };
    }

    case REMOVE_PRODUCT: {
      return {
        ...state,
        products: action.payload.newProductList,
        totalPrice: state.totalPrice - action.payload.priceToRemove,
      };
    }

    case CHANGE_PRODUCT_QUANTITY: {
      return {
        ...state,
        products: action.payload.newProductList,
        totalPrice: state.totalPrice + action.payload.priceToChange,
      };
    }

    case OPEN_CART: {
      return {
        ...state,
        isCartOpen: true,
      };
    }

    case CLOSE_CART:
      return {
        ...state,
        isCartOpen: false,
      };

    case CLEAR_BASKET:
      return {
        ...state,
        products: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
