import React from 'react';
import styled from 'styled-components';
import Product from 'components/product/Product';
import device from 'responsive/Device';

const ProductsListwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  justify-content: center;
  grid-gap: 30px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 300px);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 300px);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 300px);
  }
`;

const ProductsList = () => {
  return (
    <ProductsListwrapper>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductsListwrapper>
  );
};

export default ProductsList;
