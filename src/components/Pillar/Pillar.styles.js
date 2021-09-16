import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

export const PillarContainer = styled(ReactCardFlip)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PillarTitle = styled.div`
  font-size: 3em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
`;

export const PillarImg = styled.img`
  height: 15vh;
`;
