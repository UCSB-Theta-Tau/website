import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
  color: #333;
  text-align: center;
  padding: 10em;
  @media (max-width: 480px) {
    padding: 5em;
  }
`;
