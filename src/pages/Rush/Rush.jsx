import React from 'react';
import { FullPage, About, FAQ } from '../../components';

const fbString = (
  <>
    <br />
    Come checkout our [link] for more information!
  </>
  // <>
  //   Come checkout our
  //   <a href="https://facebook.com/"> FB page </a>
  //   for more information!
  // </>
);

const data = {
  rows: [
    {
      id: '1',
      question: 'question',
      answer: 'answer',
    },
  ],
};

const Rush = () => (
  <>
    <FullPage title="Rush" img="/static/professionalism/professionalism.jpg" />
    <About
      title="Spring 2022 Rush"
      text={[
        'After a long hiatus, we are resuming our recruitment this WINTER! These events will occur week 1 (January 4th - January 8th) of 2021.',
        fbString,
      ]}
    />
    <FAQ data={data} />
  </>
);

export { Rush };
