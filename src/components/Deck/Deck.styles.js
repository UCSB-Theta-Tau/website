import styled from "styled-components";

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.dark ? "#4c0000" : "white")};
  font-family: Raleway, sans-serif;
  min-height: 100vh;
`;

export const DeckTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4.5em;
  ${(props) =>
    props.dark
      ? `color: white;
    border-bottom: 5px solid white;`
      : `color: #333;
    border-bottom: 5px solid #8b0000;`}
  text-transform: capitalize;
  padding-top: 1em;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5em;
  padding-bottom: 5em;
  width: 100%;
  @media (max-width: 480px) {
    padding-top: 4em;
    padding-bottom: 4em;
    flex-direction: column;
  }
`;
