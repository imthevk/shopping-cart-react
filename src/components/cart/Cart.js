import React from 'react';
import styled from 'styled-components';
import Button from 'components/button/Button';
import ButtonIcon from 'components/button/ButtonIcon';
import MediumLabel from 'components/label/MediumLabel';
import CartItem from './cartItem/CartItem';

const CartWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 150px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
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
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const Total = styled(MediumLabel)`
  font-size: 1.8rem;
  font-weight: 400;
`;

const Price = styled(MediumLabel)`
  font-size: 1.8rem;
`;

const Cart = () => {
  return (
    <CartWrapper>
      <HeadingWrapper>
        <Heading>Your Cart</Heading>
        <CloseCart />
      </HeadingWrapper>
      <ItemsWrapper>
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
      </SummaryWrapper>
    </CartWrapper>
  );
};

export default Cart;
