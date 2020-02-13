import React from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Cart from 'components/cart/Cart';
import ProductsList from 'views/productsList/ProductsList';
import GlobalStyle from 'theme/GlobalStyle';

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
  };

  addToCartHandle = product => {
    const { id } = product;
    const { productsInCart } = this.state;
    let inBasket = [...productsInCart];

    const itemPos = inBasket.map(item => item.id).indexOf(id);

    if (itemPos !== -1) {
      inBasket[itemPos].quantity += 1;
      this.setState({
        cartIsOpen: true,
        productsInCart: inBasket,
      });
    } else {
      const item = { ...product, quantity: 1 };
      inBasket = [...inBasket, item];
      this.setState({
        cartIsOpen: true,
        productsInCart: inBasket,
      });
    }
  };

  closeCartHandle = () => {
    this.setState({
      cartIsOpen: false,
    });
  };

  render() {
    const { cartIsOpen } = this.state;
    const contextElements = {
      addToCart: this.addToCartHandle,
      closeCart: this.closeCartHandle,
    };

    return (
      <AppContext.Provider value={contextElements}>
        <GlobalStyle />
        <ViewWrapper>
          <ProductsList />
          <Blur isOpen={cartIsOpen} />
        </ViewWrapper>
        <Cart isOpen={cartIsOpen} closeCart={this.closeCartHandle} />
      </AppContext.Provider>
    );
  }
}

export default App;
