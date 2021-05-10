import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import Button from './styled/Button';

import data from '../static/data.json';

const options = data.map(item => ({
  value: item.value,
  label: item.altName || item.name,
}));

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return { status: response.status, data: await response.json() };
}

export default function Dropdown() {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSubmit() {
    if (!selectedOption) return;

    postData(`${process.env.REACT_APP_API_URL}/sms`, {
      label: selectedOption.label,
      value: selectedOption.value,
    }).then(res => {
      if (res.status !== 200) {
        alert('Error: dropdown selection failed to send. Please try again');
      } else {
        history.push('/complete');
      }
    });
  }

  return (
    <div className="dropdown">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <Button margin="15px 0 0" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
}
