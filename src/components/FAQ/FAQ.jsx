/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QandA } from '../QandA';
import { FAQContainer, StyledFaqsList } from './FAQ.styles';

const FAQ = (props) => (
  <FAQContainer>
    <StyledFaqsList>
      {props.data.map((row) => (
        <QandA {...row} />
      ))}
    </StyledFaqsList>
  </FAQContainer>
);

export { FAQ };
