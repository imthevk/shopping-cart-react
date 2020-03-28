import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_PRODUCT_QUANTITY,
  OPEN_CART,
  CLOSE_CART,
  CLEAR_BASKET,
} from 'services/actionTypes';

export const addProduct = (product, products) => {
  const index = products.map(item => item.id).indexOf(product.id);
  const newProductList = products;
  const priceToAdd = product.price;
  if (index !== -1) {
    newProductList[index].quantity += 1;
  } else {
    const newProduct = { ...product, quantity: 1 };
    newProductList.push(newProduct);
  }
  return {
    type: ADD_PRODUCT,
    payload: { newProductList, priceToAdd },
  };
};

export const removeProduct = (product, products) => {
  const newProductList = products.filter(item => item.id !== product.id);
  const priceToRemove = product.price * product.quantity;
  return {
    type: REMOVE_PRODUCT,
    payload: { newProductList, priceToRemove },
  };
};

export const changeProductQuantity = (btnType, product, products) => {
  const newProductList = products;
  let priceToChange = product.price;
  const index = newProductList.findIndex(item => item.id === product.id);

  if (product.quantity > 1) {
    if (btnType === 'plus') {
      newProductList[index].quantity += 1;
    } else {
      newProductList[index].quantity -= 1;
      priceToChange *= -1;
    }
  } else if (product.quantity === 1 && btnType === 'plus') {
    newProductList[index].quantity += 1;
  }

  return {
    type: CHANGE_PRODUCT_QUANTITY,
    payload: { newProductList, priceToChange },
  };
};

export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});
