export const addToCart = (id, price) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id,
      price,
    },
  };
};
