import {
  ADD_PRODUCT,
  // REMOVE_PRODUCT,
  // CHANGE_PRODUCT_QUANTITY
} from 'services/cart/actionTypes';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    const { products } = state;
    let product = action.payload;

    const newProductList = products;

    const productIndex = newProductList.map(item => item.id).indexOf(product.id);

    if (productIndex !== -1) {
      newProductList[productIndex].quantity += 1;
    } else {
      product = { ...product, quantity: 1 };
      newProductList.push(product);
    }

    return {
      ...state,
      products: [...newProductList],
    };
  }
  //   switch (action.type) {
  //     case ADD_PRODUCT:
  //       console.log(action);

  //       return {
  //         ...state,
  //         products: action.payload,
  //       };
  //     case REMOVE_PRODUCT:
  //       console.log('usowanie');
  //       return {
  //         ...state,
  //         removeProduct: action.payload,
  //       };
  //     case CHANGE_PRODUCT_QUANTITY:
  //       console.log('zmiana ilosci');
  //       return {
  //         ...state,
  //         changeProductQuantity: action.payload,
  //       };
  //     default:
  //       return state;
  //   }

  return state;
};

export default cartReducer;
