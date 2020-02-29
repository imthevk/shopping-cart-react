import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const options = [
  { value: '', label: 'Sort by' },
  { value: 'latest', label: 'Latest' },
  { value: 'lowestprice', label: 'Price: Low to high' },
  { value: 'highestprice', label: 'Price: High to low' },
];

const SortWrapper = styled.form`
  padding-bottom: 40px;
`;

const SortSelect = styled.select`
  padding: 10px 15px;
  font-size: 1.4rem;
  border: 1px solid black;
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
