import styled from 'styled-components';
import ImageFrame from './styled/ImageFrame';

const Container = styled.div`
  background: #232323;
  border: ${props => (props.active ? '3px solid red' : '3px solid black')};
  margin-bottom: 15px;
  padding: 20px;

  & p,
  & span {
    color: #fff;
  }
`;

export default function ExfilOptions({
  name,
  description,
  location,
  image,
  url,
}) {
  return (
    <Container>
      <span>
        <strong>Option:</strong>
      </span>{' '}
      {url ? (
        <a href={url} target="_blank" rel="noreferrer noopener">
          <strong dangerouslySetInnerHTML={{ __html: name }} />
        </a>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: name }} />
      )}
      <p>
        <strong>Location: {location}</strong>
      </p>
      <p>{description}</p>
      {image && url ? (
        <a href={url} target="_blank" rel="noreferrer noopener">
          <ImageFrame image={image} />
        </a>
      ) : null}
    </Container>
  );
}
