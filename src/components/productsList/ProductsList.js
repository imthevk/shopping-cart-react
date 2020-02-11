import React from 'react';
import styled from 'styled-components';
import Product from 'components/product/Product';

const ProductsListwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  justify-content: center;
  grid-gap: 30px;
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
