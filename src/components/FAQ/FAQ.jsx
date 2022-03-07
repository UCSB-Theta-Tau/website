/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QandA } from '../QandA';
import { StyledFaqsList, FaqTitle } from './FAQ.styles';

const FAQ = (props) => (
  <StyledFaqsList>
    <FaqTitle>{props.title}</FaqTitle>
    {props.data.map((row) => (
      <QandA {...row} />
    ))}
  </StyledFaqsList>
);

export { FAQ };
