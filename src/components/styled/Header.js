import styled from 'styled-components';

const Header = styled.h1`
  border: 2px dashed red;
  color: red;
  display: inline-block;
  font-size: ${props => (props.fontSize ? props.fontSize : '3.8rem')};
  margin: ${props => (props.margin ? props.margin : '15px 0 30px')};
  padding: 10px 15px 0;
  transform: rotate(-5deg);
`;

export default Header;
