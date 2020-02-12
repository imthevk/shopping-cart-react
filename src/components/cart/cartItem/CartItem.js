import React from 'react';
import styled from 'styled-components';
import MediumLabel from 'components/label/MediumLabel';
import ButtonIcon from 'components/button/ButtonIcon';
import remove from 'assets/icons/remove.svg';

const ItemWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 90px 1fr 40px;
  grid-gap: 15px;
  border-bottom: 1px solid lightgrey;
`;

const ItemImage = styled.img`
  width: 100%;
  min-height: 120px;
  display: block;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(MediumLabel)`
  text-align: left;
  margin: 0;
`;

const Price = styled.span`
  text-align: left;
  margin: 5px 0 10px;
  font-size: 1.4rem;
  font-weight: 400;
`;

const QuantityForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: 40px;
  grid-gap: 3px;
`;

const QuantityButton = styled.input`
  border: 1px solid lightgrey;
  background-color: white;
  font-size: 1.4rem;
  transition: 0.2s;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const QuantityInput = styled.input`
  border: 1px solid lightgrey;
  font-size: 1.4rem;
  text-align: center;
`;

const Remove = styled(ButtonIcon)`
  &:hover {
    background-color: red;
  }
`;

const CartItem = () => {
  return (
    <ItemWrapper>
      <ItemImage src="https://source.unsplash.com/90x120" alt="product_photo" />
      <InnerWrapper>
        <Title>Pie Shiba Inu</Title>
        <Price>24.99zł</Price>
        <QuantityForm>
          <QuantityButton type="button" value="-" />
          <QuantityInput type="text" />
          <QuantityButton type="button" value="+" />
        </QuantityForm>
      </InnerWrapper>
      <Remove icon={remove} />
    </ItemWrapper>
  );
};

export default CartItem;
