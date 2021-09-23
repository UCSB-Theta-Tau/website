import React from 'react';
import { FullPage, About, Gallery } from '../../components';

const Brotherhood = () => (
  <>
    <FullPage title="Brotherhood" img="/static/brotherhood/brotherhood.jpg" />
    <About title="Our Brothers" text="As members of Theta Tau, we strive to maintain a strong brotherhood through social activities and events, personal talks, or just simply hanging out and studying together." />
    <Gallery imageDir="/static/brotherhood/brothers" size={23} />
  </>
);

export { Brotherhood };
