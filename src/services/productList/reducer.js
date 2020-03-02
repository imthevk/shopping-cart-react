import { SORT_PRODUCTS, OPEN_FILTERS, FILTER_PRODUCTS } from 'services/productList/actionTypes';

const dataProducts = [
  {
    id: 1,
    title: 'Jacket',
    price: 379,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['red', 'green', 'blue', 'gray', 'black', 'white'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1578787200 /* mm/dd/yyyy 01/12/2020 */,
  },
  {
    id: 2,
    title: 'Jeans',
    price: 249,
    sizes: ['XS', 'XXL'],
    colors: ['red', 'green', 'blue', 'yellow', 'orange'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1566259200 /* 08/20/2019 */,
  },
  {
    id: 3,
    title: 'Sweatshirt',
    price: 79,
    sizes: ['S', 'M', 'L'],
    colors: ['black', 'white'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1575504000 /* 12/05/2019 */,
  },
  {
    id: 4,
    title: 'Socks',
    price: 24,
    sizes: ['S', 'L', 'XXL'],
    colors: ['red', 'blue', 'orange', 'pink', 'black', 'white'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1581638400 /* 02/14/2020 */,
  },
  {
    id: 5,
    title: 'Hoody',
    price: 129,
    sizes: ['XL', 'XXL'],
    colors: ['blue', 'yellow', 'orange', 'pink', 'gray'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1556755200 /* 05/02/2019 */,
  },
  {
    id: 6,
    title: 'Boots',
    price: 289,
    sizes: ['XS', 'S'],
    colors: ['red', 'green', 'yellow', 'orange', 'gray', 'black'],
    img: 'https://source.unsplash.com/300x400',
    addedDate: 1562284800 /* 07/05/2019 */,
  },
];

const initialState = {
  data: dataProducts,
  isFiltersOpen: false,
  activeFilters: {},
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

    case OPEN_FILTERS:
      return {
        ...state,
        isFiltersOpen: !state.isFiltersOpen,
      };

    case FILTER_PRODUCTS: {
      const { filterType, value } = action.payload;
      let { activeFilters } = state;
      let filteredList = dataProducts;

      if (activeFilters[filterType]) {
        if (activeFilters[filterType].includes(value)) {
          activeFilters[filterType] = activeFilters[filterType].filter(option => option !== value);
          if (activeFilters[filterType].length === 0) {
            delete activeFilters[filterType];
          }
        } else {
          activeFilters[filterType] = [...activeFilters[filterType], value];
        }
      } else {
        activeFilters = { ...activeFilters, [filterType]: [value] };
      }

      Object.keys(activeFilters).forEach((filter, index1) => {
        if (activeFilters[filter].length !== 0) {
          activeFilters[filter].forEach((filterValue, index2) => {
            if (index1 === 0 && index2 === 0) {
              filteredList = filteredList.filter(
                product =>
                  product[Object.keys(activeFilters)[0]].includes(
                    activeFilters[Object.keys(activeFilters)[0]][0],
                  ) === true,
              );
            } else {
              filteredList = filteredList.filter(
                product => product[filter].includes(filterValue) === true,
              );
            }
          });
        }
      });

      return {
        ...state,
        data: filteredList,
        activeFilters,
      };
    }

    default:
      return state;
  }
};

export default productListReducer;
