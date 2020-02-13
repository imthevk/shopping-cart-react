import React from 'react';
import styled from 'styled-components';
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

const data = [
  {
    id: 1,
    title: 'Jacket',
    price: '379.00',
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 2,
    title: 'Jeans',
    price: '249.00',
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 3,
    title: 'Sweatshirt',
    price: '79.00',
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 4,
    title: 'Socks',
    price: '24.00',
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 5,
    title: 'Hoody',
    price: '129.00',
    img: 'https://source.unsplash.com/300x400',
  },
  {
    id: 6,
    title: 'Boots',
    price: '289.00',
    img: 'https://source.unsplash.com/300x400',
  },
];

class ProductsList extends React.Component {
  state = {};

  render() {
    const products = data.map(product => <Product key={product.id} product={product} />);
    return <ProductsListwrapper>{products}</ProductsListwrapper>;
  }
}

export default ProductsList;
