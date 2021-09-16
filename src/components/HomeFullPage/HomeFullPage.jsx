import React from 'react';
import Typist from 'react-typist';
import { FullPageContainer, FullPageTitle, FullPageText } from './HomeFullPage.styles';

const HomeFullPage = () => (
  <FullPageContainer
    avgTypingSpeed={1000}
    cursor={{ show: false }}
    startDelay={500}
  >
    <FullPageTitle>
      UCSB Theta Tau
    </FullPageTitle>
    <Typist.Delay ms={500} />
    <FullPageText>
      The Largest and Oldest Co-Ed Engineering Fraternity
    </FullPageText>
  </FullPageContainer>
);

export { HomeFullPage };
