import React from 'react';
import styled from 'styled-components';
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

const Product = () => {
  return (
    <ProductWrapper>
      <ProductImg src="https://source.unsplash.com/300x400" alt="product_photo" />
      <InnerWrapper>
        <MediumLabel>Pies Shiba Inu</MediumLabel>
        <Price>24.99zł</Price>
        <AddToCart>Add to cart</AddToCart>
      </InnerWrapper>
    </ProductWrapper>
  );
};

export default Product;
