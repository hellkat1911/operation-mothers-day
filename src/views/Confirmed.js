import { Fragment } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Header from '../components/styled/Header';
import Subheader from '../components/styled/Subheader';
import ExfilOption from '../components/ExfilOption';
import FlexContainer from '../components/styled/FlexContainer';
import ImageFrame from '../components/styled/ImageFrame';
import Timer from '../components/Timer';

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
  return require.context('../images', true, /.jpg$/);
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
          You answered: "<span style={{ color: 'red' }}>Ditto</span>".
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
              // don't forget the '.default' or it won't work
              image={fetchImage(`./${item.image}`).default}
              url={item.url}
            />
            <HR margin="20px 0" />
          </Fragment>
        );
      })}
      <p>
        We would like to take this opportunity to acknowledge your service above
        and beyond the call of duty. You have the sincere gratitude of a
        grateful nation. Of course, any intentional or accidental disclosure of
        any classified information, including intelligence materiel, names of
        current or former operatives, or any operational details will result in
        your immediate extra-judicial detainment.
      </p>
      <p>
        <strong>
          CODE-WORD MOTHERS-DAY: STATUS:{' '}
          <span style={{ color: 'red' }}>ARCHIVED</span>
        </strong>
      </p>
      <p>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
    </Page>
  );
}
