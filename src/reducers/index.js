const initialState = {
  data: [
    {
      id: 1,
      title: 'Jacket',
      price: 379,
      img: 'https://source.unsplash.com/300x400',
    },
    {
      id: 2,
      title: 'Jeans',
      price: 249,
      img: 'https://source.unsplash.com/300x400',
    },
    {
      id: 3,
      title: 'Sweatshirt',
      price: 79,
      img: 'https://source.unsplash.com/300x400',
    },
    {
      id: 4,
      title: 'Socks',
      price: 24,
      img: 'https://source.unsplash.com/300x400',
    },
    {
      id: 5,
      title: 'Hoody',
      price: 129,
      img: 'https://source.unsplash.com/300x400',
    },
    {
      id: 6,
      title: 'Boots',
      price: 289,
      img: 'https://source.unsplash.com/300x400',
    },
  ],
};

const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
