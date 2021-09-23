import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 60vw;
  font-size: 1.5em;
  text-align: left;
  @media (max-width: 480px) {
    max-width: 90vw;
  }
`;

export const QuoteSymbol = styled(FontAwesomeIcon)`
  color: #8b0000;
  margin-right: 0.5em;
`;
