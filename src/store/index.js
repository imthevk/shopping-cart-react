import { createStore } from 'redux';
import productsData from 'reducers';

const store = createStore(productsData);

export default store;
