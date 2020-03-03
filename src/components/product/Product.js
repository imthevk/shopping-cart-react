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

const AvailableOptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;
`;

const AvailableOptionsLabel = styled(MediumLabel)`
  flex-basis: 100%;
  text-align: left;
  font-weight: 400;
  margin-bottom: 10px;
`;

const AvailableOption = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  flex-basis: 15px;
  height: 15px;
  background-color: ${({ color }) => color || 'white'};
  border-radius: 50%;
  font-size: 1.2rem;
  color: gray;
  box-shadow: ${({ color }) =>
    color ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' : 'none'};
`;

const Product = props => {
  const { product, addProduct } = props;
  const { title, price, img, sizes, colors } = product;

  const availableColors = colors.map(color => <AvailableOption key={color} color={color} />);
  const availableSizes = sizes.map(size => <AvailableOption key={size}>{size}</AvailableOption>);

  return (
    <ProductWrapper>
      <ProductImg src={img} alt={title} />
      <InnerWrapper>
        <MediumLabel>{title}</MediumLabel>
        <Price>{price}$</Price>
        <AvailableOptionsWrapper>
          <AvailableOptionsLabel>Available colors</AvailableOptionsLabel>
          {availableColors}
        </AvailableOptionsWrapper>

        <AvailableOptionsWrapper>
          <AvailableOptionsLabel>Available sizes</AvailableOptionsLabel>
          {availableSizes}
        </AvailableOptionsWrapper>
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
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product)),
});

export default connect(null, mapDispatchToProps)(Product);
