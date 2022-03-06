/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QandA } from '../QandA';
import { AboutContainer } from './FAQ.styles';

const FAQ = (props) => (
  <AboutContainer>
    <QandA {...props} />
  </AboutContainer>
);

export { FAQ };
