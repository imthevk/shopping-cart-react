import React from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Cart from 'components/cart/Cart';
import ProductList from 'components/productList/ProductList';
import GlobalStyle from 'theme/GlobalStyle';
import { Provider } from 'react-redux';
import store from 'services/store';
// import { itemFetched } from 'actions';

const ViewWrapper = styled.div`
  position: relative;
  background-color: white;
`;

const Blur = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.2s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.9);
`;

class App extends React.Component {
  state = {
    cartIsOpen: false,
    productsInCart: [],
    totalPrice: 0,
  };

  addToCartHandle = product => {
    const { id, price } = product;
    let { productsInCart, totalPrice } = this.state;

    const itemPos = productsInCart.map(item => item.id).indexOf(id);

    if (itemPos !== -1) {
      productsInCart[itemPos].quantity += 1;
    } else {
      const item = { ...product, quantity: 1 };
      productsInCart = [...productsInCart, item];
    }

    totalPrice += price;

    this.setState({
      cartIsOpen: true,
      productsInCart,
      totalPrice,
    });
  };

  closeCartHandle = () => {
    this.setState({
      cartIsOpen: false,
    });
  };

  clearBasketHandle = () => {
    this.setState({
      productsInCart: [],
      totalPrice: 0,
    });
  };

  deleteItemHandle = (productId, price, quantity) => {
    let { productsInCart, totalPrice } = this.state;
    productsInCart = productsInCart.filter(product => product.id !== productId);
    totalPrice -= price * quantity;

    this.setState({
      productsInCart,
      totalPrice,
    });
  };

  quantityButtonHandle = (btnType, productId) => {
    let { totalPrice } = this.state;
    const { productsInCart } = this.state;

    const productPos = productsInCart.findIndex(product => product.id === productId);

    const quantityItem = productsInCart[productPos].quantity;

    if (quantityItem > 1) {
      if (btnType === 'plus') {
        productsInCart[productPos].quantity += 1;
        totalPrice += productsInCart[productPos].price;
      } else {
        productsInCart[productPos].quantity -= 1;
        totalPrice -= productsInCart[productPos].price;
      }
    } else if (quantityItem === 1 && btnType === 'plus') {
      productsInCart[productPos].quantity += 1;
      totalPrice += productsInCart[productPos].price;
    }

    this.setState({
      productsInCart,
      totalPrice,
    });
  };

  render() {
    const { cartIsOpen, productsInCart, totalPrice } = this.state;
    const contextElements = {
      addToCart: this.addToCartHandle,
      closeCart: this.closeCartHandle,
      deleteItem: this.deleteItemHandle,
      itemQuantity: this.quantityButtonHandle,
      inputQuantity: this.quantityInputHandle,
    };

    return (
      <Provider store={store}>
        <AppContext.Provider value={contextElements}>
          <ViewWrapper>
            <ProductList />
            <Blur isOpen={cartIsOpen} />
          </ViewWrapper>
          <Cart
            isOpen={cartIsOpen}
            products={productsInCart}
            closeCart={this.closeCartHandle}
            clearBasket={this.clearBasketHandle}
            totalPrice={totalPrice}
          />
          <GlobalStyle />
        </AppContext.Provider>
      </Provider>
    );
  }
}

export default App;
