import styled from 'styled-components';

const CartButton = styled.button`
  height: 60px;
  width: 60px;
  position: fixed;
  top: 100vh;
  right: 50px;
  transform: translateY(calc(-100% - 50px));
  border-radius: 50%;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  background-color: ${({ color }) => color || 'hsl(195, 100%, 40%)'};
  &:hover {
    background-color: black;
  }
`;

export default CartButton;
