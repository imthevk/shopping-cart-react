import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Product from 'components/product/Product';
import device from 'responsive/Device';

const ProductsListwrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  justify-content: center;
  grid-gap: 30px;
  position: relative;
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

const ProductsList = props => {
  const { addToCart } = props;

  return (
    <ProductsListwrapper>
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
      <Product addToCart={addToCart} />
    </ProductsListwrapper>
  );
};

ProductsList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductsList;
