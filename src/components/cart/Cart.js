import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/button/Button';
import ButtonIcon from 'components/button/ButtonIcon';
import MediumLabel from 'components/label/MediumLabel';
import close from 'assets/icons/close.svg';
import { connect } from 'react-redux';
import {
  removeProduct as removeProductAction,
  changeProductQuantity as changeProductQuantityAction,
  closeCart as closeCartAction,
  clearBasket as clearBasketAction,
} from 'services/cart/actions';
import CartItem from './cartItem/CartItem';

const CartWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 200px;
  width: 100vw;
  height: 100vh;
  max-width: 500px;
  padding: 0 20px;
  background-color: white;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  transition: 0.4s;
  transform: ${({ isCartOpen }) => (isCartOpen ? 'translateX(0)' : 'translateX(100%)')};
  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid lightgrey;
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const CloseCart = styled(ButtonIcon)`
  position: absolute;
  padding: 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const ItemsWrapper = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  padding: 30px 0 10px;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
`;

const Total = styled(MediumLabel)`
  font-size: 1.8rem;
  font-weight: 400;
`;

const Price = styled(MediumLabel)`
  font-size: 1.8rem;
`;

const EmptyCart = styled.span`
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: lightgray;
  padding-top: 80px;
`;

const Cart = props => {
  const {
    isCartOpen,
    products,
    totalPrice,
    closeCart,
    clearBasket,
    removeProduct,
    changeProductQuantity,
  } = props;
  let renderItems;
  if (products.length !== 0) {
    renderItems = products.map(product => (
      <CartItem
        key={product.id}
        product={product}
        products={products}
        changeProductQuantity={changeProductQuantity}
        removeProduct={removeProduct}
      />
    ));
  } else {
    renderItems = <EmptyCart>Your cart is empty...</EmptyCart>;
  }
  return (
    <CartWrapper isCartOpen={isCartOpen}>
      <HeadingWrapper>
        <Heading>Your Cart</Heading>
        <CloseCart icon={close} onClick={closeCart} />
      </HeadingWrapper>
      <ItemsWrapper>{renderItems}</ItemsWrapper>
      <SummaryWrapper>
        <TotalWrapper>
          <Total>Total</Total>
          <Price>{totalPrice}$</Price>
        </TotalWrapper>
        <Button>Checkout</Button>
        <Button color="grey" onClick={clearBasket}>
          Clear basket
        </Button>
      </SummaryWrapper>
    </CartWrapper>
  );
};

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeCart: PropTypes.func.isRequired,
  clearBasket: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
  changeProductQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isCartOpen: state.cart.isCartOpen,
  products: state.cart.products,
  totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  closeCart: () => dispatch(closeCartAction()),
  clearBasket: () => dispatch(clearBasketAction()),
  removeProduct: (product, products) => dispatch(removeProductAction(product, products)),
  changeProductQuantity: (btnType, product, products) =>
    dispatch(changeProductQuantityAction(btnType, product, products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
