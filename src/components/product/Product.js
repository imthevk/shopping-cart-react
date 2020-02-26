import React from 'react';
import styled from 'styled-components';
// import AppContext from 'context';
import PropTypes from 'prop-types';
import Button from 'components/button/Button';
import MediumLabel from 'components/label/MediumLabel';
import { connect } from 'react-redux';
import { addProduct as addProductAction } from 'services/cart/actions';

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

const Product = props => {
  const { product, addProduct } = props;
  const { title, price, img } = product;
  return (
    <ProductWrapper>
      <ProductImg src={img} alt={title} />
      <InnerWrapper>
        <MediumLabel>{title}</MediumLabel>
        <Price>{price}$</Price>
        <AddToCart onClick={() => addProduct(product)}>Add to cart</AddToCart>
      </InnerWrapper>
    </ProductWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
});

export default connect(null, mapDispatchToProps)(Product);
