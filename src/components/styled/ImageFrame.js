import styled from 'styled-components';

const ImageFrame = styled.figure`
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 4px solid #232323;
  box-shadow: inset 1px 1px 10px red;
  height: 200px;
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  width: 155px;
`;

export default ImageFrame;
