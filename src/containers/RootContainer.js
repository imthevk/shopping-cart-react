import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cart from 'components/cart/Cart';
import ProductList from 'components/productList/ProductList';
import GlobalStyle from 'theme/GlobalStyle';
import { connect } from 'react-redux';

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

class AppContainer extends React.Component {
  state = {
    productsInCart: [],
    totalPrice: 0,
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
    const { isOpen } = this.props;

    return (
      <>
        <ViewWrapper>
          <ProductList />
          <Blur isOpen={isOpen} />
        </ViewWrapper>
        <Cart />
        <GlobalStyle />
      </>
    );
  }
}

AppContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { isOpen } = state.cart;
  return { isOpen };
};

export default connect(mapStateToProps)(AppContainer);
