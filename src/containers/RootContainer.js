import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cart from 'components/cart/Cart';
import ButtonIcon from 'components/button/ButtonIcon';
import ProductList from 'components/productList/ProductList';
import cart from 'assets/icons/cart.svg';
import GlobalStyle from 'theme/GlobalStyle';
import { connect } from 'react-redux';

import { openCart as openCartAction } from 'services/cart/actions';

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

const CartButton = styled(ButtonIcon)`
  height: 60px;
  width: 60px;
  position: fixed;
  top: 100vh;
  right: 50px;
  transform: translateY(calc(-100% - 50px));
  border-radius: 50%;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  background-color: ${({ color }) => color || 'hsl(195, 100%, 40%)'};
  &:hover {
    transform: translateY(calc(-100% - 50px)) scale(1.1);
  }
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
    const { isOpen, openCart } = this.props;

    return (
      <>
        <ViewWrapper>
          <ProductList />
          <Blur isOpen={isOpen} />
        </ViewWrapper>
        <Cart />
        <CartButton icon={cart} onClick={openCart} />
        <GlobalStyle />
      </>
    );
  }
}

AppContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { isOpen } = state.cart;
  return { isOpen };
};

const mapDispatchToProps = dispatch => ({
  openCart: () => dispatch(openCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
