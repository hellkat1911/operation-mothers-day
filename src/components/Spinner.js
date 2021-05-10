import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Background = styled.div`
  background: pink;
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Spinner() {
  return (
    <Background>
      <Container>
        <CircularProgress color="secondary" size="10rem" />
      </Container>
    </Background>
  );
}
