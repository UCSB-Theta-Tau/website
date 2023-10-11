import styled from "styled-components";

export const StyledFaqsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #efefef;
  padding: 10em 0 10em 0;
  padding: rem;
  font-family: Raleway, sans-serif;
  text-align: center;
`;

export const FaqTitle = styled.div`
  font-size: 4em;
  text-transform: uppercase;
  border-bottom: 5px solid #8b0000;
  margin-bottom: 0.5em;
  @media (max-width: 480px) {
    padding-bottom: 0.5em;
  }
`;
