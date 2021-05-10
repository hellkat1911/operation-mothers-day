import styled from 'styled-components';

const StyledPage = styled.main`
  background-color: #fec0fe;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px 25px 50px;

  @media (max-width: 800px) {
    padding: 20px 5px;
  }
`;

export default function Page(props) {
  return <StyledPage>{props.children}</StyledPage>;
}
