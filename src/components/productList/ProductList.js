import React from 'react';
import styled from 'styled-components';
import MediumLabel from 'components/label/MediumLabel';
import PropTypes from 'prop-types';
import Product from 'components/product/Product';
import device from 'responsive/Device';
import { connect } from 'react-redux';

const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  justify-content: center;
  grid-gap: 30px;
  position: relative;
  max-width: 1500px;
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

const ProductsListLabel = styled(MediumLabel)`
  text-align: left;
  font-size: 3rem;
  color: hsl(195, 100%, 40%);
  padding: 40px 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

const ProductsList = ({ data }) => {
  const products = data.map(product => <Product key={product.id} product={product} />);
  return (
    <>
      <ProductsListLabel>React Shopping Cart</ProductsListLabel>
      <ProductsListWrapper>{products}</ProductsListWrapper>
    </>
  );
};

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { data } = state.productList;
  return { data };
  //  zwraca obiekt z propsem który zostanie podany do tego komponentu
};
//  mozna to zapisac też w krótszy sposób:
//  const mapStateToProps = ({data}) => ({data});

export default connect(mapStateToProps)(ProductsList);
// connect przyjmuje z prawej strony komponent a z lewej mapStateToProps
