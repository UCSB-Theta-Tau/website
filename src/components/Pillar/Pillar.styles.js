import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

export const WhiteBackground = styled.div`
  background-color: white;
`;

export const PillarContainer = styled(ReactCardFlip)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PillarTitle = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
`;

export const PillarText = styled.div`
  font-size: 1em;
  padding-left: 3vw;
  padding-right: 3vw;
`;

export const PillarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  box-shadow: 0 0 3vh 3vh rgba(0, 0, 0, 0.075);
  border-radius: 3vh;
  background-color: white;
  @media (max-width: 480px) {
    width: 90vw;
    height: 90vw;
    box-shadow: 0 0 0.5vh 0.5vh rgba(0, 0, 0, 0.075);
    margin-bottom: 1em;
  }
`;

export const PillarImg = styled.img`
  height: 15vh;
`;
