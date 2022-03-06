/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QandA } from '../QandA';
import { StyledFaqsList } from './FAQ.styles';

const FAQ = (props) => (
  <StyledFaqsList>
    {props.data.map((row) => (
      <QandA {...row} />
    ))}
  </StyledFaqsList>
);

export { FAQ };
