import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

export const WhiteBackground = styled.div`
  background-color: white;
`;

export const CardContainer = styled(ReactCardFlip)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 20vh;
`;

export const CardTitle = styled.div`
  font-size: 2vw;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
  @media (max-width: 480px) {
    font-size: 4vh;
  }
`;

export const CardText = styled.div`
  font-size: 1vw;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 480px) {
    font-size: 2vh;
  }
`;

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vw;
  box-shadow: 0 0 3vh 3vh rgba(0, 0, 0, 0.075);
  border-radius: 3vh;
  background-color: white;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 90vw;
    height: 90vw;
    box-shadow: 0 0 0.5vh 0.5vh rgba(0, 0, 0, 0.075);
    margin-bottom: 1em;
  }
`;

export const CardImg = styled.img`
  height: 15vh;
`;
