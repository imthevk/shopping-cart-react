import React from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import PropTypes from 'prop-types';
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
  background-color: white;
  font-size: 1.4rem;
  text-align: center;
`;

const Remove = styled(ButtonIcon)`
  &:hover {
    background-color: red;
  }
`;

const CartItem = ({ product }) => {
  const { id, title, img, price, quantity } = product;
  return (
    <AppContext.Consumer>
      {context => (
        <ItemWrapper>
          <ItemImage src={img} alt={title} />
          <InnerWrapper>
            <Title>{title}</Title>
            <Price>{price}$</Price>
            <QuantityForm>
              <QuantityButton
                type="button"
                value="-"
                onClick={() => context.itemQuantity('minus', id)}
              />
              <QuantityInput type="text" value={quantity} name={id} disabled />
              <QuantityButton
                type="button"
                value="+"
                onClick={() => context.itemQuantity('plus', id)}
              />
            </QuantityForm>
          </InnerWrapper>
          <Remove icon={remove} onClick={() => context.deleteItem(id, price, quantity)} />
        </ItemWrapper>
      )}
    </AppContext.Consumer>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
