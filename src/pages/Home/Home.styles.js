import styled from 'styled-components';

export const HomeAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Raleway,sans-serif;
  color: #333;
  text-align: center;
  padding: 10em;
  @media (max-width: 480px) {
    padding: 5em;
  }
`;

export const TTTitle = styled.div`
  font-size: 4em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
  @media (max-width: 480px) {
    padding-bottom: 0.5em;
    max-width: 80vw;
  }
`;

export const TTText = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4c0000;
  font-family: Raleway,sans-serif;
  font-size: 3.5em;
  color: white;
  padding-top: 1em;
`;

export const PillarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: Raleway,sans-serif;
  background-color: #4c0000;
  padding: 5em;
  @media (max-width: 480px) {
    padding: 4em;
    flex-direction: column;
  }
`;
