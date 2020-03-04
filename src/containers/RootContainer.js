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
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
`;

const Blur = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.2s;
  opacity: ${({ isCartOpen }) => (isCartOpen ? 1 : 0)};
  visibility: ${({ isCartOpen }) => (isCartOpen ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.9);
`;

const CartButton = styled(ButtonIcon)`
  height: 60px;
  width: 60px;
  position: fixed;
  top: 100vh;
  right: 40px;
  transform: translateY(calc(-100% - 30px));
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
    transform: translateY(calc(-100% - 30px)) scale(1.1);
  }
`;

const AppContainer = ({ isCartOpen, openCart }) => {
  return (
    <>
      <ViewWrapper>
        <ProductList />
        <Blur isCartOpen={isCartOpen} />
      </ViewWrapper>
      <Cart />
      <CartButton icon={cart} onClick={openCart} />
      <GlobalStyle />
    </>
  );
};

AppContainer.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  openCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { isCartOpen } = state.cart;
  return { isCartOpen };
};

const mapDispatchToProps = dispatch => ({
  openCart: () => dispatch(openCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
