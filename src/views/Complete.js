import Page from '../components/Page';
import Header from '../components/styled/Header';

export default function Complete() {
  return (
    <Page>
      <Header>COMPLETE</Header>
      <p>
        We would like to take this opportunity to acknowledge your service above
        and beyond the call of duty. You have the sincere gratitude of a
        grateful nation. Following debrief, report to location ALPHA for
        reassignment.
      </p>
      <p>
        <strong>ADDENDUM:</strong> Any intentional or accidental disclosure of
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
    </Page>
  );
}
