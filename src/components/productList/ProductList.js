import React from 'react';
import styled from 'styled-components';
import MediumLabel from 'components/label/MediumLabel';
import Filters from 'components/productList/filters/Filters';
import Sort from 'components/productList/sort/Sort';
import Button from 'components/button/Button';
import PropTypes from 'prop-types';
import Product from 'components/product/Product';
import device from 'responsive/Device';
import { connect } from 'react-redux';
import {
  sortProducts as sortProductsAction,
  openFilters as openFiltersAction,
  filterProducts as filterProductsAction,
} from 'services/productList/actions';

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px);
  /* grid-auto-columns: 300px; */
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  position: relative;
  margin: 0 auto;
  padding-top: 40px;
  clear: both;
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

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`;

const FilterButton = styled(Button)`
  float: left;
  margin: 0;
  padding: 10px 30px;
  width: 100%;
  @media ${device.mobileL} {
    width: auto;
  }
`;

const ProductList = ({
  data,
  sortProducts,
  openFilters,
  isFiltersOpen,
  filterProducts,
  activeFilters,
}) => {
  const products = data.map(product => <Product key={product.id} product={product} />);

  return (
    <>
      <ProductListLabel>React Shopping Cart</ProductListLabel>
      <FilterBar>
        <FilterButton onClick={openFilters}>Filter</FilterButton>
        <Sort sortProducts={sortProducts} products={data} />
      </FilterBar>
      <ProductListWrapper>{products}</ProductListWrapper>
      <Filters
        isFiltersOpen={isFiltersOpen}
        openFilters={openFilters}
        filterProducts={filterProducts}
        activeFilters={activeFilters}
        data={data}
      />
    </>
  );
};

ProductList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortProducts: PropTypes.func.isRequired,
  isFiltersOpen: PropTypes.bool.isRequired,
  openFilters: PropTypes.func.isRequired,
  filterProducts: PropTypes.func.isRequired,
  activeFilters: PropTypes.shape().isRequired,
};

const mapDispatchToProps = dispatch => ({
  sortProducts: (value, products) => dispatch(sortProductsAction(value, products)),
  openFilters: () => dispatch(openFiltersAction()),
  filterProducts: (filterType, value, activeFilter) =>
    dispatch(filterProductsAction(filterType, value, activeFilter)),
});

const mapStateToProps = state => {
  const { data, isFiltersOpen, activeFilters } = state.productList;
  return { data, isFiltersOpen, activeFilters };
  //  zwraca obiekt z propsem który zostanie podany do tego komponentu
};
//  można to zapisac też w krótszy sposób:
//  const mapStateToProps = ({data}) => ({data});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
// connect przyjmuje z prawej strony komponent a z lewej mapStateToProps oraz mapDispatchToProps
