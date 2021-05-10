import { Fragment } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Header from '../components/styled/Header';
import Subheader from '../components/styled/Subheader';
import ExfilOption from '../components/ExfilOption';
import FlexContainer from '../components/styled/FlexContainer';
import ImageFrame from '../components/styled/ImageFrame';
import Timer from '../components/Timer';
import Dropdown from '../components/Dropdown';

import Bee2 from '../images/bee-2.jpg';
import Bee3 from '../images/bee-3.jpg';
import data from '../static/data.json';

const FlexItem = styled.div`
  flex: 1 0 auto;
  padding: 10px;
  text-align: center;

  & img {
    max-width: 100%;
    width: 200px;
  }
`;

const Paragraph = styled.p`
  color: ${props => props.color || 'inherit'};
`;

const HR = styled.hr`
  color: #232323;
  margin: ${props => props.margin || 0};
`;

function fetchImage(name) {
  if (!name) return null;
  // webpack's context module can import assets dynamically
  return require.context('../images', false, /.jpg$/)(`./${name}`).default;
}

export default function Confirmed() {
  return (
    <Page>
      <Header fontSize="4.5rem" margin="30px 0 50px">
        IDENTITY CONFIRMED
      </Header>
      <Subheader>Operator #0000b33</Subheader>
      <Timer />
      <FlexContainer
        justify="space-between"
        background="#232323"
        margin="0 0 20px 0"
      >
        <FlexItem>
          <ImageFrame image={Bee2} />
        </FlexItem>
        <FlexItem>
          <ImageFrame image={Bee3} />
        </FlexItem>
        <FlexItem padding="10px">
          <Paragraph color="#fff">OPERATOR STATUS:</Paragraph>
          <Paragraph color="#fff">
            <strong>AWAITING EXTRACTION</strong>
          </Paragraph>
        </FlexItem>
      </FlexContainer>
      <HR />
      <p>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
      <p>
        <strong>
          You answered: "<span style={{ color: 'red' }}>Simba</span>".
        </strong>
      </p>
      <p>Welcome back, Operator!</p>
      <p>
        Below is a list of exfil options, compiled by our regional intelligence
        officers in-country. Consider them carefully:
      </p>
      {data.map((item, index) => {
        return (
          <Fragment key={index}>
            <ExfilOption
              name={item.name}
              description={item.description}
              location={item.location}
              image={fetchImage(item.image)}
              url={item.url}
            />
            <HR margin="20px 0" />
          </Fragment>
        );
      })}
      <p>Consider carefully and make your selection below:</p>
      <Dropdown />
      <p style={{ marginTop: 50 }}>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
    </Page>
  );
}
