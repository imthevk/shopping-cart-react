import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 40px;
  width: 40px;
  background-color: lightgrey;
  color: white;
  border-radius: 50%;
  border: none;
  transition: 0.2s;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default ButtonIcon;
