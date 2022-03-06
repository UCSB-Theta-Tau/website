import React from 'react';
import { FullPage, About } from '../../components';

const fbString = (
  <>
    Come checkout our
    <a href="https://facebook.com/"> FB page </a>
    for more information!
  </>
);

const Rush = () => (
  <>
    <FullPage title="Rush" img="/static/professionalism/professionalism.jpg" />
    <About
      title="Spring 2022 Rush"
      text={[
        'After a long hiatus, we are resuming our recruitment this WINTER! These events will occur week 1 (January 4th - January 8th) of 2021.',
        <br />,
        <br />,
        fbString,
      ]}
    />
  </>
);

export { Rush };
