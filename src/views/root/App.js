import React from 'react';
import styled from 'styled-components';
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
  };

  addToCartHandle = () => {
    this.setState(prevState => ({
      cartIsOpen: !prevState.cartIsOpen,
    }));
  };

  render() {
    const { cartIsOpen } = this.state;

    return (
      <>
        <GlobalStyle />
        <ViewWrapper>
          <ProductsList addToCart={this.addToCartHandle} />
          <Blur isOpen={cartIsOpen} />
        </ViewWrapper>
        <Cart isOpen={cartIsOpen} />
      </>
    );
  }
}

export default App;
