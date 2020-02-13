import React from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import PropTypes from 'prop-types';
import Button from 'components/button/Button';
import MediumLabel from 'components/label/MediumLabel';

const ProductImg = styled.img`
  min-height: 400px;
  display: block;
`;

const ProductWrapper = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
`;

const Price = styled.span`
  display: block;
  text-align: center;
  margin: 0 0 20px;
  font-size: 1.4rem;
  font-weight: 400;
`;

const AddToCart = styled(Button)`
  width: 100%;
`;

const Product = ({ product }) => {
  const { title, price, img } = product;
  return (
    <AppContext.Consumer>
      {context => (
        <ProductWrapper>
          <ProductImg src={img} alt={title} />
          <InnerWrapper>
            <MediumLabel>{title}</MediumLabel>
            <Price>{price}</Price>
            <AddToCart onClick={() => context.addToCart(product)}>Add to cart</AddToCart>
          </InnerWrapper>
        </ProductWrapper>
      )}
    </AppContext.Consumer>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Product;
