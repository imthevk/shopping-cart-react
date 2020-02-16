import React from 'react';
import styled from 'styled-components';
import MediumLabel from 'components/label/MediumLabel';
import Product from 'components/product/Product';
import device from 'responsive/Device';

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

const data = [
  {
    id: 1,
    title: 'Jacket',
    price: 379,
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 2,
    title: 'Jeans',
    price: 249,
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 3,
    title: 'Sweatshirt',
    price: 79,
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 4,
    title: 'Socks',
    price: 24,
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 5,
    title: 'Hoody',
    price: 129,
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 6,
    title: 'Boots',
    price: 289,
    img: 'https://source.unsplash.com/300x400',
  },
];

class ProductsList extends React.Component {
  state = {};

  render() {
    const products = data.map(product => <Product key={product.id} product={product} />);
    return (
      <>
        <ProductsListLabel>React Shopping Cart</ProductsListLabel>
        <ProductsListWrapper>{products}</ProductsListWrapper>
      </>
    );
  }
}

export default ProductsList;
