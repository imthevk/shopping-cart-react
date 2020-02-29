import SORT_PRODUCTS from 'services/productList/actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Jacket',
      price: 379,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1578787200 /* mm/dd/yyyy 01/12/2020 */,
    },
    {
      id: 2,
      title: 'Jeans',
      price: 249,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1566259200 /* 08/20/2019 */,
    },
    {
      id: 3,
      title: 'Sweatshirt',
      price: 79,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1575504000 /* 12/05/2019 */,
    },
    {
      id: 4,
      title: 'Socks',
      price: 24,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1581638400 /* 02/14/2020 */,
    },
    {
      id: 5,
      title: 'Hoody',
      price: 129,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1556755200 /* 05/02/2019 */,
    },
    {
      id: 6,
      title: 'Boots',
      price: 289,
      img: 'https://source.unsplash.com/300x400',
      addedDate: 1562284800 /* 07/05/2019 */,
    },
  ],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS: {
      const { value, products } = action.payload;
      if (value === 'latest') {
        products.sort((a, b) => b.addedDate - a.addedDate);
      } else if (value === 'lowestprice') {
        products.sort((a, b) => a.price - b.price);
      } else if (value === 'highestprice') {
        products.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        data: [...products],
      };
    }

    default:
      return state;
  }
};

export default productListReducer;
