import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from 'responsive/Device';
import arrowDown from 'assets/icons/arrow-down.svg';

const options = [
  { value: '', label: 'Sort by' },
  { value: 'latest', label: 'Latest' },
  { value: 'lowestprice', label: 'Price: Low to high' },
  { value: 'highestprice', label: 'Price: High to low' },
];

const SortWrapper = styled.form`
  float: left;
  width: 100%;
  @media ${device.mobileL} {
    width: auto;
  }
`;

const SortSelect = styled.select`
  width: 100%;
  padding: 8px 40px 8px 20px;
  font-size: 1.4rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 50px;
  appearance: none;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: calc(100% - 15px) 7px;
`;

const SortOption = styled.option`
  font-size: 1.4rem;
`;

const Sort = ({ sortProducts, products }) => {
  const createOptions = options.map(option => (
    <SortOption value={option.value} key={option.value}>
      {option.label}
    </SortOption>
  ));

  return (
    <SortWrapper>
      <SortSelect onChange={e => sortProducts(e.target.value, products)}>
        {createOptions}
      </SortSelect>
    </SortWrapper>
  );
};

Sort.propTypes = {
  sortProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sort;
