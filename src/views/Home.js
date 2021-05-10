import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Marquee from '../components/Marquee';

const CustomButton = styled.button`
  background: #232323;
  border: 2px solid #232323;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  outline: none;
  padding: 10px 15px;
  transition: background 0.3s ease-in-out, color 0.3s linear;

  &:hover {
    background: #fff;
    color: #232323;
  }
`;

export default function Home() {
  const history = useHistory();

  function openPopUp() {
    const passphrase = prompt(
      "Which Pokémon is your boyfriend's Patronus?",
      'Enter name of Pokémon here'
    );
    if (passphrase.toLowerCase() === 'ditto') {
      history.push('/0000b33');
    } else {
      history.push(`/wrong?pw=${btoa(passphrase)}`);
    }
  }

  return (
    <Page>
      <Marquee />
      <hr style={{ color: '#232323' }} />
      <p>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
      <p>
        This dossier contains classified information regarding the activities
        and current whereabouts of Operator #0000b33, a.k.a. "Bee", "Bookish
        Bee", or "The Librarian", currently assigned to Western New York state.
      </p>
      <p>
        Operator is primary source of intelligence for internal action code-word{' '}
        <strong>"MOTHERS-DAY"</strong>, the primary objective of which is
        deep-cover infiltration of terrorist cells engaged in criminal
        conspiracies in violation of federal statute, including:
      </p>
      <ul>
        <li>illegal importation and distribution of exotic flora</li>
        <li>possession of seditious literature</li>
        <li>failure to properly re-seal containers</li>
        <li>lewd and lascivious behavior</li>
        <li>witchcraft</li>
      </ul>
      <p>
        At this time, operator status is <strong>UNKNOWN</strong>. Her last
        scheduled contact at 04h00 was missed, and no further SIGINT has been
        received.
      </p>
      <p>
        Operator is now considered at-risk, and must be extracted as soon as
        possible to a neutral location for debrief. Due to the sensitive nature
        of this action, the time and location of extraction must be selected and
        confirmed only AFTER operator positively identifies herself.
      </p>
      <p>
        Below is a link to the extraction options available, accessible only by{' '}
        <strong>PASS-PHRASE</strong>. Successful authentication will result in a
        classified list of locations to be confirmed personally at the time of
        contact.
      </p>
      <p>
        Once the extraction location is confirmed, internal action code-word{' '}
        <strong>"MOTHERS-DAY"</strong> will be archived and all operational
        details disavowed. Operator should be considered{' '}
        <strong>dangerous</strong> and&nbsp;
        <strong>extremely sexy</strong>.
      </p>
      <p>
        Per USPC§14, Subsection (b), this dossier must be destroyed after
        reading. Failure to comply can result in penalties of up to 15 years in
        federal prison and/or $150,000 fine.
      </p>
      <CustomButton role="button" onClick={openPopUp}>
        CLICK TO CONFIRM IDENTITY
      </CustomButton>
      <p>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
    </Page>
  );
}
