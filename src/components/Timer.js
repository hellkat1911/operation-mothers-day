import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Subheader = styled.h4`
  font-size: 1.5rem;
  margin-top: 0;
`;

export default function Timer() {
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = time => {
    return new Date(time).toLocaleTimeString('en-US');
  };

  return <Subheader>{formatTime(timestamp)}</Subheader>;
}
