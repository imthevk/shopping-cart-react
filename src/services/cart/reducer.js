import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  CLOSE_CART,
  CLEAR_BASKET,
} from 'services/cart/actionTypes';

const initialState = {
  isOpen: false,
  products: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let product = action.payload;
      const newProductList = state.products;
      const productIndex = newProductList.map(item => item.id).indexOf(product.id);
      const total = state.totalPrice + product.price;
      if (productIndex !== -1) {
        newProductList[productIndex].quantity += 1;
      } else {
        product = { ...product, quantity: 1 };
        newProductList.push(product);
      }

      return {
        ...state,
        products: [...newProductList],
        isOpen: true,
        totalPrice: total,
      };
    }

    case REMOVE_PRODUCT: {
      const product = action.payload;
      const newProductList = state.products.filter(item => item.id !== product.id);
      const total = state.totalPrice - product.price * product.quantity;

      return {
        ...state,
        products: [...newProductList],
        totalPrice: total,
      };
    }

    case CHANGE_PRODUCT_QUANTITY: {
      const { btnType, product } = action.payload;
      const { products, totalPrice } = state;

      const newProductList = products;
      let total = totalPrice;

      const productPos = newProductList.findIndex(item => item.id === product.id);

      if (product.quantity > 1) {
        if (btnType === 'plus') {
          newProductList[productPos].quantity += 1;
          total += newProductList[productPos].price;
        } else {
          newProductList[productPos].quantity -= 1;
          total -= newProductList[productPos].price;
        }
      } else if (product.quantity === 1 && btnType === 'plus') {
        newProductList[productPos].quantity += 1;
        total += newProductList[productPos].price;
      }

      return {
        ...state,
        products: [...newProductList],
        totalPrice: total,
      };
    }

    case CLOSE_CART:
      return {
        ...state,
        isOpen: false,
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
