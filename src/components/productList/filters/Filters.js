import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/button/ButtonIcon';
import close from 'assets/icons/close.svg';

const FiltersWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  width: 100vw;
  height: 100vh;
  max-width: 500px;
  padding: 0 30px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s;
  /* border-right: 2px solid black; */
  transform: ${({ isFiltersOpen }) => (isFiltersOpen ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: -5px 2px 20px rgba(0, 0, 0, 0.25), 0 0px 0px rgba(0, 0, 0, 0.22);
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid lightgrey;
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
`;

const CloseFilters = styled(ButtonIcon)`
  position: absolute;
  padding: 0;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const FilterList = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
`;

const FilterWrapper = styled.div`
  padding: 40px 0;
`;

const FilterLabel = styled.h4`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
`;

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px;
  padding: 20px 0;
`;

const Option = styled(ButtonIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: hsl(195, 100%, 40%);
  border-style: solid;
  border-width: 3px;
  border-color: ${({ active }) => (active ? 'hsl(195, 100%, 40%)' : 'transparent')};
  background-color: ${({ color }) => color || 'hsl(194.1, 63%, 89.4%)'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    border: 3px solid hsl(195, 100%, 40%);
    background-color: ${({ color }) => color || 'hsl(194.1, 63%, 89.4%)'};
  }
`;

const filters = {
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  colors: ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'gray', 'black', 'white'],
};

class Filters extends React.Component {
  state = {
    activeFilter: [],
  };

  handleActiveFilter = (filterType, value, filterProducts) => {
    let { activeFilter } = this.state;
    if (activeFilter.includes(value)) {
      activeFilter = activeFilter.filter(filter => filter !== value);
    } else {
      activeFilter.push(value);
    }
    filterProducts(filterType, value);
    this.setState({
      activeFilter,
    });
  };

  render() {
    const { activeFilter } = this.state;
    const { isFiltersOpen, openFilters, filterProducts } = this.props;
    const sizes = filters.sizes.map(size => (
      <Option
        key={size}
        active={activeFilter.includes(size) && true}
        onClick={() => this.handleActiveFilter('sizes', size, filterProducts)}
      >
        {size}
      </Option>
    ));
    const colors = filters.colors.map(color => (
      <Option
        key={color}
        active={activeFilter.includes(color) && true}
        color={color}
        onClick={() => this.handleActiveFilter('colors', color, filterProducts)}
      />
    ));

    return (
      <FiltersWrapper isFiltersOpen={isFiltersOpen}>
        <HeadingWrapper>
          <Heading>Filter</Heading>
          <CloseFilters icon={close} onClick={openFilters} />
        </HeadingWrapper>
        <FilterList>
          <FilterWrapper>
            <FilterLabel>Size</FilterLabel>
            <OptionsWrapper>{sizes}</OptionsWrapper>
          </FilterWrapper>
          <FilterWrapper>
            <FilterLabel>Color</FilterLabel>
            <OptionsWrapper>{colors}</OptionsWrapper>
          </FilterWrapper>
        </FilterList>
      </FiltersWrapper>
    );
  }
}

Filters.propTypes = {
  isFiltersOpen: PropTypes.bool.isRequired,
  openFilters: PropTypes.func.isRequired,
  filterProducts: PropTypes.func.isRequired,
};

export default Filters;
