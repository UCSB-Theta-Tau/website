import styled from 'styled-components';

export const HomeAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Raleway,sans-serif;
  color: #333;
  height: 100vh;
  text-align: center;
`;

export const TTTitle = styled.div`
  font-size: 5em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
  @media (max-width: 480px) {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    max-width: 80vw;
  }
`;

export const TTSubtitle = styled.div`
  font-size: 3em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  @media (max-width: 480px) {
    padding-bottom: 0.5em;
    max-width: 80vw;
  }
`;

export const TTText = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
`;

export const PillarContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: 1fr;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Raleway,sans-serif;
  min-height: 100vh;
`;
