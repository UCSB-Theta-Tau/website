import React from 'react';
import {
  Quote, HomeFullPage, Deck,
} from '../../components';
import {
  HomeAbout, TTTitle,
} from './Home.styles';

const Home = () => (
  <>
    <HomeFullPage />
    <HomeAbout>
      <TTTitle>
        Theta Tau
      </TTTitle>
      <Quote quote="The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship." />
    </HomeAbout>
    <Deck
      title="pillars"
      dark
      cards={[{
        img: '/static/home/pillars/service.png',
        title: 'service',
        text: 'The surrounding communities are very important to us. We believe that giving back to the community not only benefits the communities, but our brotherhood as well. Working alongside with our brothers creates a strong bond and allows us to grow and get involved.',
      },
      {
        img: '/static/home/pillars/professionalism.png',
        title: 'professionalism',
        text: 'At Theta Tau, we assist all of our members develop the professional skills needed in life after graduation. From resume workshops to company info sessions, our chapter strives to provide the tools needed for any career path. With the variety of skills and mentorship available from our network of engineers, one has the support needed to achieve the high level of professionalism we see in our members.',
      }, {
        img: '/static/home/pillars/brotherhood.png',
        title: 'brotherhood',
        text: 'Promoting friendship and collaboration between fraternity members, brotherhood is one of the three key pillars of Theta Tau. Brothers of Theta Tau forge tightly-knit relationships through various brotherhood events, including socials, retreats, and friendly competition.',
      }]}
    />
  </>
);

export { Home };
