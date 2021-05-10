import styled from 'styled-components';
import Header from './styled/Header';
import Subheader from './styled/Subheader';
import FlexContainer from './styled/FlexContainer';
import ImageFrame from './styled/ImageFrame';
import Timer from './Timer';
import Bee1 from '../images/bee-1.jpg';

const FlexItem = styled.div`
  flex: ${props => (props.left ? '1 0 auto' : '0 1 auto')};

  @media (max-width: 525px) {
    /* flex: 1 0 auto; */
  }
`;

export default function Marquee() {
  return (
    <FlexContainer marginBottom="0 0 20px 0">
      <FlexItem left>
        <Header fontSize="3.8rem">
          <strong>TOP SECRET</strong>
        </Header>
        <Subheader>Designator: MOTHERS-DAY</Subheader>
        <Subheader>Operator ID: #0000b33</Subheader>
        <Subheader>
          Real Name:
          &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;
        </Subheader>
        <Subheader>Location: West Seneca, NY</Subheader>
        <Timer />
      </FlexItem>
      <FlexItem textAlignRight>
        <ImageFrame image={Bee1} />
      </FlexItem>
    </FlexContainer>
  );
}
