import React from 'react';
import { Class } from '../../components';
import { ActivesContainer } from './Actives.styles';
import classes from './active_list.json';

const Actives = () => (
  <ActivesContainer>
    {classes.map((c) => (
      <Class name={c.class} actives={c.actives} />
    ))}
  </ActivesContainer>
);

export { Actives };
