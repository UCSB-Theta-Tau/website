import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { QuoteContainer, QuoteSymbol } from './Quote.styles';

const Quote = (props) => (
  <QuoteContainer>
    <QuoteSymbol icon={faQuoteLeft} />
    {props.quote}
  </QuoteContainer>
);

export { Quote };
