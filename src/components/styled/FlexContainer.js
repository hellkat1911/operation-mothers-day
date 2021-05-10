import styled from 'styled-components';

const FlexContainer = styled.div`
  background: ${props => props.background || 'transparent'};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify || ''};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
`;

export default FlexContainer;
