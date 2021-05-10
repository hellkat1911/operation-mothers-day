import styled from 'styled-components';

const Button = styled.button`
  background: #232323;
  border: 2px solid #232323;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  margin: ${props => props.margin || 0};
  outline: none;
  padding: 10px 15px;
  transition: background 0.3s ease-in-out, color 0.3s linear;

  &:hover {
    background: #fff;
    color: #232323;
  }
`;

export default Button;
