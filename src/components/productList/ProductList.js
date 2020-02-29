import React from 'react';
import styled from 'styled-components';
import MediumLabel from 'components/label/MediumLabel';
import Sort from 'components/productList/sort/Sort';
import PropTypes from 'prop-types';
import Product from 'components/product/Product';
import device from 'responsive/Device';
import { connect } from 'react-redux';
import { sortProducts as sortProductsAction } from 'services/productList/actions';

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  /* grid-auto-columns: 300px; */
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  position: relative;
  margin: 0 auto;
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

const ProductListLabel = styled(MediumLabel)`
  text-align: left;
  font-size: 3rem;
  color: hsl(195, 100%, 40%);
  padding: 40px 0;
  margin: 0 auto;
`;

const ProductList = ({ data, sortProducts }) => {
  const products = data.map(product => <Product key={product.id} product={product} />);
  return (
    <>
      <ProductListLabel>React Shopping Cart</ProductListLabel>
      <Sort sortProducts={sortProducts} products={data} />
      <ProductListWrapper>{products}</ProductListWrapper>
    </>
  );
};

ProductList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sortProducts: (value, products) => dispatch(sortProductsAction(value, products)),
});

const mapStateToProps = state => {
  const { data } = state.productList;
  return { data };
  //  zwraca obiekt z propsem który zostanie podany do tego komponentu
};
//  można to zapisac też w krótszy sposób:
//  const mapStateToProps = ({data}) => ({data});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
// connect przyjmuje z prawej strony komponent a z lewej mapStateToProps oraz mapDispatchToProps
