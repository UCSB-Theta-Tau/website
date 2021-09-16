import React from 'react';
import {
  FullPage, Quote, HomeFullPage, Pillar,
} from '../../components';
import { HomeAbout, TTTitle, PillarContainer } from './Home.styles';

const Home = () => (
  <>
    <HomeFullPage />
    <HomeAbout>
      <TTTitle>
        Theta Tau
      </TTTitle>
      <Quote quote="The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship." />
    </HomeAbout>
    <FullPage subtitle="Pillars" background="#4c0000" />
    <PillarContainer>
      <Pillar pillar="service" />
      <Pillar pillar="professionalism" />
      <Pillar pillar="brotherhood" />
    </PillarContainer>
  </>
);

export { Home };
