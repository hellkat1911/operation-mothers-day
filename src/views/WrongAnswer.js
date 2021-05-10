import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Header from '../components/styled/Header';
import ditto from '../images/ditto.png';

const Image = styled.img`
  background: rgba(35, 35, 35, 0.2);
  border-radius: 30%;
  margin-right: 10px;
  vertical-align: bottom;
  width: 50px;
`;

export default function WrongAnswer() {
  let query = new URLSearchParams(useLocation().search);

  function getQueryParam(param) {
    return atob(query.get(param));
  }

  return (
    <Page>
      <Header fontSize="4.5rem">WRONG ANSWER</Header>
      <p>
        You entered: "
        <strong style={{ color: 'red' }}>{getQueryParam('pw')}</strong>"
      </p>
      <p>
        This passphrase is <strong>INCORRECT</strong>.
      </p>
      <p>
        This interaction has been logged and an FBI detainment team has been
        dispatched to your location.
      </p>
      <div>
        <Image src={ditto} alt="Hmmmm..." />
        <Link to="/">Go Back</Link>
      </div>
    </Page>
  );
}
