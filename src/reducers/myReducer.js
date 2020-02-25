const initialState = {
  productsInCart: [],
};

const myReducer = (state = initialState, { type, item }) => {
  switch (type) {
    case 'FETCH_ITEM_SUCCESS':
      return {
        productsInCart: [...state.productsInCart, item],
      };
    default:
      return state;
  }
};

export default myReducer;
