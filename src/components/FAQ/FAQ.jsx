/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QandA } from '../QandA';
import { FAQContainer } from './FAQ.styles';

const FAQ = (props) => (
  <FAQContainer>
    <QandA {...props} />
  </FAQContainer>
);

export { FAQ };
