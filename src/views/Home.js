import { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@material-ui/core';
import styled from 'styled-components';
import Page from '../components/Page';
import Marquee from '../components/Marquee';
import Header from '../components/styled/Header';
import Button from '../components/styled/Button';
import Spinner from '../components/Spinner';

const CustomContent = styled(DialogContent)`
  margin-bottom: 25px;
`;

const CustomInput = styled(TextField)`
  & div {
    font-family: 'Special Elite', sans-serif;
    font-size: 1.5rem;
  }
`;

function Content() {
  const history = useHistory();

  const [isOpen, togglePopup] = useReducer(x => !x, false);
  const [passphrase, setPassphrase] = useState('');

  function handleSubmit() {
    if (passphrase && passphrase.toLowerCase() === 'simba') {
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
      <Button onClick={togglePopup}>CLICK TO CONFIRM IDENTITY</Button>
      <p>
        <strong>TOP SECRET//SI//NOFORN/FISA</strong>
      </p>
      <Dialog
        open={isOpen}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <DialogTitle id="confirm-dialog-title" disableTypography={true}>
          <h4 style={{ color: 'red' }}>-- Enter Pass-Phrase --</h4>
        </DialogTitle>
        <CustomContent>
          <p id="confirm-dialog-description">
            <strong>
              What was the name of the parrot that lived in the lobby of the
              first hotel you ever stayed at with your boyfriend? 🦜
            </strong>
          </p>
          <CustomInput
            name="passphrase"
            variant="outlined"
            color="secondary"
            placeholder="Passphrase"
            value={passphrase}
            onChange={e => setPassphrase(e.target.value)}
            fullWidth
            autoFocus
          />
        </CustomContent>
        <DialogActions>
          <Button onClick={togglePopup}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}

export default function Home() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, togglePopup] = useReducer(x => !x, false);
  const [selection, setSelection] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/selection`)
      .then(response => response.text())
      .then(str => {
        const data = JSON.parse(str);
        if (data.selection === null) {
          setIsLoading(false);
        } else {
          setSelection(data.selection);
          setIsLoading(false);
          togglePopup();
        }
      });
  }, []);

  function handleRestart() {
    fetch(`${process.env.REACT_APP_API_URL}/clear`, { method: 'DELETE' })
      .then(response => response.text())
      .then(str => {
        togglePopup();
      });
  }

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Content />
        <Dialog
          open={isOpen}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
        >
          <DialogTitle id="dialog-title" disableTypography={true}>
            <Header margin="20px 0 0">Start Over?</Header>
          </DialogTitle>
          <DialogContent>
            <p id="dialog-description">
              You have already selected {selection.label} as your exfil
              location. Would you like to clear your choice and start over from
              the beginning?
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => history.push('/complete')}>Cancel</Button>
            <Button onClick={handleRestart}>Restart</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
