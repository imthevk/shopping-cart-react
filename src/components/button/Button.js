import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ color }) => color || 'hsl(195, 100%, 40%)'};
  &:hover {
    background-color: black;
  }
`;

export default Button;
