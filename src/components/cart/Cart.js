import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/button/Button';
import ButtonIcon from 'components/button/ButtonIcon';
import MediumLabel from 'components/label/MediumLabel';
import close from 'assets/icons/close.svg';
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
  top: 0;
  right: 0;
  transition: 0.4s;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
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

const Cart = props => {
  const { isOpen } = props;
  return (
    <CartWrapper isOpen={isOpen}>
      <HeadingWrapper>
        <Heading>Your Cart</Heading>
        <CloseCart icon={close} />
      </HeadingWrapper>
      <ItemsWrapper>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ItemsWrapper>
      <SummaryWrapper>
        <TotalWrapper>
          <Total>Total</Total>
          <Price>0.00$</Price>
        </TotalWrapper>
        <Button>Checkout</Button>
        <Button color="grey">Clear basket</Button>
      </SummaryWrapper>
    </CartWrapper>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Cart;
